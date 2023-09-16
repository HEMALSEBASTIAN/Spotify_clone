import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LastValueFromConfig } from 'rxjs/internal/lastValueFrom';
import { IMusic } from 'src/app/app-component.interface';
import { MusicServiceService } from 'src/app/services/music-service.service';

@Component({
  selector: 'app-music-creation',
  templateUrl: './music-creation.component.html',
  styleUrls: ['./music-creation.component.scss']
})
export class MusicCreationComponent implements OnInit {
  public music!: Partial<IMusic>;

  public musicProduct!: FormGroup<{
    id: FormControl<any>,
    albumName: FormControl<any>,
    authorName: FormControl<any>,
    category: FormControl<any>,
    imageUrl: FormControl<any>
  }>;

  public authorNameCheck!: AbstractControl;
  public categoryCheck!: AbstractControl;
  public imageUrlCheck!: AbstractControl;

  public validationCheck: boolean = false;
  public title: string = '';
  public musicId?: number;
  public currentMusic!: IMusic;

  constructor(private readonly router: Router,
    private readonly musicService: MusicServiceService,
    private readonly fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef,
    private readonly route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.musicProduct = this.fb.group({
      id: [undefined],
      albumName: ['', Validators.required],
      authorName: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })

    this.authorNameCheck = this.musicProduct.controls['authorName'];
    this.categoryCheck = this.musicProduct.controls['category'];
    this.imageUrlCheck = this.musicProduct.controls['imageUrl'];

    this.route.queryParams.subscribe(params => {
      this.musicId = params['musicId']
    });
    console.log(this.musicId);
    if (this.musicId != null) {
      this.currentMusic = this.musicService.getMusicById(this.musicId) as IMusic;
      console.log(this.currentMusic);
      this.musicProduct = this.fb.group({
        id: [this.currentMusic.id, Validators.required],
        albumName: [this.currentMusic.albumName, Validators.required],
        authorName: [this.currentMusic.authorName, Validators.required],
        category: [this.currentMusic.category, Validators.required],
        imageUrl: [this.currentMusic.imageUrl, Validators.required]
      })
      this.title='Edit '+this.currentMusic.albumName;
    }
    else{
      this.title='Add Music'
    }
  }

  public onSubmit() {
    if (this.musicProduct.valid) {
      console.log(this.musicProduct.controls['id']);
      this.validationCheck=false;
      if (this.musicProduct.controls['id'].value != null) {
        console.log(this.musicProduct.value);
        this.musicService.updateMusic(this.musicProduct.value as IMusic);
        this.reset();
        this.router.navigate(['bodyContainer']);
      }
      else {
        this.musicService.addMusic(this.musicProduct.value as Partial<IMusic>)
      }
      this.reset();
      this.resetFormControls();
    }
    else {
      this.validationCheck = true;
    }
  }


  public onVisit() {
    this.router.navigate(['bodyContainer'])
  }

  public resetFormControls() {
    Object.keys(this.musicProduct.controls).forEach((key) => {
      const control = this.musicProduct.get(key);
      if (control) {
        control.markAsUntouched(); // Mark control as untouched
        control.markAsPristine();  // Mark control as pristine (no changes)
      }
    });

    // Trigger change detection to update the view
    this.cdr.detectChanges();
  }

  public reset() {
    this.musicProduct.patchValue({
      albumName: '',
      authorName: '',
      category: '',
      imageUrl: ''
    })
  }
}

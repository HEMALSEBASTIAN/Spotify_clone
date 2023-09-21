import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { MusicCreationComponent } from './music-creation.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MusicServiceService } from 'src/app/services/music-service.service';
import { IMusic } from 'src/app/app-component.interface';

fdescribe('MusicCreationComponent', () => {
  let component: MusicCreationComponent;
  let fixture: ComponentFixture<MusicCreationComponent>;
  let localStorageService: LocalStorageService;
  let musicService: MusicServiceService;

  const mockActivatedRoute = {
    queryParams: of({ musicId: 1 }),
  };

  const localStorageData = {
    musicData: [
      {
        id: 1,
        albumName: 'Album 1',
        authorName: 'Author 1',
        category: 'Category 1',
        imgaeUrl: 'image1.jpg'
      }
    ]
  }

  const currentMusicList = [
    {
      id: 1,
      albumName: 'Album 1',
      authorName: 'Author 1',
      category: 'Category 1',
      imageUrl: 'image1.jpg'
    }
  ]
  beforeEach(() => {
    


    const localStorageServiceMock = {
      get: (key: string) => {
        if (key === 'musicData') {
          return JSON.stringify(localStorageData);
        }
        return null;
      },
    };

    const musicStorageServiceMock = {
      getMusicById: (key: number) => {
        if (key === 1) {
          return JSON.stringify(currentMusicList[0]);
        }
        return null;
      }
    }


    TestBed.configureTestingModule({
      declarations: [MusicCreationComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceMock },
        { provide: MusicServiceService, useValue: musicStorageServiceMock },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });
    localStorageService = TestBed.inject(LocalStorageService);
    musicService = TestBed.inject(MusicServiceService);
    fixture = TestBed.createComponent(MusicCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls', () => {
    expect(component.musicProduct).toBeDefined();
    expect(component.authorNameCheck).toBeDefined();
    expect(component.categoryCheck).toBeDefined();
    expect(component.imageUrlCheck).toBeDefined();
  });

});

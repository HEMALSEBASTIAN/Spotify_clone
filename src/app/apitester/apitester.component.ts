import { Component } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-apitester',
  templateUrl: './apitester.component.html',
  styleUrls: ['./apitester.component.scss']
})
export class ApitesterComponent {
  constructor(private apiService: ApiService) {}

  posts : any[] = [];
  ngOnInit() {
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}

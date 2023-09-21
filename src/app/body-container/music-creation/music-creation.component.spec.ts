import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MusicCreationComponent } from './music-creation.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MusicServiceService } from 'src/app/services/music-service.service';

describe('MusicCreationComponent', () => {
  let component: MusicCreationComponent;
  let fixture: ComponentFixture<MusicCreationComponent>;

  // Mocked data for local storage
  const localStorageData = {
    musicData: [
      {
        id: 1,
        albumName: 'Album 1',
        authorName: 'Author 1',
        category: 'Category 1',
        imageUrl: 'image1.jpg',
      },
      // Add more data as needed
    ],
  };

  beforeEach(() => {
    // Mock the ActivatedRoute with a BehaviorSubject
    const activatedRouteMock = {
      queryParams: new BehaviorSubject({ musicId: 1 }) // Provide any query parameters you need for testing
    };

    // Mock the LocalStorageService
    const localStorageServiceMock = {
      // Define a custom getItem method to return the mocked data
      getItem: (key: string) => {
        if (key === 'musicData') {
          return JSON.stringify(localStorageData);
        }
        return null; // Return null for other keys
      },
    };

    TestBed.configureTestingModule({
      declarations: [MusicCreationComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }, // Provide the mocked ActivatedRoute
        { provide: Router, useValue: {} },
        { provide: LocalStorageService, useValue: localStorageServiceMock }, // Provide the mocked LocalStorageService
        MusicServiceService,
      ],
    });

    fixture = TestBed.createComponent(MusicCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases for other component methods and functionality

});


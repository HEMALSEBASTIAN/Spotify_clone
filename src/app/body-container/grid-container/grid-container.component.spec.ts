import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContainerComponent } from './grid-container.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MusicServiceService } from 'src/app/services/music-service.service';

describe('GridContainerComponent', () => {
  let component: GridContainerComponent;
  let fixture: ComponentFixture<GridContainerComponent>;
  let mockMusicService: jasmine.SpyObj<MusicServiceService>
  let mockLocalService: jasmine.SpyObj<LocalStorageService>


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridContainerComponent],
      providers: [
        {provide: MusicServiceService, useValue:mockMusicService},
        {provide: LocalStorageService, useValue:mockLocalService}
      ],
    });
    fixture = TestBed.createComponent(GridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

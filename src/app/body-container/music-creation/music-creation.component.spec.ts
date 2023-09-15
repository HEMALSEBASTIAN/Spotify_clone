import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCreationComponent } from './music-creation.component';

describe('MusicCreationComponent', () => {
  let component: MusicCreationComponent;
  let fixture: ComponentFixture<MusicCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicCreationComponent]
    });
    fixture = TestBed.createComponent(MusicCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

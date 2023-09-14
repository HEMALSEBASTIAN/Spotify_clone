import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainerUsefullinksComponent } from './footer-container-usefullinks.component';

describe('FooterContainerUsefullinksComponent', () => {
  let component: FooterContainerUsefullinksComponent;
  let fixture: ComponentFixture<FooterContainerUsefullinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterContainerUsefullinksComponent]
    });
    fixture = TestBed.createComponent(FooterContainerUsefullinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

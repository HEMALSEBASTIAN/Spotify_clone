import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainerSocialmediaComponent } from './footer-container-socialmedia.component';

describe('FooterContainerSocialmediaComponent', () => {
  let component: FooterContainerSocialmediaComponent;
  let fixture: ComponentFixture<FooterContainerSocialmediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterContainerSocialmediaComponent]
    });
    fixture = TestBed.createComponent(FooterContainerSocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

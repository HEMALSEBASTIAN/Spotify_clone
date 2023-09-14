import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainerCommunitiesComponent } from './footer-container-communities.component';

describe('FooterContainerCommunitiesComponent', () => {
  let component: FooterContainerCommunitiesComponent;
  let fixture: ComponentFixture<FooterContainerCommunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterContainerCommunitiesComponent]
    });
    fixture = TestBed.createComponent(FooterContainerCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

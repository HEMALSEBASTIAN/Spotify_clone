import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainerCompanyComponent } from './footer-container-company.component';

describe('FooterContainerCompanyComponent', () => {
  let component: FooterContainerCompanyComponent;
  let fixture: ComponentFixture<FooterContainerCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterContainerCompanyComponent]
    });
    fixture = TestBed.createComponent(FooterContainerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitesterComponent } from './apitester.component';

describe('ApitesterComponent', () => {
  let component: ApitesterComponent;
  let fixture: ComponentFixture<ApitesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApitesterComponent]
    });
    fixture = TestBed.createComponent(ApitesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

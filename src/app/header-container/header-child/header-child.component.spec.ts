import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChildComponent } from './header-child.component';

describe('HeaderChildComponent', () => {
  let component: HeaderChildComponent;
  let fixture: ComponentFixture<HeaderChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderChildComponent]
    });
    fixture = TestBed.createComponent(HeaderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

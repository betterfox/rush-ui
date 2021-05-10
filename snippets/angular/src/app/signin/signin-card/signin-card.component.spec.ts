import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninCardComponent } from './signin-card.component';

describe('SigninCardComponent', () => {
  let component: SigninCardComponent;
  let fixture: ComponentFixture<SigninCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

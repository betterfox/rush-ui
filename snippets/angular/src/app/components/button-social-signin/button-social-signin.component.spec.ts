import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSocialSigninComponent } from './button-social-signin.component';

describe('ButtonSocialSigninComponent', () => {
  let component: ButtonSocialSigninComponent;
  let fixture: ComponentFixture<ButtonSocialSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSocialSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSocialSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateLineWithTextComponent } from './separate-line-with-text.component';

describe('SeparateLineWithTextComponent', () => {
  let component: SeparateLineWithTextComponent;
  let fixture: ComponentFixture<SeparateLineWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparateLineWithTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateLineWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

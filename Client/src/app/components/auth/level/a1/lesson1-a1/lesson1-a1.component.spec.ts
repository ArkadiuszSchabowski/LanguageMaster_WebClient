import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1A1Component } from './lesson1-a1.component';
import { MaterialModule } from 'src/app/_modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Lesson1A1Component', () => {
  let component: Lesson1A1Component;
  let fixture: ComponentFixture<Lesson1A1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lesson1A1Component],
      imports: [BrowserAnimationsModule, MaterialModule]
    });
    fixture = TestBed.createComponent(Lesson1A1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

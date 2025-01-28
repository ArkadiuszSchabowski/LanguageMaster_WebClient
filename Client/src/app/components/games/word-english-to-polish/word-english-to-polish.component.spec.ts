import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordEnglishToPolishComponent } from './word-english-to-polish.component';

describe('WordEnglishToPolishComponent', () => {
  let component: WordEnglishToPolishComponent;
  let fixture: ComponentFixture<WordEnglishToPolishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordEnglishToPolishComponent]
    });
    fixture = TestBed.createComponent(WordEnglishToPolishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

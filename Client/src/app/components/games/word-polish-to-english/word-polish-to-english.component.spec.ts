import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPolishToEnglishComponent } from './word-polish-to-english.component';

describe('WordPolishToEnglishComponent', () => {
  let component: WordPolishToEnglishComponent;
  let fixture: ComponentFixture<WordPolishToEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordPolishToEnglishComponent]
    });
    fixture = TestBed.createComponent(WordPolishToEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

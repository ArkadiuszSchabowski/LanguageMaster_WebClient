import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundMatchComponent } from './sound-match.component';

describe('SoundMatchComponent', () => {
  let component: SoundMatchComponent;
  let fixture: ComponentFixture<SoundMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoundMatchComponent]
    });
    fixture = TestBed.createComponent(SoundMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

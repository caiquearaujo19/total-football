import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelStarsComponent } from './level-stars.component';

describe('LevelStarsComponent', () => {
  let component: LevelStarsComponent;
  let fixture: ComponentFixture<LevelStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

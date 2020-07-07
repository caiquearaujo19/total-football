import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChampionshipsComponent } from './state-championships.component';

describe('StateChampionshipsComponent', () => {
  let component: StateChampionshipsComponent;
  let fixture: ComponentFixture<StateChampionshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateChampionshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateChampionshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

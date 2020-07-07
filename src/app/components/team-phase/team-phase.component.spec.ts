import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPhaseComponent } from './team-phase.component';

describe('TeamPhaseComponent', () => {
  let component: TeamPhaseComponent;
  let fixture: ComponentFixture<TeamPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

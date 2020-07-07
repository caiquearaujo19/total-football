import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDComponent } from './serie-d.component';

describe('SerieDComponent', () => {
  let component: SerieDComponent;
  let fixture: ComponentFixture<SerieDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

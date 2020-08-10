import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPlayerComponent } from './field-player.component';

describe('FieldPlayerComponent', () => {
  let component: FieldPlayerComponent;
  let fixture: ComponentFixture<FieldPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

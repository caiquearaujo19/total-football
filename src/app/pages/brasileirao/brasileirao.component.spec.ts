import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasileiraoComponent } from './brasileirao.component';

describe('BrasileiraoComponent', () => {
  let component: BrasileiraoComponent;
  let fixture: ComponentFixture<BrasileiraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasileiraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasileiraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpotterComponent } from './hpotter.component';

describe('HpotterComponent', () => {
  let component: HpotterComponent;
  let fixture: ComponentFixture<HpotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDataComponent } from './viewAllData.component';

describe('SongsPageComponent', () => {
  let component: ViewAllDataComponent;
  let fixture: ComponentFixture<ViewAllDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

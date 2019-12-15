import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewComponent } from './userReviewComponent.component';

describe('SongsPageComponent', () => {
  let component: UserReviewComponent;
  let fixture: ComponentFixture<UserReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

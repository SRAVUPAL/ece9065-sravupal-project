import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSongPageComponent } from './userSongPage.component';

describe('UserSongPageComponent', () => {
  let component: UserSongPageComponent;
  let fixture: ComponentFixture<UserSongPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSongPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSongPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

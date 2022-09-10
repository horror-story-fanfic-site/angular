import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerFeedPageComponent } from './follower-feed-page.component';

describe('FollowerFeedPageComponent', () => {
  let component: FollowerFeedPageComponent;
  let fixture: ComponentFixture<FollowerFeedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerFeedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

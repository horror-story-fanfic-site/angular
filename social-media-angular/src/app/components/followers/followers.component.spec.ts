import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersComponent } from './followers.component';

import { ActivatedRoute, Router } from '@angular/router';
import { FollowersService } from 'src/app/services/followers.service';
import User from '../../models/User';

describe('FollowersComponent', () => {
  let component: FollowersComponent;
  let fixture: ComponentFixture<FollowersComponent>;

//   let followersServiceStub: Partial<FollowersService>;
//   followersServiceStub = {
// //    withCredentials: true;
//     toFollowUser: { User },
//   };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersComponent ],

      // provide a test-double
      
      providers: [{ provide: FollowersService, useValue: followersServiceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

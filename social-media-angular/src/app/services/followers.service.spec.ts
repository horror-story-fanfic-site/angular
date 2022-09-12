import { TestBed } from '@angular/core/testing';
import { FollowersService } from './followers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('FollowersService', () => {
  let service: FollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

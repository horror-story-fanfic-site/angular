import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]

    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user'), () => {
    service.getProfile().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.username).toBeTruthy();
      expect(result.username.length).toEqual(1);
      console.log('result verified');
    });
    
    const req = httpMock.expectOne(`${environment.baseUrl}/search`);
  }
});

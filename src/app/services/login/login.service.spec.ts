import {
  TestBed,
  tick,
  fakeAsync,
  inject
} from '@angular/core/testing';
import {
  LoginService
} from './login.service';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  User
} from 'src/app/models/user';
import {
  HttpTestingController
} from '@angular/common/http/testing';

describe('LoginService', () => {
  let service: LoginService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.get(LoginService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('login to be called', () => {
    const reqData: User = {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'test@test.com',
      password: 'test'
    };
    const loginSpy = spyOn(service, 'loginUser');
    service.loginUser(reqData);
    expect(loginSpy).toHaveBeenCalled();
  });
  it('Login - POST', () => {
    fakeAsync(
      inject(
        [HttpTestingController],
        (backend: HttpTestingController) => {
          const url = 'https://demo-api.now.sh/users';
          const respData = [{
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'test@test.com',
          }];
          const reqData: User = {
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'test@test.com',
            password: 'test'
          };
          let response = null;
          service.loginUser(reqData).subscribe(
            (receivedResponse: any) => {
              response = receivedResponse;
            },
            (error: any) => {}
          );
          const requestWrapper = backend.expectOne({
            url: 'https://demo-api.now.sh/users'
          });
          requestWrapper.flush(respData);
          tick();
          expect(requestWrapper.request.method).toEqual('POST');
          expect(response.body).toEqual(respData);
          expect(response.status).toBe(200);
        }
      )
    );
  });
});

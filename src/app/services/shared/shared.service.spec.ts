import {
  TestBed
} from '@angular/core/testing';
import {
  SharedService
} from './shared.service';
import {
  HttpErrorResponse
} from '@angular/common/http';

describe('SharedService', () => {
  let service: SharedService;
  let isLoadingSpy;
  let showNotificationSpy;
  let loggedInSpy;
  let logFailInSpy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService]
    });
    service = TestBed.get(SharedService);
    isLoadingSpy = spyOn(service.isLoading, 'next');
    showNotificationSpy = spyOn(service.showNotification, 'next');
    loggedInSpy = spyOn(service.userLoggedIn, 'next');
    logFailInSpy = spyOn(service.userLoggedInFailed, 'next');
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('showLoading - shared service', () => {
    service.showLoading();
    expect(isLoadingSpy).toHaveBeenCalled();
  });
  it('hideLoading - shared service', () => {
    service.hideLoading();
    expect(isLoadingSpy).toHaveBeenCalled();
  });
  it('showNotifications - shared service', () => {
    service.showNotifications();
    expect(showNotificationSpy).toHaveBeenCalled();
  });
  it('hideNotifications - shared service', () => {
    service.hideNotifications();
    expect(showNotificationSpy).toHaveBeenCalled();
  });
  it('userLoggedInSuccess - shared service', () => {
    service.userLoggedInSuccess();
    expect(loggedInSpy).toHaveBeenCalled();
    expect(logFailInSpy).toHaveBeenCalled();
  });
  it('userLoggedInFail - shared service', () => {
    service.userLoggedInFail();
    expect(loggedInSpy).toHaveBeenCalled();
    expect(logFailInSpy).toHaveBeenCalled();
  });
  it('handling error - shared service', () => {
    const mockErrorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    const spy = spyOn(service, 'handleError');
    service.handleError(mockErrorResponse);
    expect(spy).toHaveBeenCalled();
  });
});

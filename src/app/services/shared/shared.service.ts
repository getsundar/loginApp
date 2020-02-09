import {
  Injectable
} from '@angular/core';
import {
  throwError,
  Subject,
  Observable
} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isLoading = new Subject < boolean > ();
  showNotification = new Subject < boolean > ();
  userLoggedIn = new Subject < boolean > ();
  userLoggedInFailed = new Subject < boolean > ();
  public getIsLoading(): Observable < boolean > {
    return this.isLoading.asObservable();
  }
  // pre loader
  showLoading() {
    this.isLoading.next(true);
  }
  hideLoading() {
    this.isLoading.next(false);
  }
  showNotifications() {
    this.showNotification.next(true);
  }
  hideNotifications() {
    this.showNotification.next(false);
  }
  // user login
  userLoggedInSuccess() {
    this.userLoggedIn.next(true);
    this.userLoggedInFailed.next(false);
  }
  userLoggedInFail() {
    this.userLoggedIn.next(false);
    this.userLoggedInFailed.next(true);
  }
  // hsndling error
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

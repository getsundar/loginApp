import {
  Injectable
} from '@angular/core';
import {
  HttpHeaders,
  HttpClient
} from '@angular/common/http';
import {
  catchError
} from 'rxjs/operators';
import {
  SharedService
} from '../shared/shared.service';
import {
  User
} from '@app/models/user';
import {
  environment
} from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient, private sharedService: SharedService) {}
  loginUser(userDetails: User) {
    const {
      password,
      ...userDetailsToSend
    } = userDetails;
    return this.http.post < User > (environment.apiUrl + '/loginUser/', userDetailsToSend, this.httpOptions).pipe(
      catchError(this.sharedService.handleError)
    );
  }
}

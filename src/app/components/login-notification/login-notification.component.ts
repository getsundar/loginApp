import {
  Component
} from '@angular/core';
import {
  Subject
} from 'rxjs';
import {
  SharedService
} from '@app/services/shared/shared.service';

@Component({
  selector: 'app-login-notification',
  templateUrl: './login-notification.component.html',
  styleUrls: ['./login-notification.component.scss']
})
export class LoginNotificationComponent {
  userLoggedInSuccess: Subject < boolean > = this.sharedService.userLoggedIn;
  userLoggedInFailed: Subject < boolean > = this.sharedService.userLoggedInFailed;
  constructor(private sharedService: SharedService) {}
  color = 'primary';
  mode = 'indeterminate';
}

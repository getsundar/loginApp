import {
  Component
} from '@angular/core';
import {
  SharedService
} from 'src/app/services/shared/shared.service';
import { Subject } from 'rxjs';

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

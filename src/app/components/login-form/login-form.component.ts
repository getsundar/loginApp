import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Subject
} from 'rxjs';
import {
  LoginService
} from '@app/services/login/login.service';
import {
  SharedService
} from '@app/services/shared/shared.service';
import {
  ValidationService
} from '@app/services/validation/validation.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  showNotification: Subject < boolean > = this.sharedService.showNotification;
  isLoading: Subject < boolean > = this.sharedService.isLoading;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private sharedService: SharedService) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8), ValidationService.forbiddenNameValidator,
        ValidationService.caseValidator
      ]]
    });
  }
  onSubmit(userData) {
    this.sharedService.showNotifications();
    this.logUser(userData);
  }
  logUser(userData) {
    this.loginService.loginUser(userData).subscribe((data) => {
        this.sharedService.userLoggedInSuccess();
      },
      (error) => {
        this.sharedService.userLoggedInFail();
      });
  }
}

import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  LoginFormComponent
} from './login-form.component';
import {
  LoginService
} from 'src/app/services/login/login.service';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatInputModule
} from '@angular/material/input';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder
} from '@angular/forms';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  ErrorNotificationComponent
} from '../error-notification/error-notification.component';
import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  ValidationService
} from 'src/app/services/validation/validation.service';
import {
  LoginNotificationComponent
} from '../login-notification/login-notification.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture < LoginFormComponent > ;
  let errors = {};
  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [LoginFormComponent, ErrorNotificationComponent, LoginNotificationComponent],
        providers: [LoginService, HttpClient],
        imports: [
          MatFormFieldModule,
          MatSelectModule,
          MatInputModule,
          ReactiveFormsModule,
          MatButtonModule,
          HttpClientModule,
          BrowserAnimationsModule,
          NoopAnimationsModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    const formBuilder = new FormBuilder();
    component.loginForm = formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8), ValidationService.forbiddenNameValidator(),
        ValidationService.caseValidator
      ]]
    });
    errors = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('email field validity - required', () => {
    const email = component.loginForm.controls['email'];
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('email field validity - email Invalid input', () => {
    const email = component.loginForm.controls['email'];
    email.setValue('test@example');
    errors = email.errors || {};
    expect(ValidationService.emailValidator(email)).toBeTruthy();
  });
  it('email field validity - email valid input', () => {
    const email = component.loginForm.controls['email'];
    email.setValue('test@example.com');
    errors = email.errors || {};
    expect(ValidationService.emailValidator(email)).toBe(null);
  });
  it('firstName field validity - required', () => {
    const firstName = component.loginForm.controls['firstName'];
    firstName.setValue('firstName');
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('lastName field validity - required', () => {
    const lastName = component.loginForm.controls['lastName'];
    lastName.setValue('lastName');
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('password field validity - required', () => {
    const password = component.loginForm.controls['password'];
    password.setValue('test');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('password field validity - minimum length - fail', () => {
    const password = component.loginForm.controls['password'];
    password.setValue('test');
    errors = password.errors || {};
    expect(errors['minLength']).toBeFalsy();
  });
  it('password field validity - minimum length - success', () => {
    const password = component.loginForm.controls['password'];
    password.setValue('12345678');
    errors = password.errors || {};
    expect(errors['minLength']).toBeFalsy();
  });
  it('password field validity - firstName - forbidden', () => {
    const firstName = component.loginForm.controls['firstName'];
    const password = component.loginForm.controls['password'];
    firstName.setValue('firstName');
    password.setValue('testFirstName');
    errors = password.errors || {};
    expect(errors['forbiddenName']).toBeTruthy();
  });
  it('password field validity - lastName - forbidden', () => {
    const lastName = component.loginForm.controls['lastName'];
    const password = component.loginForm.controls['password'];
    lastName.setValue('lastName');
    password.setValue('testLastName');
    errors = password.errors || {};
    expect(errors['forbiddenName']).toBeTruthy();
  });
});

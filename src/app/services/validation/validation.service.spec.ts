import {
  TestBed
} from '@angular/core/testing';
import {
  ValidationService
} from './validation.service';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

describe('ValidationService', () => {
  let errors = {};
  let loginForm: FormGroup;
  beforeEach(() => {
    const formBuilder = new FormBuilder();
    loginForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['', [ValidationService.forbiddenNameValidator]]
    });
    errors = {};
  });
  it('should be created', () => {
    const service: ValidationService = TestBed.get(ValidationService);
    expect(service).toBeTruthy();
  });
  it('get validation config', () => {
    expect(ValidationService.getValidatorErrorMessage('required')).toEqual('Required');
  });
  it('email ValidationService - valid', () => {
    const email = loginForm.controls['email'];
    email.setValue('test@test.com');
    expect(ValidationService.emailValidator(email)).toEqual(null);
  });
  it('email ValidationService - Invalid', () => {
    const email = loginForm.controls['email'];
    email.setValue('test@test');
    expect(ValidationService.emailValidator(email)).toEqual({
      email: true
    });
  });
  it('caseValidator ValidationService - Invalid', () => {
    const password = loginForm.controls['password'];
    password.setValue('test');
    expect(ValidationService.caseValidator(password)).toEqual({
      caseError: true
    });
  });
  it('caseValidator ValidationService - valid', () => {
    const password = loginForm.controls['password'];
    password.setValue('Test');
    expect(ValidationService.caseValidator(password)).toEqual(null);
  });
  it('isEmpty ValidationService - valid', () => {
    const lastName = loginForm.controls['lastName'];
    lastName.setValue('');
    expect(ValidationService.isEmpty(lastName.value)).toEqual(true);
  });
  it('forbiddenName ValidationService - Invalid', () => {
    const lastName = loginForm.controls['lastName'];
    const password = loginForm.controls['password'];
    lastName.setValue('lastName');
    password.setValue('testLastName');
    expect(ValidationService.forbiddenNameValidator(password)).toEqual({
      forbiddenName: true
    });
  });
  it('forbiddenName ValidationService - Valid', () => {
    const lastName = loginForm.controls['lastName'];
    const password = loginForm.controls['password'];
    lastName.setValue('lastName');
    password.setValue('testtName');
    expect(ValidationService.forbiddenNameValidator(password)).toEqual(null);
  });
  it('check names ValidationService - Valid', () => {
    const lastName = loginForm.controls['lastName'];
    const password = loginForm.controls['password'];
    lastName.setValue('lastName');
    password.setValue('testtName');
    expect(ValidationService.checkForNames(password)).toEqual(null);
  });
});

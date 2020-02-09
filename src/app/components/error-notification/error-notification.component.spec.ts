import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  ErrorNotificationComponent
} from './error-notification.component';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  ValidationService
} from '@app/services/validation/validation.service';
describe('ErrorNotificationComponent', () => {
  let component: ErrorNotificationComponent;
  let fixture: ComponentFixture < ErrorNotificationComponent > ;
  let errors = {};
  let loginForm: FormGroup;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [ErrorNotificationComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotificationComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getValidatorErrorMessage - called', () => {
    const formBuilder = new FormBuilder();
    loginForm = formBuilder.group({
      firstName: ['']
    });
    component.control = new FormControl(loginForm.controls['firstName']);
    component.control.setValidators([Validators.required]);
    component.control.setValue('');
    expect(ValidationService.getValidatorErrorMessage('required')).toEqual('Required');
  });
  it('email field validity - email Invalid input', () => {
    const formBuilder = new FormBuilder();
    loginForm = formBuilder.group({
      firstName: ['']
    });
    component.control = new FormControl(loginForm.controls['firstName']);
    component.control.setValidators([Validators.required]);
    component.control.setValue('');
    errors = component.control.errors || {};
    spyOn(component, 'errorMessage').and.returnValue({
      required: 'Required'
    });
  });
});

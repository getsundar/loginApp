import {
  Injectable
} from '@angular/core';
import {
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue ? : any) {
    const validatorValueLength = validatorValue ? validatorValue.requiredLength : -1;
    const config = {
      required: 'Required',
      maxlength: 'Maximum length could be ' + validatorValueLength,
      minlength: 'Minimum length required ' + validatorValueLength,
      email: 'Invalid email',
      forbiddenName: 'Password must not contain first name or last name',
      caseError: 'Password must contain atleast one lower and upper letters,'
    };
    return config[validatorName];
  }
  static emailValidator(control) {
    if (ValidationService.isEmpty(control.value) || control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return null;
    } else {
      return {
        email: true
      };
    }
  }
  static caseValidator(control) {
    if (ValidationService.isEmpty(control.value) || control.value.match(/^(?=.*[a-z])(?=.*[A-Z])/)) {
      return null;
    } else {
      return {
        caseError: true
      };
    }

  }
  static isEmpty(str) {
    return str === null || str === undefined || str === '';
  }
  static forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): {
      [key: string]: any
    } | null => {
      if (!ValidationService.isEmpty(control.value)) {
        const forbidden = ((!ValidationService.isEmpty(control.parent.controls['firstName'].value) &&
            control.value.toLowerCase().includes(control.parent.controls['firstName'].value.toLowerCase())) ||
          ((!ValidationService.isEmpty(control.parent.controls['lastName'].value) &&
            control.value.toLowerCase().includes(control.parent.controls['lastName'].value.toLowerCase()))));
        return forbidden ? {
          forbiddenName: true
        } : null;
      }
    };
  }
}

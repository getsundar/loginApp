import {
  Component,
  Input
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import {
  ValidationService
} from 'src/app/services/validation/validation.service';


@Component({
  selector: 'app-error-notification',
  templateUrl: './error-notification.component.html',
  styleUrls: ['./error-notification.component.scss']
})
export class ErrorNotificationComponent {
  @Input() control: FormControl;

  errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
  }
}

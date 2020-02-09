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
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: Subject < boolean > = this.sharedService.isLoading;
  constructor(private sharedService: SharedService) {}
}

import {
  Injectable
} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  finalize
} from 'rxjs/operators';
import {
  SharedService
} from '../shared/shared.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public sharedService: SharedService) {}
  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    this.sharedService.showLoading();
    return next.handle(req).pipe(
      finalize(() => this.sharedService.hideLoading())
    );
  }
}

import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
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
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  ErrorNotificationComponent
} from './components/error-notification/error-notification.component';
import {
  LoginFormComponent
} from './components/login-form/login-form.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  LoginNotificationComponent
} from './components/login-notification/login-notification.component';
import {
  SharedService
} from './services/shared/shared.service';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import {
  LoaderInterceptor
} from './services/interceptors/loader.interceptor';
import {
  LoaderComponent
} from './components/loader/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ErrorNotificationComponent,
    LoginNotificationComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [SharedService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

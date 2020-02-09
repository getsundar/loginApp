import {
  TestBed,
  async
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  AppComponent
} from './app.component';
import {
  LoginFormComponent
} from './components/login-form/login-form.component';
import {
  ErrorNotificationComponent
} from './components/error-notification/error-notification.component';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AppRoutingModule
} from './app-routing.module';
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
  HttpClientModule,
  HttpClient
} from '@angular/common/http';
import {
  LoaderComponent
} from './components/loader/loader/loader.component';
import {
  LoginNotificationComponent
} from './components/login-notification/login-notification.component';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import {
  routes
} from './app-routing.module';
describe('AppComponent', () => {
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
        MatProgressBarModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        AppComponent,
        LoginFormComponent,
        ErrorNotificationComponent,
        LoaderComponent,
        LoginNotificationComponent
      ],
      providers: [HttpClient]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

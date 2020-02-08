import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  LoaderComponent
} from './loader.component';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture < LoaderComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [LoaderComponent],
        imports: [MatProgressBarModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

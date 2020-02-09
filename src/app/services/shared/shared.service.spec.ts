import {
  TestBed
} from '@angular/core/testing';

import {
  SharedService
} from './shared.service';
import {
  Subject
} from 'rxjs';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService]
    });
    service = TestBed.get(SharedService);
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('showLoading - shared service', () => {
    let sharedService: SharedService = TestBed.get(SharedService);
    sharedService.showLoading();
    sharedService.getIsLoading().subscribe((isload) => {
      debugger;
      expect(isload).toEqual(false);
    });
    // const isLoadingSpy = spyOn(service, 'showLoading');
    // const isLoading = new Subject < boolean > ();
    // isLoadingSpy.;
    // isLoading.subscribe((value) => {
    //   debugger;
    // })
  });
});

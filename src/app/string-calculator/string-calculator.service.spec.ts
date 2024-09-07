import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for empty string', () => {
    expect(service.add("")).toBe(0);
  });

  it('should return number itself if only one number is provided in string', () => {

    //this will give error as we have yet to handle this
    expect(service.add("5")).toBe(5);
  });

});

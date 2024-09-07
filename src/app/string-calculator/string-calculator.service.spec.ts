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
    expect(service.add("5")).toBe(5);
  });

  it('should return the summation of numbers if two numbers are provided', () => {
    expect(service.add("3,4")).toBe(7);
  });

  it('should return sum of all numbers that are provided', () => {
    expect(service.add("3,4,6")).toBe(13);
  })

  it('should handle new line as delimiter between numbers', () => {
    expect(service.add("1\n2,3")).toBe(6);
  });

});

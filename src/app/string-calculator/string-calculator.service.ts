import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  numArray: number[] = [];

  add(numbers: string): number{
    this.numArray = numbers.split(",").map((num) => parseInt(num, 10));

    if(!numbers){
      return 0;
    }

    if(!numbers.includes(",")){
      return parseInt(numbers, 10);
    }

    return this.numArray.reduce((sum, num) => sum + num, 0);
  }
}

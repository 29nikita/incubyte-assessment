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

    //cleaning up code as this will handle the single digit test case
    return this.numArray.reduce((sum, num) => sum + num, 0);
  }
}

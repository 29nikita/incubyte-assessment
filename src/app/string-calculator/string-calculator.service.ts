import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  numArray: number[] = [];

  add(numbers: string): number{
    if(!numbers){
      return 0;
    }

    //this will pass test case for new line as delimiter
    const delimiter = /\n|,/;
    this.numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

    return this.numArray.reduce((sum, num) => sum + num, 0);
  }
}

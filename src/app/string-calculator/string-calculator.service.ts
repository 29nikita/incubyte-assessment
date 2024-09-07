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

    let delimiter = /\n|,/;

    if(numbers.startsWith("//")){
      delimiter = new RegExp(numbers[2]);
      const delimiterEndIndex = numbers.indexOf("\n");
      numbers = numbers.substring(delimiterEndIndex+1);
    }
    this.numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

    return this.numArray.reduce((sum, num) => sum + num, 0);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  numArray: number[] = [];
  count: number = 0;

  add(numbers: string): number{
    this.count++;

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

    this.numArray = this.numArray.filter(num => num <= 1000);
    const negatives = this.numArray.filter(num => num < 0);

    if(negatives.length > 0){
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return this.numArray.reduce((sum, num) => sum + num, 0);
  }

  getCountOfAddFunction(): number{
    return this.count;
  }
}

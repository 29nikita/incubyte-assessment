import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  add(numbers: string): number{

    //this will handle first test case
    if(!numbers){
      return 0;
    }

    if(!numbers.includes(",")){
      return parseInt(numbers, 10);
    }

    return 0;
  }
}

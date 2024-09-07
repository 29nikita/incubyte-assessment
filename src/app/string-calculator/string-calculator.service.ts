import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  add(numbers: string): number{

    //this will handle second test case but will fail first test case
    if(!numbers.includes(",")){
      return parseInt(numbers, 10);
    }

    return 0;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  numArray: number[] = [];
  count: number = 0;
  delimiterEndIndex: any;
  delimiterString: string = "";

  add(numbers: string): number {
    this.count++;

    if (!numbers) {
      return 0;
    }

    let delimiter = /\n|,/;

    if (numbers.startsWith("//")) {
      this.delimiterEndIndex = numbers.indexOf("\n");
      const delimiterSection = numbers.substring(2, this.delimiterEndIndex);
      const multipleDelimiterMatch = delimiterSection.match(/\[.*?\]/g);

      if (multipleDelimiterMatch) {
        const delimiterPatterns = multipleDelimiterMatch.map((del) => del.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        delimiter = new RegExp(delimiterPatterns.join("|"), "g");
      }else {
        delimiter = new RegExp(delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
      
      } 

      numbers = numbers.substring(this.delimiterEndIndex + 1);
    }

    this.numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
   
    this.numArray = this.filterNumbersGreaterThanThousand(this.numArray);

    this.checkForNegatives(this.numArray);

    return this.calulateSumOfNumbers(this.numArray);
  }

  checkForNegatives(numArray: number[]){
    const negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
  }

  filterNumbersGreaterThanThousand(numArray: number[]){
    return numArray.filter(num => num <= 1000);
  }

  calulateSumOfNumbers(numArray: number[]): number{
    return numArray.reduce((sum, num) => sum + num, 0);
  }



  getCountOfAddFunction(): number {
    return this.count;
  }
}

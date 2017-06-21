import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {

  constructor() { }

  /*
  * Returns a random integer between min (inclusive) and max (inclusive)
  * Using Math.round() will give you a non-uniform distribution!
  */
  getRandomInt(min : number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   *
   * @param size
   * @param correctAnswer
   * @returns array of unique random numbers
   */
  getPositiveRandomIntArray(size : number, correctAnswer : number) : Array<number>{
    let array = [];
    let permutationLength;
    if(size < 1) {
      // return empty array
      return array;
    }
    if(correctAnswer < size) {
      permutationLength = size;
    } else {
      permutationLength = correctAnswer * 2;
    }

    // permutation with 0 to answer * 2
    for (let i = 0; i < permutationLength; i++) {
      array.push(i);
    }
    // shuffle
    array = this.shuffleArray(array);
    // resize
    array = array.slice(0, size);
    // set correct answer in array at random position
    array[this.getRandomInt(0, array.length - 1)] = correctAnswer;
    return array;
  }

  private shuffleArray(array : Array<any>) : Array<any> {
    let copy = array.slice();
    for (let i = 0; i < copy.length; i++) {
      let element = copy[i];
      let randomIndex = this.getRandomInt(0, copy.length - 1);
      copy[i] = copy[randomIndex];
      copy[randomIndex] = element;
    }
    return copy;
  }
}

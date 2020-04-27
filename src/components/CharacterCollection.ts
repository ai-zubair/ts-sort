class CharacterCollection{

  constructor(public data: string){
  }

  get length(): number{
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean{ //compares 2 numbers and returns a boolean indicating whether the numbers at the specified indices should be swapped
    return this.data[leftIndex].toUpperCase() > this.data[rightIndex].toUpperCase();
  }

  swap(leftIndex: number, rightIndex: number): void{ //swaps the numbers at the specified indices
    const characters = this.data.split('');

    /* we can now user array bsed swapping */
    const leftValue = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftValue;

    /* re-assign the modified string */
    this.data = characters.join('');
  } 
}

export { CharacterCollection }
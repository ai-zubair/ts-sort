class NumericCollection{

  constructor(public data: number[]){
  }

  get length(): number{
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean{ //compares 2 numbers and returns a boolean indicating whether the numbers at the specified indices should be swapped
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void{ //swaps the numbers at the specified indices
    const leftValue = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftValue;
  }
}

export { NumericCollection }
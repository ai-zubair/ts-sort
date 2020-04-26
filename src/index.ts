class Sorter{

  constructor(public collection: number[]){}

  sort(): void{ //uses bubble sort
    const { length } = this.collection; //array is essentially an object with a length property

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if(this.collection[j] > this.collection[j+1]){
          const temp = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = temp;
        }
      }
      
    }
  }

}

const sorter = new Sorter([10,0,-1,5,-2,1,23,4]);
sorter. sort();
console.log(sorter.collection);
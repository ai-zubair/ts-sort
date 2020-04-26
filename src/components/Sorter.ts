interface Sortable{
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

class Sorter{

  constructor(public collection: Sortable){}

  sort(): void{ //uses bubble sort
    const { length } = this.collection; //array is essentially an object with a length property

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if( this.collection.compare(j,j+1) ){
          this.collection.swap(j,j+1);
        } 
      } 
    }
  }

}

export { Sorter };
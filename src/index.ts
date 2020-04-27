import { Sorter } from "./components/Sorter";
import { NumericCollection } from "./components/NumericCollection";
import { CharacterCollection } from "./components/CharacterCollection";
import { LinkedList } from "./components/LinkedList";

// const numCollection = new NumericCollection([2,-1,44,1]);
// const charCollection = new CharacterCollection("XarQCcpzB");

// const numSorter = new Sorter(numCollection);
// const charSorter = new Sorter(charCollection);

// numSorter.sort();
// charSorter.sort();

// console.log(numCollection.data);
// console.log(charCollection.data);

const list = new LinkedList();
list.add(12);
list.add(-12);
list.add(10);
list.add(-3);
list.add(0);
list.add(2);

console.log('Unsorted List: ')
list.print();

const listSorter = new Sorter(list);
listSorter.sort();

console.log('Sorted List: ')
list.print();
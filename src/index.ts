import { NumericCollection } from "./components/NumericCollection";
import { CharacterCollection } from "./components/CharacterCollection";
import { LinkedList } from "./components/LinkedList";

const numCollection = new NumericCollection([2,-1,44,1]);
const charCollection = new CharacterCollection("XarQCcpzB");
const list = new LinkedList();
list.add(12);
list.add(-12);
list.add(10);
list.add(-3);
list.add(0);
list.add(2);

numCollection.sort();
console.log(numCollection.data);
charCollection.sort();
console.log(charCollection.data);
list.sort();
list.print();

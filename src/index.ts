import { Sorter } from "./components/Sorter";
import { NumericCollection } from "./components/NumericCollection";
import { CharacterCollection } from "./components/CharacterCollection";

const numCollection = new NumericCollection([2,-1,44,1]);
const charCollection = new CharacterCollection("XarQCcpzB");

const numSorter = new Sorter(numCollection);
const charSorter = new Sorter(charCollection);

numSorter.sort();
charSorter.sort();

console.log(numCollection.data);
console.log(charCollection.data);
import { Sorter } from "./components/Sorter";
import { NumericCollection } from "./components/NumericCollection";

const collection = new NumericCollection([2,-1,44,1]);
const sorter = new Sorter(collection);
sorter.sort();

console.log(collection.data);
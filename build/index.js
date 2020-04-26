"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./components/Sorter");
var NumericCollection_1 = require("./components/NumericCollection");
var collection = new NumericCollection_1.NumericCollection([10, 9, -2, 1]);
var sorter = new Sorter_1.Sorter(collection);
sorter.sort();
console.log(collection.data);

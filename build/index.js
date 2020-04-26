"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length; //array is essentially an object with a length property
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 0, -1, 5, -2, 1, 23, 4]);
sorter.sort();
console.log(sorter.collection);

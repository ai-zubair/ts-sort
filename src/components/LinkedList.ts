import { Sorter } from "./Sorter";

/* Represents a node within a linked list */
class ListNode {
  value: number;  /* assuming a linked lost of numbers */
  next: ListNode | null = null; /* set the next to null by default */

  constructor(value: number){
    this.value = value;
  }

}

class LinkedList extends Sorter{
  head: ListNode | null = null; /* linked list is empty by default */
  
  /* constructor not needed cause no customised initialiasation */

  /* appends a node to the tail of the linked list */
  add(value: number): void{
    /* create a new node */
    const listNode = new ListNode(value)

    /* case 1: linked list is empty */
    if(!this.head){
      this.head = listNode;
      return;  
    }

    /* case 2: linked list is not empty */
    let travellingNode = this.head;
    while(travellingNode.next){
      travellingNode = travellingNode.next;
    }
    /* travelling node points to the tail of the list */
    travellingNode.next = listNode;
  }

  /* determines the length of the linked list */
  get length(): number{
    /* case 1: empty list */
    if(!this.head){
      return 0;
    }

    /* case 2: non-empty list */
    let travellingNode = this.head;
    let listLength = 1;
    while(travellingNode.next){
      listLength++;
      travellingNode = travellingNode.next;
    }
    return listLength;
  }

  /* returns the node at a given index in the list (assuming zero-indexed list) */
  at(nodeIndex: number): ListNode{

    /* case 1: empty list */
    if(!this.head){
      throw new RangeError('Index out of bounds: Empty List')
    }

    /* case 2: non-empty list */
    let listIndex = 0
    let travellingNode: ListNode | null = this.head; /* travelling node becomes null for the tail */
    /* while we have a node in the list */
    while(travellingNode){ 

      if( listIndex === nodeIndex ){
        return travellingNode;
      }

      listIndex++;
      travellingNode = travellingNode.next; /* in case of the tail travellingNode will become null and hence explicit type annotation is requireed to composition of ListNode and null */
    }

    /* in case the index is not present in the list */
    throw new RangeError('Index out of bounds: Not found');

  }

  /* compares the specified nodes in the list for values */
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  /* swaps the values of two nodes in the list by value exchange and not by link-rearrangements */
  swap(leftIndex: number, rightIndex: number): void{
    const leftValue =  this.at(leftIndex).value;
    this.at(leftIndex).value = this.at(rightIndex).value;
    this.at(rightIndex).value = leftValue;
  }

  /* prints the values in the list from head to tail */
  print(): void{

    /* case 1: empty list */
    if(!this.head){
      return;
    }

    /* case 2: non-empty list */
    let travellingNode: ListNode | null = this.head;
    while(travellingNode){
      console.log(travellingNode.value);
      travellingNode = travellingNode.next;
    }
  }

}

export { LinkedList }
const LinkedList = require('../DSA-LinkedList/linkedList');
const supplFuncs = require('../DSA-LinkedList/supplFuncs');

const unSortedLL = new LinkedList();
unSortedLL.insertLast(3);
unSortedLL.insertLast(17);
unSortedLL.insertLast(8);
unSortedLL.insertLast(9);
unSortedLL.insertLast(1);
unSortedLL.insertLast(11);
unSortedLL.insertLast(12);
unSortedLL.insertLast(4);
//unSortedLL.insertLast(77);
unSortedLL.insertLast(27);
unSortedLL.insertLast(5);
unSortedLL.insertLast(15);

console.log(supplFuncs.display(unSortedLL));
//console.log(unSortedLL.head)

//console.log(supplFuncs.display(supplFuncs.sortList(unSortedLL)));


const mergeSortLL = function(linkedList) {

    // define size of input linked list
    const inputListLength = supplFuncs.size(linkedList);

    // if it's 0 or 1 element, we're done
    if (inputListLength <= 1) {
        return linkedList;
    }

    // define *index* of midpoint of list
    const middle = Math.floor(inputListLength / 2);

    // initialize 2 new linked lists
    const leftLinkedList = new LinkedList();
    const rightLinkedList = new LinkedList();

    // need to assign every element in the input linked list to one of these lists
    let currNode = linkedList.head;
    let i = 0;

    while (i <= inputListLength) {
        if (i < middle) {
            leftLinkedList.insertLast(currNode.value);
            currNode = currNode.next;
        } else if (i > middle) {
            rightLinkedList.insertLast(currNode.value)
            currNode = currNode.next;
        }
        i++;
    }

    const left = mergeSortLL(leftLinkedList);
    const right = mergeSortLL(rightLinkedList);
    
    return mergeLLs(left, right);
}

const mergeLLs = function(left, right) {

    let leftIndex = 0;
    let rightIndex = 0;

    // define sizes of input linked lists
    const leftLength = supplFuncs.size(left);
    const rightLength = supplFuncs.size(right);

    // initialize a totally new output linked list
    const mergedOutputLL = new LinkedList();

    // define current nodes in each input LL
    let currLeftNode = left.head;
    let currRightNode = right.head;

    // so long as there are un-allocated elements of BOTH lists, do comparisons
    while (leftIndex < leftLength && rightIndex < rightLength) {
        if (currLeftNode.value < currRightNode.value) {
            mergedOutputLL.insertLast(currLeftNode.value);
            leftIndex++;
            if (leftIndex < leftLength) {
                currLeftNode = currLeftNode.next;
            }
        } else {
            mergedOutputLL.insertLast(currRightNode.value);
            rightIndex++;
            if (rightIndex < rightLength) {
                currRightNode = currRightNode.next;
            }
        }
    }

    // as soon as one list is fully-allocated, put the remaining (ordered) contents
    //    of the other list straight into the output linkedList
    while (leftIndex < leftLength) {
        mergedOutputLL.insertLast(currLeftNode.value);
        leftIndex++;
        if (leftIndex < leftLength) {
            currLeftNode = currLeftNode.next;
        }
    }

    while (rightIndex < rightLength) {
        mergedOutputLL.insertLast(currRightNode.value);
        rightIndex++;
        if (rightIndex < rightLength) {
            currRightNode = currRightNode.next;
        }
    }
    
    return mergedOutputLL;
}

console.log(supplFuncs.display(mergeSortLL(unSortedLL)));
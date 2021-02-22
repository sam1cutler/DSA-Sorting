const testArray1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

var mergeSortCounter = 0;
var mergeCounter = 0;

const mergeSort = function(array) {

    if (array.length <= 1) {
        mergeSortCounter++;
        console.log(`Returning ${array} on mergeSort run #${mergeSortCounter}.`)
        return array;
    }

    const middle = Math.floor(array.length / 2);

    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    
    const mergedResult = merge(left, right, array);

    mergeSortCounter++;

    console.log(`Finishing run #${mergeSortCounter} of mergeSort, returning:`)
    console.log(mergedResult);

    return mergedResult;

}

const merge = function(left, right, array) {

    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    // so long as there are un-allocated elements of BOTH lists, do comparisons
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    // as soon as one list is fully-allocated, put the remaining (ordered) contents
    //    of the other list straight into the output array
    for (let i=leftIndex ; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i=rightIndex ; i < right.length ; i++) {
        array[outputIndex++] = right[i];
    }

    const mergedResult = array;

    mergeCounter++;

    console.log(`~~~Finishing run #${mergeCounter} of merge, returning:`)
    console.log(mergedResult);

    return mergedResult;

}

console.log(mergeSort(testArray1));
console.log(mergeSortCounter);
console.log(mergeCounter);
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

// "Lomuto's algorithm" (common in-place algo)
function partition(array, start, end) {

    console.log('       ~ Running partition function; array is currently:')
    console.log(array);

    // define the 'pivot' to be the first value in the [sub-portion of the] array [that is active?]
    const pivot = array[start];
    console.log(`       Pivot value is ${pivot}`);

    // define the start of partitioning range (?)
    let j = end-1;

    // iterate through all values in the active array, except the final value
    for (let i=end-1 ; i > start+1 ; i--) {
        // if the actively-considered element in the array is greater than or equal to the pivot value,
        if (array[i] >= pivot) {
            // swap the actively-considered element with the current first element in the array
            console.log(`       array[${i}] (${array[i]}) is greater than the pivot (${pivot}), so need to swap ${array[i]} with ${array[j]}.`)
            swap(array, i, j);
            // ^^ first value in array is now set as being less than the pivot!
            console.log(array);

            // ...advance j to *second* value in the array
            j++;
        }
    }
    // end by swapping the pivot with the last element of the array that was NOT smaller than it
    swap(array, start, j);
    console.log(`       Did final swap of pivot value with earliest element NOT smaller than pivot`);
    console.log(array);

    return j;
}

function quickSort(array, start = 0, end = array.length) {

    console.log('^^ Running quickSort function; array is currently');
    console.log(array);
    console.log(` --> focusing on start = ${start} and end = ${end}.`)


    if (start >= end) {
        return array;
    }

    // the middle to be output of separate partition function
    const middle = partition(array, start, end);
    console.log(`~  just partitioned --> the middle index is ${middle} and the array looks like:`);
    console.log(array);
    
    // quicksort the first "half" of the existing array
    array = quickSort(array, start, middle);
    console.log(`~  just quickSorted the left half and the array looks like:`);
    console.log(array);

    // quicksort the second "half" of the array;
    array = quickSort(array, middle+1, end);
    console.log(`~  just quickSorted the right half and the array looks like:`);
    console.log(array);

    return array;

}

const testArray = [11, 9, 3, 4];

//console.log(quickSort(testArray));

const testArray2 = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
console.log(quickSort(testArray2));
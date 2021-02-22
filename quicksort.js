function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

// "Lomuto's algorithm" (common in-place algo)
function partition(array, start, end) {

    console.log('       ~ Running partition function; array is currently:')
    console.log(array);

    // define the 'pivot' to be the final value in the [sub-portion of the] array [that is active?]
    const pivot = array[end-1];
    console.log(`       Pivot value is ${pivot}`);

    // define the start of partitioning range (?)
    let j = start;

    // iterate through all values in the active array, except the final value
    for (let i=start ; i < end-1 ; i++) {
        // if the actively-considered element in the array is less than or equal to the pivot value,
        if (array[i] <= pivot) {
            // swap the actively-considered element with the current first element in the array
            console.log(`       array[${i}] (${array[i]}) is less than the pivot (${pivot}), so need to swap ${array[i]} with ${array[j]}.`)
            swap(array, i, j);
            // ^^ first value in array is now set as being less than the pivot!
            console.log(array);

            // ...advance j to *second* value in the array
            j++;
        }
    }
    // end by swapping the pivot with the earliest element of the array that was NOT smaller than it
    swap(array, end-1, j);
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
//console.log(quickSort(testArray2));


const testArray3 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
console.log(quickSort(testArray3));
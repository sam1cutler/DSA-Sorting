const testArray1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

const mergeSort = function(array) {

    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);

    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    
    return merge(left, right, array);

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

    return array;

}

//console.log(mergeSort(testArray1));

const testArray3 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
//console.log(mergeSort(testArray3));


function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function shuffle(array) {

    // Want to potentially shuffle every item in the list 
    //    (with this approach, 
    //        a) if newIndex = oldIndex (could happen sometimes), 
    //           any given element might end up where it started), and
    //        b) any given element could be swapped *back* to where it started.
    for (let i=0 ; i<array.length ; i++) {
        console.log(array);
        //console.log(`~ ${array[i]} ~`);

        const newIndex = Math.floor(Math.random()*array.length);
        //console.log(newIndex);

        swap(array, i, newIndex);
    }

    return array;

}

//shuffle(testArray1);


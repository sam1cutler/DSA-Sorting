const array = [7, 9, 4, 11, 2, 6, 5, 13, 19]

function minMaxBucketSort(array, min, max) {   

    if (array.length === 1) {
        return array;
    } else if (array.length === 2) {
        if (array[0] < array[1]) {
            return array;
        } else {
            const tmp = array[0];
            array[0] = array[1];
            array[1] = tmp;
        }
    }

    let midMin = 1000000;
    let midMax = -1000000;
    let midArr = [];

    // consider each element in the array;
    for (let i=0 ; i<array.length ; i++) {

        console.log(`Considering ${array[i]}.`)

        // if value is neither the known min or known max,
        if (array[i] !== parseInt(min) && array[i] !== parseInt(max)) {

            // check if need to update midMin or midMax,
            if (array[i] < midMin) {
                midMin = array[i];
            } else if (array[i] > midMax) {
                midMax = array[i];
            }
            // and push value to mid array
            midArr.push(array[i]);
        }
    }

    const middle = minMaxBucketSort(midArr, midMin, midMax);

    // set min and and max values in original / output array
    array[0] = min;
    array[array.length-1] = max;

    // add in the sorted values from the middle
    for (let i=0 ; i<middle.length ; i++) {
        array[i+1] = middle[i];
    }

    return array;

}

console.log(minMaxBucketSort(array, 2, 19));
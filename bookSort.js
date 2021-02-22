
const books1 = ['Alpha', 'beta', 'c', 'dog', 'eel', 'fragilielajlkdjaf', 'alp', 'doggy', "Zebra", 'Infinite Jest', '2666', "Jesus' Son"];

function bookSort(booksArray) {

    // convert booksArray into 
    //    booksObject, w/ key = title converted to integer...

    
    for (let i=0 ; i<booksArray.length ; i++) {
        console.log(booksArray[i].charCodeAt(1));
    }
    

}

const mergeSortBooks = function(array) {

    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);

    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSortBooks(left);
    right = mergeSortBooks(right);
    
    return mergeBooks(left, right, array);

}

const mergeBooks = function(left, right, array) {

    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    // so long as there are un-allocated elements of BOTH lists, do comparisons
    while (leftIndex < left.length && rightIndex < right.length) {
        
        // initialize status for result of comparing alphabetical order of 2 currently-compared book titles
        let comparison = undefined;
        
        // initialize a character index
        let characterIndex = 0;

        // as long as the titles have a character at the current index...
        while (left[leftIndex].charCodeAt(characterIndex) && right[rightIndex].charCodeAt(characterIndex)) {
            // compare the characters, determining which is earlier alphabetically
            if (left[leftIndex].toLowerCase().charCodeAt(characterIndex) < right[rightIndex].toLowerCase().charCodeAt(characterIndex)) {
                comparison = 'leftEarlier';
                break;
            } else if (left[leftIndex].toLowerCase().charCodeAt(characterIndex) > right[rightIndex].toLowerCase().charCodeAt(characterIndex)) {
                comparison = 'rightEarlier';
                break;
            } else {
                // if characters are identical, need to consider the next character in the title
                characterIndex++;
            }
        }

        // if 2 titles are identical for all characters that both titles have, tie-breaker needs to be length
        if (comparison === undefined) {
            if (left[leftIndex].length < right[rightIndex].length) {
                comparison = 'leftEarlier';
            } else {
                comparison = 'rightEarlier';
            }
        }

        // depending on results of the above alphabetization-adjusted comparison, do "normal" merge array adjustments
        if (comparison === 'leftEarlier') {
            array[outputIndex++] = left[leftIndex++];
        } else if (comparison === 'rightEarlier'){
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

console.log(mergeSortBooks(books1));
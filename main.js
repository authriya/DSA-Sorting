function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

//1. understanding merge sort
//[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40] [16]
//[21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
//[21, 1, 26, 45] [29, 28, 2, 9] // [16, 49, 39, 27] [43, 34, 46, 40]
//[21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40]
//[21] [1] [26] [45] [29] [28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40]

// [21, 1]
// ?? what are the sorts after 16 recursive calls to merge sort
//first two lists merged [21] [1]
//[1, 21]




function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function swap(arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

//3 9 1 14 17 24 22 20.
// statements:
//pivot could have been 17 but not 14
//The pivot could have been either 14 or 17
//Neither 14 nor 17 could have been the pivot
//The pivot could have been 14, but could not have been 17

//could have been either because for both everything to the left is lesser than it and everything to right is greater

// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
//first partition, pivot 12
//[10, 3, 9, 12, 19, 14, 17, 16, 13, 15]
//2nd partition at j = 3, pivot = 15
//[14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
//[14, 13, 15, 17, 19, 10, 3, 16, 9, 15]

//14, 17, 13, 15, 19, 10, 3, 16, 9, 12
//first partition, pivot 14
//[14, 10, 3, 9, 12, 19, 17, 16, 15, 13]
//second partition pivot 19 
//[14, 10, 3, 9, 12, 19, 17, 16, 15, 13]


//Bucket sort

function bucketAlgorithim(array) {
    let lowest = something
    let highest = something
    let lowestIndex = array.indexOf(lowest)
    let highestIndex = array.indexOf(highest)
    swap(array, array [0], array[lowestIndex])
    swap(array, array[array.length-1], array[highestIndex])

    let left = 1
    let right = array.length-2

    while(left < right) {
        if(array[left] > array[right]) {
            swap(array, array[left], array[right])
            left++
        }
    }
}

function shuffle(arr) {
    for(let i = 0; i < arr.length; i++) {
        let randomIndex= Math.floor(Math.random() *arr.length)

        swap(i, randomIndex, arr)
    }
    return arr
}

function abcOrder(str1, str2, charIndex=0) {
    if(str1 === str2) {
        return true
    }
    if (str1.toLowerCase().charCodeAt([charIndex]) < str2.toLowerCase().charCodeAt([charIndex])) {
        return true;
    }
    else if (str1.toLowerCase().charCodeAt([charIndex]) > str2.toLowerCase().charCodeAt([charIndex])) {
        return false;
    }
    else {
        return abcOrder (str1, str2, charIndex+1);
    }
}

function mSortStrings(arr) {
    if(arr.length <= 1) {
        return arr
    }
    const middle = Math.floor(arr.length/2)
    let left = arr.slice(0, middle-1)
    let right = arr.slice(middle, arr.length-1)

    left = mSortStrings(left)
    right = mSortStrings(right)
    return mergeStringArr(left, right, arr)
}

function mergeStringArr(left, right, arr) {
    let leftI = 0;
    let rightI = 0;
    let outputI = 0;
    while(leftI < left.length && rightI < right.length) {
        if(abcOrder(left[leftI], right[rightI])) {
            arr[outputI++] = left[leftI++]
        } else {
            arr[outputI++] = right[rightI++]
        }
    }
    for(let i = leftI; i < left.length; i++) {
        arr[outputI++] = left[i]
    }
    for(let i = rightI; i< right.length; i++) {
        arr[outputI++] = right[i]
    }
    return arr
}
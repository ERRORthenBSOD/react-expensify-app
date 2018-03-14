
const itemsArray = [55, 63, 123, 43, 56, 32, 1, 12, 54, 4];

// НАЙТИ ИНДЕКС  С НАИМЕНЬШИМ ЗНАЧЕНИЕМ
function findSmallestIndexInArray(arr){
    let smallest = arr[0];
    let smallest_index = 0;
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] < smallest){
            smallest = arr[i];
            smallest_index = i;
            // console.log(smallest_index);
            // console.log(smallest);
        }
    }
    return smallest_index;

}

////////////////////////////////////////////////////

function selectedSort(unSortedArr){
    let sortedArr = [],
        unSortedlength = unSortedArr.length,
        smallestIndex;

    while(sortedArr.length < unSortedlength){
        console.log(unSortedArr);
        console.log(sortedArr);
        smallestIndex = findSmallestIndexInArray(unSortedArr);
        sortedArr.push(unSortedArr[smallestIndex]);
        unSortedArr.splice(smallestIndex, 1);
    }
    console.log(sortedArr);
    return sortedArr;

}
selectedSort(itemsArray);


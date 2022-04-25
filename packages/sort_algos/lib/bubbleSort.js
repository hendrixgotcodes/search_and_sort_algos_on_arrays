'use strict';

module.exports = bubbleSort;

function bubbleSort(arr) {

    for(let i=0; i < arr.length; i++){
        for(let j=0; j<=i; j++){
            if(arr[i] < arr[j]){
                swap(arr, i, j)
            }
        }
    }

    return arr
    
}

function swap(arr,indxA, indxB){

    const valueA = arr[indxA]
    arr[indxA] = arr[indxB]
    arr[indxB] = valueA

    return arr

}

console.log(bubbleSort([2,5,1,0,3,2,8]))
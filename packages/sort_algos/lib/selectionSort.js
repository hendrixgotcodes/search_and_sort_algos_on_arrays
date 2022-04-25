'use strict'

module.exports = selectionSort

function selectionSort(arr){

    let min

    for(let i=0; i<arr.length; i++){

        min = i

        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        swap(arr, i, min)
        
    }

    return arr
    
}

function swap(arr,indxA, indxB){

    const valueA = arr[indxA]
    arr[indxA] = arr[indxB]
    arr[indxB] = valueA

    return arr

}

console.log(selectionSort([2,0,8,1,3]))
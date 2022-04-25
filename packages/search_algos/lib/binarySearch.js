'use strict';

module.exports = binarySearch

function binarySearch(arr, searchValue){

    let start = 0, end = arr.length -1

    while(start <= end){
        
        const midIndx = Math.floor((start+end)/2)

        if(arr[midIndx] === searchValue){
            return midIndx
        }
        else if(arr[midIndx] < searchValue){
            start = midIndx + 1
        }else{
            end = midIndx -1
        }
        
    }

    return -1
    
}

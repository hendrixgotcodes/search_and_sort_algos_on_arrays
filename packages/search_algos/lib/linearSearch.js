'use strict';

module.exports = linearSearch;

function linearSearch(arr, value) {

    for(const elem of arr){
        if(elem === value) return true
    }

    return false
    
}

/*
1.1 Suppose you have a sorted list of 128 names, and you’re searching
through it using binary search. What’s the maximum number of
steps it would take?

log 128 (log base is 2)= 7
*/

/*
1.2 Suppose you double the size of the list. What’s the maximum
number of steps now?

128*2 = 256
log(256)= 8
*/


function binarySearch<T>(array:T[],item:T):number | null{
    let low:number = 0
    let high:number = array.length-1


    while (low <= high){
        let mid:number = Math.floor((low+high)/2)
        let guess:T = array[mid]
        if (guess ==item){
            return mid
        }
        if (guess < item){
            low = mid +1
        }else{
            high = mid -1
        }
    }
    return null
}

const myArray:number[]=[1,2,3,4,5,6,7]

const itemToBeFound:number = 4

console.log(binarySearch(myArray,itemToBeFound))
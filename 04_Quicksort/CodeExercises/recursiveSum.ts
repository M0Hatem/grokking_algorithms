function recursiveSum(arr:number[]):number{
    if (arr.length <= 1){
        return arr[0]
    }
    return arr.splice(0,1)[0]+recursiveSum(arr)
}

console.log(recursiveSum([1,2,3,4,5]))
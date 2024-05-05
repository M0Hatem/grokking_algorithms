function quickSort(arr:number[]):number[]{
    if (arr.length<2){
        return arr
    }
    const pivot = arr[0]
    const less:number[]= arr.slice(1).filter((item)=>item <=pivot)
    const greater:number[]=arr.slice(1).filter((item)=> item >pivot)


    return quickSort(less).concat(pivot,quickSort(greater))
}
console.log(quickSort([3,23,5,4,2,5]))
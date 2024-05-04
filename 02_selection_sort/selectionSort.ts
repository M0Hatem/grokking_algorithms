function findSmallestIndex<T>(array:T[]):number{
    let smallest_index= 0
    let smallest:T = array[smallest_index]
    for (let i:number=1;i<array.length;i++){
        if (array[i]<smallest){
            smallest = array[i]
            smallest_index = i
        }
    }
    return smallest_index
}
function selectionSort<T>(array: T[]): T[] {
    const sortedArray: T[] = [];
    const length = array.length;

    for (let i: number = 0; i < length; i++) {
        const smallestIndex: number = findSmallestIndex(array);
        sortedArray.push(array.splice(smallestIndex, 1)[0]);
    }

    return sortedArray;
}

console.log(selectionSort([2,3,5,6]))
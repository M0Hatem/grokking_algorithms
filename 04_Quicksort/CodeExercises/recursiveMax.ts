function recursiveMax(arr: number[]): number {
    if (arr.length === 0) {
        return 0
    }
    if (arr.length ===1){
        return arr[0]
    }
    const subMax= recursiveMax(arr.slice(1))

    return arr[0]>subMax?arr[0]:subMax
}

console.log(recursiveMax([1, 2, 3, 5,4]))

function loopSum(arr: number[]): number {
    let total: number =0

    arr.forEach((num: number) => {
        total += num
    })
    return total
}

console.log(loopSum([1,2,3,4,5]))
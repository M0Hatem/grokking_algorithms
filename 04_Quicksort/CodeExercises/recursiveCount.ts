function recursiveCount<T>(arr: T[]): number {

    if (arr.length === 1) {
        return 1
    }

    return 1 + recursiveCount(arr.slice(1))
}

console.log(recursiveCount([1, 2, 3, 4, 5]))


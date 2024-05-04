function countDown(number:number):void {
    if (number <=0){
        return
    }
    console.log(number)

    countDown(number-1)
}
countDown(3)
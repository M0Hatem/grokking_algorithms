function greet2(name: string) {
    console.log(`hello again ${name}`)
}

function bye() {
    console.log('byeee!')
}

function greet(name:string):void{
    console.log(`hello ${name}`)
    greet2(name)
    console.log("get ready to say goodbay")
    bye()
}

greet('hatem')
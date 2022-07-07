function divide(x,y){
    if(y===0){
        throw new Error('Division by zero does not work')
    }
    return x / y;
}

let a=7, b=0, c

try{
    c=divide(a,b)
}catch(error){
    console.log(c)
    console.log('Error happens here -', error.message)
}
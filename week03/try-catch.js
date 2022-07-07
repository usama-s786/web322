const name = 'Usama'
console.log('Initially, the name is- ',name)

try{
    name = 'Usama Sidat'
} catch(error){
    console.log('The error occurs here and it is- ', error.message)
}

console.log('The final value of name variable is- ', name)
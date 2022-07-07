// function A
// function B 
// function C


//promise chain
return new Promise((resolve, reject) => {
    // logics
})
.then(data => {
    console.log(data)
})
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log('Error happened with error', error.message, ' error status code ', err.status)
})
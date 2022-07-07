var message = require('./hello2.js')

console.log('Hello world! -- Basic console log')

console.log('Message from another file is', message)

const course = 'Web322'
console.log('This is course', course)

console.time('The time taken is')
for (let i=0; i<10; i++) console.log('The count is ', i+1)
console.timeEnd('The time taken is')

console.log(__dirname)
console.log(__filename)

setTimeout(()=> {
    console.log('Inside the setTimeout - print it after 5 seconds')
}, 5000)

let count = 1
const max= 10

let mycountInterval = setInterval(()=>{
    console.log('Hello from insode of the interval function after', count++, ' counts')
    checkMax()
}, 3000)

const checkMax  = ()=> {
if(count > max) clearInterval(mycountInterval)
}
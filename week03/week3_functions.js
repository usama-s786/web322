// function Program (sName, sID){
//     this.name= sName
//     this.id= sID
// }

// Program.prototype.setName = function(newName){
//     this.name= newName
// }

// Program.prototype.setID = function(newID){
//     this.id = newID
// }

// Program.prototype.getName = function(){
//     console.log('The Program name is', this.name)
// }

// Program.prototype.getID = function(){
//     console.log('The Program ID is', this.id)
// }

// var program1 = new Program('Computer Programming and Analysis', 'CPA')

// program1.getName()
// program1.getID()


function messageDelay(message, ms){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        console.log(message)
        resolve()
        } ,ms)
    })
}

messageDelay("WEB", 2000).then(function(){
    console.log("322")
})

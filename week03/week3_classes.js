// class Phone {
//     brand
//     name
//     maxram
//     maxrom

//     constructor(cbrand = '', cname= '', cmaxrom= 1024, cmaxram= 16){
//         this.brand = cbrand
//         this.name = cname
//         this.maxram = cmaxram
//         this.maxrom = cmaxrom
//     }

//     setBrand(newBrand) { this.brand = newBrand}
//     setName(newName) { this.name = newName}
//     setMaxRam(newRam) { this.maxram = newRam}
//     setMaxRom(newRom) {this.maxrom = newRom}

//     getBrand(){console.log('The brand name is', this.brand)}
//     getName(){console.log('The phone name is', this.name)}
//     getRam(){console.log('The phone RAM is', this.maxram)}
//     getRom(){console.log('The phone ROM is', this.maxrom)}
// }

// var phone1 = new Phone('Apple', 'Iphone 13 pro max', 1024, 8)

// console.log('***First phone***')
// console.log(phone1.brand)
// console.log(phone1.name)
// phone1.getRam()
// phone1.getRom()

// phone1.setName('Iphone 11')
// phone1.setMaxRam(4)
// phone1.setMaxRom(512)

// console.log('***First phone with edits***')
// console.log(phone1.brand)
// console.log(phone1.name)
// phone1.getRam()
// phone1.getRom()


class Sprite{
    xPos  
    yPos

    constructor(xposition, yposition){
        this.xPos=xposition
        this.yPos=yposition
    }

    updatePosition(deltaX, deltaY, speed){ 
        this.xPos = this.xPos+=deltaX*speed
        this.yPos = this.yPos+=deltaY*speed
    }

    getCoordinate(){
        var object= {
            xproperty:this.xPos,
            yproperty:this.yPos
        }
        return (console.log(object))
    }
}

let mySprite = new Sprite(3,4)
console.log (mySprite);

mySprite.updatePosition(4,5,6)
console.log (mySprite);

mySprite.getCoordinate()

//

const express = require('express')

const app = express()

app.get('/test', (req,res)=>{
    res.status(200).end()
})

app.put('/test', (req,res)=>{
    res.status(200).end()
})

app.post('/test', (req,res)=>{
    res.status(200).end()
})

app.delete('/test', (req, res)=>{
    res.status(200).end()
})

app.get('/employee/:num', (req,res)=>{
    return {employeeNum: num}
})


var course = {
    id: 'WEB---',
    name: 'Null',
    length: '4 months',
    credit: 3.0,

    setCourseID: function(newID){
        this.id = newID
    },
    setName: function(newName){
        this.name = newName
    },
    setCredit: function(newCredit){
        this.credit = newCredit
    },
    getID(){
        console.log('The course ID is', this.id)
    },
    getName(){
        console.log('The course name is', this.name)
    },
    getLength(){
        console.log('The length of the course is', this.length)
    },
    getCredit(){
        console.log('The Credit for this course is', this.credit)
    },
}

var web222= Object.create(course)
web222.setCourseID('WEB222')
web222.setName('Intro to Web programming')

var web322 = Object.create(course)
web322.setCourseID('WEB322')
web322.setName('Web programming tools and Frameworks')

var web422 = Object.create(course)
web422.setCourseID('WEB422')
web422.setName('Advanced web programming')


console.log('First course:')
web222.getID()
web222.getName()
web222.getCredit()
web222.getLength()

console.log('Second course:')
web322.getID()
web322.getName()
web322.getCredit()
web322.getLength()

console.log('Third course:')
web422.getID()
web422.getName()
web422.getCredit()
web422.getLength()

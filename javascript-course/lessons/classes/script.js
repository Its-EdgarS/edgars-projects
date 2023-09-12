// Classes
//  Methods
// properties
// this

class Car {
    constructor(name, color, speed, topSpeed) {
        // properties
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0
    }

    drive () {
        console.log("Just drove 2 miles")
        this.currentSpeed += 10
        console.log(`driving speed at ${this.currentSpeed} mph`)
    }
    
    brake() {
        console.log("Braking!")
        this.currentSpeed = 0
        console.log(`driving speed at ${this.currentSpeed} mph`)

    }

    zeroToSixty() {
        setTimeout(() => {
            console.log("PHEW! That was fast!")
            this.currentSpeed = 60
            console.log(this.currentSpeed)
        }, 3000)
    }

    stop() {
        console.log("Coming to a screeching halt!")
        ferrari.currentSpeed = 0
    }
}

const ferrari = new Car("Ferrari", "Red", 250)

// console.log(ferrari)
// console.log(ferrari.name)
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.brake()
// console.log(ferrari.currentSpeed)
                                      
// ferrari.drive()
// ferrari.brake() 
// ferrari.drive()
// ferrari.drive()
// ferrari.zeroToSixty()

// ferrari.stop()

// for (i = 0; i < 5; i++) {
//     ferrari.drive()
// }
// ferrari.zeroToSixty()


Array.prototype.myPush = function(x) {
    this[this.length] = x
}

const fruits = ['banana', 'strawberry', 'blackberry']
console.log(fruits)
fruits.myPush('raspberry')
console.log(fruits)
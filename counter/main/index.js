//document.getElementById("count").innerHTML = 5

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count);

// let myAge, humanDogRatio;
// myAge = 25;
// humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5
// count = count + 1

// console.log(count)

// let bonusPoints = 50;

// bonusPoints++
// console.log(bonusPoints)
// bonusPoints--
// console.log(bonusPoints)

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints);

//initilise the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count in HTML to reflect the count


// function increment() {
//     console.log("The button is clicked")
// }

// function countdown() {

//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(2)
//     console.log(1)
// }

// countdown()


// countdown() 

// function name() {
//     console.log(42)
// }

// name()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum() {
//     let total = lap1 + lap2 + lap3;
//     console.log(total)
// }


// lapSum()

// let lapCompleted = 0

// function incrementLap() {
//     for (i = 0; i < 4; i++) {
//         lapCompleted += 1
//     }
//     console.log(lapCompleted);
// }

// incrementLap ()
// // console.log(lapsCompleted);

// function incrementLap() {
//     lapCompleted += 1

// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapCompleted)

//camelCase
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count")

// console.log(countEl)

let count = 0;

console.log(saveEl)

function increment() {
    count++
    countEl.textContent = count
}

function save() {

    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    console.log(count)
}





// let username = "per"
// console.log(username)

// let variabS = "You have tree new notification"

// let messageToUser = (variabS + ", " + username + "!")

// console.log(messageToUser)

// let name = "Dustu";
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + name;
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints

// console.log(totalPoints)

// console.log(4 + 5)
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")

// let name = 42
// let greeeting = "Hi, my name is "
// let myGreeting = greeeting + name
// console.log(myGreeting)

// let name = "Peter"
// let greeeting = "Hi, my name is "

// let myGreeting = greeeting + name
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Peter "
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "👋"
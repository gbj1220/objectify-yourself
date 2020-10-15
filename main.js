const myCodeImmersivesObj = {
  objectify: 'me'
};

// Set the value of property `objectify` to be "yourself".
myCodeImmersivesObj.objectify = "yourself"
console.log(myCodeImmersivesObj)
// Add the new property `isAnExcellentObject` and set it to `true`.
myCodeImmersivesObj.isAnExcellentObject = true
console.log(myCodeImmersivesObj)
// Add the property `term` and set it to 1.
myCodeImmersivesObj.term = 1
console.log(myCodeImmersivesObj)

// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.
myCodeImmersivesObj.term++
console.log(myCodeImmersivesObj)
// Now add a new property called `currentScore` and set it to 3.
myCodeImmersivesObj.currentScore = 3
console.log(myCodeImmersivesObj)

// Now add a new property called `cumulativeScore` and set it to 50.
myCodeImmersivesObj.cumulativeScore = 50
console.log(myCodeImmersivesObj)

// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.
myCodeImmersivesObj.cumulativeScore =
  myCodeImmersivesObj.cumulativeScore + myCodeImmersivesObj.currentScore
console.log(myCodeImmersivesObj.cumulativeScore)

// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.
myCodeImmersivesObj['I am exactly this cool'] = 'soooooo cool'
console.log(myCodeImmersivesObj)
// Now make a new EMPTY object that represents yourself. = {
let coolDude = {};

// Add a `firstName` property and set it to a string.
coolDude.firstName = 'Gregorious'
// Add a `lastName` property and set it to a string.
coolDude.lastName = 'Johnson'

// Add a `fullName` property and set it to the name properties put together with a space string in the middle.
coolDude.fullName = coolDude.firstName + ' ' + coolDude.lastName
console.log(coolDude.fullName)

// Add an `age` property and set it to a number.
coolDude.age = 27
console.log(coolDude.age)

// Add an address property and set it to an empty array.
coolDude.address = {}

// Now push three strings into that array.
coolDude.favoriteIceCream = 'Rocky Road'
coolDude.numOfCats = 1;
coolDude.favoriteColor = 'Blue'
// Now make a new object, but this time we'll pre-populate it, not set it in any lines below it. In other words, the properties should be set the same way I initially set the `codeImmersivesObject` on line 1. It can be called whatever you want and can have whatever properties you want, as long as they include at least one string value, boolean value, number value, and array of numbers. The important thing here is: this should all be done within the brackets of the object, not below the place where the object is declared.
const buddyGuy = {
  name: 'Greg',
  favoriteNums: [1, 2, 3, 4, 5],
  age: 27,
  iAmAwesome: true,
}
// As a stretch goal, pre-populate the object with at least one property using bracket notation as well. 
const buddyGuy = {
  name: 'Greg',
  favoriteNums: [1, 2, 3, 4, 5],
  age: 27,
  iAmAwesome: true,
  buddyGuy['favorite number']: 65 // Not sure why I have a red line under the first
}
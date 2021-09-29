//01 - Array

var fruits = ["mango", "lemon", "blueberry"]
console.log(fruits)
console.table(fruits)

//02 - Access

var ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1])
console.log(ingredients.indexOf("butter"))

//03 - Add and Remove

var objects = ["pen", "book", "lamp"]
objects.unshift("chair") //Ajouter au début
console.log(objects)
objects.pop() //Enlever le dernier
console.log(objects)
objects.push("laptop") //Ajouter à la fin
console.log(objects)
objects.shift() //Enlever le début
console.log(objects)

//04 - Order

var numbers = [4 , 10 , 8 , 12 , 6]
numbers.reverse() //Inverser
console.log(numbers)
numbers.sort((a, b) => a - b) //Trier dans l'ordre croissant
console.log(numbers)
numbers.sort((a, b) => b - a) //Trier dans l'ordre décroissant
console.log(numbers)

//05 - Boucle

var total = 0
var limit = 10
var result = 0

for (let total = 0; total <= limit; total++) {
    result += total   
}
console.log(result)

//06 - Reverse

var sentence = "Hello Konexio !"
var table = sentence.split("") //Pas obligatoire car une chaine de character est un tableau
var index = table.length - 1
var resultat = ""
while (index >= 0) {
    resultat = resultat + table[index]
    index--
}
console.log(resultat)

//Bonus

for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " fizzbuzz")
    } else if (i % 3 === 0) {
        console.log(i + " fizz")
    } else if (i % 5 === 0) {
        console.log(i + " buzz")
    } else if (i % 7 === 0) {
        console.log("")
    } else {
        console.log(i)
    }
}

//Bonus II

var total = 0
var limit = 10
var answer = 0

while (total <= limit) {
    answer = answer + total
    total++
}
console.log(answer)

//Bonus III

var min = 1
var max = 9
var camarades = ["Marco", "Kevin", "Alin", "Helene", 
            "Eloi", "Evan", "Salwa", "Hanaa", "Jérémy"]
console.log(camarades[Math.floor(Math.random() * (max - min + 1) + min)])

//Bonus IV

var min = 0
var max = 100
var arrayEntiers = []
var intMax = 0

for (i = 0; i < 20; i++) {
    arrayEntiers[i] = Math.floor(Math.random() * (max - min + 1) + min)
    if (arrayEntiers[i] > intMax) {
        intMax = arrayEntiers[i]
    }
}
// arrayEntiers.push(number)
console.log(arrayEntiers)
console.log(intMax)
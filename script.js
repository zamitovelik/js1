const myName = prompt ("Введите свое имя")
const login = "Эльмурад"
console.log ("Меня зовут " + login)

const myAge = prompt ("Введите свой возраст")
const age = 19
console.log ("Мне " + age + " лет")

const calculation = prompt ("Решите пример 6 + 3 ")
const result = 6 + 3
var notResult = calculation
console.log ("Пример 1: 6 + 3 = " + result + " Ваш ответ " + notResult)

const calculation1 = prompt ("Решите пример 20 - 5 ")
const result1 = 20 - 5
var notResult = calculation1
console.log ("Пример 2: 20 - 5 = " + result1 + " Ваш ответ " + notResult)

const calculation2 = prompt ("Решите пример 10 * 3 ")
const result2 = 10 * 3
var notResult = calculation2
console.log ("Пример 3: 10 * 3 = " + result2 + " Ваш ответ " + notResult)

const calculation3 = prompt ("Решите пример 14 / 2 ")
const result3 = 14 / 2
var notResult = calculation3
console.log ("Пример 4: 14 / 2 = " + result3 + " Ваш ответ " + notResult)

const calculation4 = prompt ("Решите пример 15 % 2 ")
const result4 = 14 % 2
var notResult = calculation4
console.log ("Пример 5: 14 % 2 = " + result4 + " Ваш ответ " + notResult)

let alertMessage = alert ("Откройте консоль, для просмотра")

let a = +prompt("Введите первое число:")
let b = +prompt("Введите второе число:")
let с = +prompt("Введите третье число:")

let average = (a + b + с) / 3

console.log("Среднее арифметическое: " + average)
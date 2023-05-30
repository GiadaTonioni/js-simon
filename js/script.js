const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(numbers)

for (let i = 0; i < 5; i++){

    let min = 0
    let max = numbers.length

    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(numbers[randomNum])
    document.getElementById('numeri').innerHTML = `${numbers[randomNum]}`
}

setTimeout(function(){
	
}, seconds * 3000)

let inserisci = parseInt.prompt('inserire il numero che ricordi')









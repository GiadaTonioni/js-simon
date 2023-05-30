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
	document.getElementById('numeri').innerHTML = `${''}`
}, 3000)

setTimeout(function(){
    let inserisci = parseInt(prompt('scrivi un numero che ricordi'))
    let inserisci = parseInt(prompt('scrivi un numero che ricordi'))
    let inserisci = parseInt(prompt('scrivi il terzo numero che ricordi'))
    let inserisci = parseInt(prompt('scrivi il qua numero che ricordi'))
    let inserisci = parseInt(prompt('scrivi il primo numero che ricordi'))
}, 4000)




if (inserisci === numbers.includes) {
    
}









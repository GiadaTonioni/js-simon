const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(numbers)

for (let i = 0; i < 5; i++){

    let min = 0
    let max = numbers.length

    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(numbers[randomNum])
    let lista_numeri = document.getElementById('numeri')
    let numeriSeq = document.createElement('li')
    lista_numeri.innerHTML += `<li>${numbers[randomNum]}</li>`
    lista_numeri.append(numeriSeq)

}

setTimeout(function(){
	document.getElementById('numeri').innerHTML = `${''}`
}, 4000)


setTimeout(function(){
    let inserisci = parseInt(prompt('scrivi un numero che ricordi'))
    let inserisci2 = parseInt(prompt('scrivi un numero che ricordi'))
    let inserisci3 = parseInt(prompt('scrivi un numero che ricordi'))
    let inserisci4 = parseInt(prompt('scrivi un numero che ricordi'))
    let inserisci5 = parseInt(prompt('scrivi un numero che ricordi'))
    document.getElementById("result").innerHTML = numbers.includes(inserisci);
    document.getElementById("result").innerHTML = numbers.includes(inserisci2);
    document.getElementById("result").innerHTML = numbers.includes(inserisci3);
    document.getElementById("result").innerHTML = numbers.includes(inserisci4);
    document.getElementById("result").innerHTML = numbers.includes(inserisci5);
}, 5000)

if (numbers.include = true){
    
}
else {
    console.log('questo numero è sbagliato')
}













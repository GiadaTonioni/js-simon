function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//numero utente
function getUserNumbers(){
    let userNumbers = []

    while(userNumbers.lenght < 5){
        let number = parseInt(prompt('Inserisci un numero che ricordi'))

        if(!userNumbers.includes(number)){
            userNumbers.push(number)
        }
    }

    return userNumbers
}

//numeri pc
let randomNumbers = []
for (let i = 0; i < 5; i++){

    let number = generateRandomNumber(1,50);

    if(generateRandomNumber(randomNumbers, number)){
        randomNumbers.push(number)
    }

}

console.log(randomNumbers)

document.getElementById('numeri').innerHTML = randomNumbers;

//numeri spariscono
setTimeout(function(){
	document.getElementById('numeri').innerHTML = `${''}`
}, 4000)


setTimeout(function(){
    let userNumbers = getUserNumbers()
    console.log(userNumbers)

    let guessedNumbers = []
    let score = 0
    for (let i=0; i<userNumbers.lenght; i++){
        if(userNumbers.includes(userNumbers)){
            guessedNumbers.push(userNumbers[i])
            score++
        }
    }

    document.getElementById('result').innerHTML = `Hai indovinato ${score} numeri, i numeri corretti sono ${guessedNumbers}`;

}, 5000)

















const altura = Number(prompt("Digite sua altura: "))
const peso = Number(prompt("Digite o seu peso: "))
    
const IMC = peso / (altura * altura)
    
alert("Seu IMC é de: " + IMC)
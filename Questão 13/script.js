let soma = 0

for (let i = 0; i < 5; i++) {
  soma += Number(prompt("Digite uma nota: "))
}

alert("Média das notas: " + (soma/5))
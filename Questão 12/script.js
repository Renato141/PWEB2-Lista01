const num = Number(prompt("Digite um número: "))
let contador = num - 1
let numPrimo = true;

while (contador > 1) {
	console.log(num, contador)

      numPrimo = !((num%contador) == 0)

      if (!numPrimo) {
        alert("O número não é primo")
        break
      }

      contador--
    }

    if (numPrimo) alert("O número é primo")

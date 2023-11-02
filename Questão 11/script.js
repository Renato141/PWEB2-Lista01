const maiorNumero = (a, b, c) => {
    return Math.max(a, b, c)
  }

  alert(
    maiorNumero(
    Number(prompt("Insira um número: ")),
    Number(prompt("Insira um número: ")),
    Number(prompt("Insira um número: "))
  )
  )
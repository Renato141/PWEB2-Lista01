const numUsuario = Number(prompt("Digite um número: "))
let fatorial = 1
    
for(let i = 1; i <= numUsuario; i++) {
        fatorial *= i
    }
    
document.write(fatorial)
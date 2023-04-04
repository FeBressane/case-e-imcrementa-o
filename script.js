// testes de case 
let opcao =parseInt(prompt("Digite uma opção"))
switch(opcao){
    case 1:
        document.write("Primeira opção")
        break;
    case 2:
        document.write("Segunda opção")
        break;
    case 3:
        document.write("Terceira opção")
        break;
    default:
        document.write("nenhuma das opções")
        break;
}

// incremento e decremento
let valor = 7 
document.write(valor)
document.write("<br></br>")
valor = valor +=4;
valor ++
document.write(valor)
document.write("<br></br>")

let valor2 = 10
document.write(valor2)
valor2 = valor2 -=2

// usnado for
for(let i=0; i<10; i++){
    document.write("O valor é ", i)
    document.write("<br></br>")
}

// usando array
let carros=["Golf", "Fusca", "Audi", "Corsa"]
for(let i=0; i< carros.length; i++){
    document.write(carros[i]);
    document.write("<br></br>")
}
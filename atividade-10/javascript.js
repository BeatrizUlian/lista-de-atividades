// QUESTÃO 1
function executarFunc1(){


let comida = document.getElementById("codigo").value;
let quantidade = document.getElementById("quantidade").value;

    if (comida == 1) {
         preco = 4;
    } else if(comida == 2) {
         preco = 4.50;
    } else if (comida == 3) {
        preco = 5;
    } else if (comida == 4){
        preco = 2;
    } else if (comida ==5) {
        preco = 1.50;
    } else if (comida > 5){
        alert ("Código inexistente.");
    }
    
    resultado = preco * quantidade;
    
     document.getElementById('resultado1').innerHTML = `Total: R$ ${resultado.toFixed(2)}  `;
}

// QUESTAO 2

function executarFunc2(){
    let texto = document.getElementById("texto").value;
    let tamanho_texto = texto.length;
    let resultado = '';
    if (tamanho_texto <= 80){
       resultado = "Sim";
        } else if (tamanho_texto >80){
       resultado = "Não";
    }

    document.getElementById('resultado2').innerHTML = `${resultado}, a frase possui ${tamanho_texto} caracteres.`;

    
}
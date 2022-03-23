// QUESTÃO 1
function media(nota1,nota2,nota3){
    return ((nota1 * 2)  + (nota2 * 3) + (nota3 * 5)) / 3;
}
function executarMedia(func){
    let nota1 = Number (document.getElementById('nota1').value);
    let nota2 = Number (document.getElementById('nota2').value);
    let nota3 = Number (document.getElementById('nota3').value);
  
    document.querySelector('#resultado').innerHTML = func(nota1,nota2,nota3);

    if(nota1 == 0 || nota2==0 || nota3==0){
    alert('É necessário informar todas as notas do aluno.');
  } else{
    document.getElementById('resultado').value = resultado;
}
}

//QUESTAO 2

function executarSenha(func){
    
let senha = document.getElementById('senha').value;

let resultado = "Senha Invalida"; // porque usa esse let resultado?


if(senha == '2002') {
    resultado = `Acesso permitido`;
}
document.getElementById('resultado2').innerHTML = ` ${resultado}`;
}

//quando usa getelementbyid ou queryselector?

//QUESTAO 3

function executarFunc3(){
    let valorDigitado = document.getElementById('valorDigitado').value;
    let resultado = "[00]"; 

    if (valorDigitado >= 0 && valorDigitado <= 25){
        resultado = "[0,25]"; 
    } else
    if (valorDigitado >= 25 && valorDigitado <= 50){
        resultado = "[25,50]"; 
    } else
    if (valorDigitado >= 50 && valorDigitado <= 75){
        resultado = "[50,75]"; 
    } else 
    if (valorDigitado >= 75 && valorDigitado <= 100){
        resultado = "[75,100]"; 
    } else {
        resultado = "fora do intervalo"; 
    }
    document.getElementById('resultado3').innerHTML = `Resultado: O valor digitado esta no intervalo ${resultado}`;


}

//QUESTAO 4

function executarFunc4(){
    let salarioAtual = document.getElementById('salarioAtual').value;
    let novoSalario = 0; 
    let ganho = 0;
    let percentual = 0;

    if(salarioAtual >= 0 && salarioAtual <=400){
        percentual = 15;
        ganho = salarioAtual * 0.15;
        novoSalario = +salarioAtual + ganho;
    } else
    if(salarioAtual > 400 && salarioAtual <=800){
        percentual = 12;
        ganho = salarioAtual * 0.12;
        novoSalario = +salarioAtual + ganho;
    }else 
    if(salarioAtual > 800 && salarioAtual <=1200){
        percentual = 7;
        ganho = salarioAtual * 0.10;
        novoSalario = +salarioAtual + ganho;
    }else 
    if(salarioAtual > 1200 && salarioAtual <=2000){
        percentual = 7;
        ganho = salarioAtual * 0.07;
        novoSalario = +salarioAtual + ganho;
    }else 
    if(salarioAtual > 2000){
        percentual = 4;
        ganho = salarioAtual * 0.04;
        novoSalario = +salarioAtual + ganho;
    }


    document.getElementById('resultado4').innerHTML = `Resultado: Novo salario: ${novoSalario}, Ganho: ${ganho}, Percentual: ${percentual}% `;


}

//entendo a logica mas nao sei como escrever, fiz uma funcao fora da funcao principal para fazezr a conta do ganho

//QUESTAO 5
function executarFunc5(){
    let renda = document.getElementById('renda').value;
    let imposto =  0; 
    let resultado = "";
    
  

    if( renda <=2000){
        resultado = "isento";
    } 
    if(renda > 2000 && renda <=3000){
        imposto = renda - 2000;
        imposto = imposto * 0.08;
        resultado = `R$ ${imposto}`;
    } 
    if(renda > 3000 && renda <=4500){
        imposto = renda - 3000;
        imposto = (imposto * 0.18) + 80;
        resultado = `R$ ${imposto}`;
    } 
    if(renda > 4500){
        imposto = renda - 4500;
        imposto = (imposto * 0.28) + 350;
        resultado = `R$ ${imposto}`;
    } 

    document.getElementById('resultado5').innerHTML =  `Resultado: ${resultado} `;


}

//QUESTAO 6
function executarFunc6(){
    let nome = document.getElementById('nome').value;
    let valorHora = document.getElementById('valorHora').value;
    let horasTrabalhadas = document.getElementById('horasTrabalhadas').value;
    let pagamento = valorHora * horasTrabalhadas;
    


    document.getElementById('resultado6').innerHTML =  `Resultado: O funcionario ${nome} vai receber R$ ${pagamento} `;


}

//QUESTAO 7
function executarFunc7(){
    let distancia = document.getElementById('distancia').value;
    let combustivel = document.getElementById('combustivel').value;
    let consumo = distancia / combustivel;
    


    document.getElementById('resultado7').innerHTML =  `Resultado: O automóvel fez o consumo médio de ${consumo}. `;


}
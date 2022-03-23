// QUESTÃO 1
function executarFunc1(){
    var num = parseInt(document.getElementById("numeroTabuada").value);
    var resultado1 = document.getElementById('resultado1');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resultado1.innerHTML = tabuada;
  }

//QUESTAO 2

function executarFunc2(func){
    
let n1 = document.getElementById('n1').value;
let n2 = document.getElementById('n2').value;
var resultado2 = '';
for (var resultado2 = Math.min(n1, n2); n1 >= 0 && n2 >= 0 && resultado2 <= Math.max(n1, n2); resultado2++)
document.getElementById('resultado2').innerHTML = `Os números entre ${n1} e ${n2} são ${resultado2}.`;



}



//QUESTAO 3
let lista = [``];
function executarFunc3Soma(){
    let item = document.getElementById('item').value;
    if (item == "") {
        alert ("Necessário preencher com algum caractere.");
    } else {
        alert ("Item adicionado!");
    lista.push(item);
    document.getElementById('item').value= ``;
    lacoFor();
    }
}

function executarFunc3Limpa(){
    lista.splice(0, lista.length);
    document.getElementById('resultado3').innerHTML= `Lista apagada`;
} 

function executarFunc3Aparece(){
    document.getElementById('resultado3').innerHTML = `Resultado: A lista de itens é [${lista}]`;
}

    


//QUESTAO 4
let numbers = [""];

function executarFunc4(){
  
    for (var i = 0; i < 6; i++){
  let sorteio = (Math.random() * 60) + 1;
  numbers.push(sorteio);
  document.getElementById('resultado4').innerHTML =  Math.trunc(sorteio);
 
}
}
// nao consegui sortear 6 numeros





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
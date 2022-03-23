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
let listaMulher = [``];
let listaHomem = [``];

function executarFunc5Soma(){
    let nome = document.getElementById('nome').value;
    let sexoM = document.getElementById('sexo').value = "M";
    let sexoF = document.getElementById('sexo').value = "F";

    if (nome == "") {
        alert ("Necessário preencher com algum caractere.");
    } else {
        alert ("Nome adicionado!");
    }
    if ( sexoF = true){
        listaMulher.push(nome);
    }
    if (sexoM = true){
        listaHomem.push(nome);
    }
   
    document.getElementById('nome').value= ``;
 
    }

function executarFunc5Limpa(){
    if ( sexoF = true ) {
        listaMulher.splice(0, listaMulher.length);
        
        document.getElementById('resultado5').innerHTML= `Lista de mulheres apagada`;
    }
    if (sexoM = true) {
        listaHomem.splice(0, listaHomem.length);
        document.getElementById('resultado5').innerHTML= `Lista de homens apagada`;
    } 
}

function executarFunc5Aparece(){
    if (sexoF = true) {
        document.getElementById('resultado5').innerHTML = `Resultado: A lista de mulheres é [${listaMulher}]`;
    } 
    
    if (sexoM = true){
        document.getElementById('resultado5').innerHTML = `Resultado: A lista de homens é [${listaHomem}]`;
    }
   
}

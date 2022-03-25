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

function executarFunc2(){
    let n1 = +document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    var resultado2 = '';
    for (let i =( n1 + 1); i < Number(n2); i++){
        resultado2 += `,${i}`;
    }
document.getElementById('resultado2').innerHTML = `Os números entre ${n1} e ${n2} são ${resultado2}.`;

}



//QUESTAO 3
let lista = [];
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


function executarFunc4(){
   let n = 0;
    let i = 1;
    let numbers = [];
  while(i <=6) {
    n = Math.trunc((Math.random() * 59) + 1);
    numbers.push(n);
    i++;

}

document.getElementById('resultado4').innerHTML =  `Resultado ${numbers}`;
}





//QUESTAO 5

let listaMulher = [];
let listaHomem = [];

function executarFunc5Soma(){
    let nome = document.getElementById('nome').value;
    let sexo = document.getElementById('sexo').value;
    
    if (nome == "") {
        alert ("Necessário preencher com algum caractere.");
    } else {
     
    }

    if ( sexo == "F" && nome != ""){
        listaMulher.push(nome);
        alert ("Nome de mulher adicionado!");
    } else if (sexo == "M" && nome != ""){
        listaHomem.push(nome);
        alert ("Nome de homem adicionado!");
    } else {

    }
   
    document.getElementById('nome').value= ``;
   

    }


function executarFunc5Aparece(){
    let sexo = document.getElementById('sexo').value;
    
        if (sexo == 'F' ) {
            document.getElementById('resultado5').innerHTML = `Resultado: A lista de mulheres é [${listaMulher}]`;
        } else if (sexo == "M"){
            document.getElementById('resultado5').innerHTML = `Resultado: A lista de homens é [${listaHomem}]`;
        } else {
    
        }
       
    }

function executarFunc5Limpa(){
    let sexo = document.getElementById('sexo').value;
    
    if (sexo == "M") {
        listaHomem.splice(0, listaHomem.length);
        document.getElementById('resultado5').innerHTML= `Lista de homens apagada`; 
    } else if (  sexo == "F" ){
        listaMulher.splice(0, listaMulher.length);
        document.getElementById('resultado5').innerHTML= `Lista de mulheres apagada`;
    } else {

    }
}


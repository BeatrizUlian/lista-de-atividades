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
let alunos = ["Ana", "Beatriz", "Clara", "Davi", "Fernanda", "Luiz", "Laura", "Yara", "William", "Jonas", "Paula", "Henrique", "Leticia"];

function carregaPagina (n){
    let txtTabela = "";
    let i = n * 5;
    let f = i + 4;
    while(i <= f){
        let aluno = (i >= alunos.length)? "&nbsp;":alunos[i];
       
        txtTabela += `<tr><td>${aluno}</td></tr>`;
        i++;
    }   
    document.getElementById("tbCorpo").innerHTML = txtTabela; 

}

carregaPagina(0);


let qtPagina = Math.ceil(alunos.length/5);
let listaPagina = "";
 i = 1;
 while (i <= qtPagina) {
     listaPagina += `<li><a href="#" onclick="carregaPagina(${i - 1})">${i}</a></li>`;
     i++;
 }
 listaPagina = 
 `<li><a href="#" onclick="carregaPagina(0)"> <<</a></li>
 <li><a href="#" onclick="carregaPagina()"> <</a></li>
 ${listaPagina}
 <li><a href="#" onclick="carregaPagina()"> ></a></li>
 <li><a href="#" onclick="carregaPagina(${qtPagina-1})"> >></a></li>
 `;
document.getElementsByClassName("pagination")[0].innerHTML = listaPagina;
let alunos = [
{nome:"Ana", dt_nascimento:"2011-06-20"}, {nome:"Beatriz", dt_nascimento:"2000-04-30"}, {nome:"Clara", dt_nascimento:"1980-02-02"},
 {nome:"Davi", dt_nascimento:"1990-11-29"}, {nome:"Fernanda", dt_nascimento:"2008-08-10"},
{nome:"Luiz", dt_nascimento:"1987-12-12"}, {nome:"Laura", dt_nascimento:"2001-03-14"}, {nome:"Yara", dt_nascimento:"1998-01-03"},
 {nome:"William", dt_nascimento:"1986-06-25"}, {nome:"Jonas", dt_nascimento:"1996-02-15"}, {nome:"Paula", dt_nascimento:"2005-06-03"},
{nome:"Henrique", dt_nascimento:"2006-08-06"}, {nome:"Leticia", dt_nascimento:"1999-09-14"}
];
if(localStorage.getItem('alunos') == null){
    localStorage.setItem('alunos', JSON.stringify(alunos));
} else{
    alunos = JSON.parse(localStorage.getItem('alunos'));
}


let qtPagina = Math.ceil(alunos.length/5);
let pg = 0;
function carregaPagina (n){
    if (n<0 || n>qtPagina -1) return null;
  
    pg = n;
    let txtTabela = "";
    let i = n * 5;
    let f = i + 4;
    while(i <= f){
        let aluno = (i >= alunos.length)? "&nbsp;":alunos[i];
        let nome = (aluno.nome == undefined )? "&nbsp;" : aluno.nome;
        let edit = (aluno.nome == undefined)? "&nbsp;" : `<span class="glyphicon glyphicon-eye-open"></span>`;
        txtTabela += `<tr><td>${nome}</td><td class="editar" onclick="editar(${i})">${edit}</td></tr>`;
        i++;
    }   
    document.getElementById("tbCorpo").innerHTML = txtTabela; 
    let tagLi = document.getElementsByTagName("li");
    for (let p = 0; p <tagLi.length; p++){
        tagLi[p].classList.remove("active");
    }
    tagLi[pg+2].classList.add("active");

}

function idade(dtNascimento){
    let dtAtual = new Date();
    let anoAtual = dtAtual.getFullYear();
    let anoNascimento = dtNascimento.substr(0,4);
    let idade = anoAtual - anoNascimento;
    let mes = dtAtual.getMonth()+1;
    mes = mes.toString().padStart(2,0);
    let dia = dtAtual.getDate();
    dia = dia.toString().padStart(2,0);
    idade += (`${mes}-${dia} `<` ${dtNascimento.substr(5,5)}`)? -1:0;
    return idade;
}

function editar(i){
    document.getElementById("nome").value = alunos[i].nome;
    document.getElementById("dt-nascimento").value = alunos[i].dt_nascimento;
    document.getElementById("id").value = i;
    document.getElementById("idade").value = idade(alunos[i].dt_nascimento);
    localStorage.setItem('alunos', JSON.stringify(alunos));
}

function gravar(){
    let i =  document.getElementById("id").value;
    alunos[i].nome = document.getElementById("nome").value;
    alunos[i].dt_nascimento = document.getElementById("dt-nascimento").value;
   carregaPagina(pg);
   document.getElementById("nome").value = "";
   document.getElementById("dt-nascimento").value = "";
   document.getElementById("id").value = "";
   document.getElementById("idade").value = "";
}
let listaPagina = "";
 i = 1;
 while (i <= qtPagina) {
     listaPagina += `<li><a href="#" onclick="carregaPagina(${i - 1})">${i}</a></li>`;
     i++;
 }
 listaPagina = 
 `<li><a href="#" onclick="carregaPagina(0)"> <<</a></li>
 <li><a href="#" onclick="carregaPagina(pg-1)"> <</a></li>
 ${listaPagina}
 <li><a href="#" onclick="carregaPagina(pg+1)"> ></a></li>
 <li><a href="#" onclick="carregaPagina(${qtPagina-1})"> >></a></li>
 `;
document.getElementsByClassName("pagination")[0].innerHTML = listaPagina;


carregaPagina(0);

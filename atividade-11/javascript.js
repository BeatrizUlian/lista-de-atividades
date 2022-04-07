let pacientes = [
{nome:"Ana Silva Lopes", status:"Pré Operatório", hrInicio:"03:05", inicioPrevisto:"03:30", fimPrevisto:"04:00", saidaPrevista:"14:00"}, 
{nome:"Lucas Soares Lima", status:"Em sala de Cirurgia", hrInicio:"07:00", inicioPrevisto:"08:00", fimPrevisto:"08:40", saidaPrevista:"19:00"},
{nome:"Joana Fonseca Magalhaes", status:"Sala de Recuperação", hrInicio:"10:05", inicioPrevisto:"10:50", fimPrevisto:"11:30", saidaPrevista:"18:30"},
{nome:"Giovana Nunes Santos", status:"Transferido", hrInicio:"03:05", inicioPrevisto:"09:15", fimPrevisto:"10:00", saidaPrevista:"16:00"},
   ];

   function carregaPagina (n){

    // while(i <= f){
    //     let aluno = (i >= alunos.length)? "&nbsp;":alunos[i];
    //     let nome = (aluno.nome == undefined )? "&nbsp;" : aluno.nome;
    //     let edit = (aluno.nome == undefined)? "&nbsp;" : `<span class="glyphicon glyphicon-eye-open"></span>`;
    //     txtTabela += `<tr><td>${nome}</td><td class="editar" onclick="editar(${i})">${edit}</td></tr>`;
    //     i++;
    // }   
    document.getElementById("tbCorpo").innerHTML = txtTabela; 
    let tagLi = document.getElementsByTagName("li");
    for (let p = 0; p <tagLi.length; p++){
        tagLi[p].classList.remove("active");
    }
    tagLi[pg+2].classList.add("active");

}
// let pacientes = [
// {nome:"Ana Silva Lopes", status:"Pré Operatório", hrInicio:"03:05", inicioPrevisto:"03:30", fimPrevisto:"04:00", saidaPrevista:"14:00"}, 
// {nome:"Lucas Soares Lima", status:"Em sala de Cirurgia", hrInicio:"07:00", inicioPrevisto:"08:00", fimPrevisto:"08:40", saidaPrevista:"19:00"},
// {nome:"Joana Fonseca Magalhaes", status:"Sala de Recuperação", hrInicio:"10:05", inicioPrevisto:"10:50", fimPrevisto:"11:30", saidaPrevista:"18:30"},
// {nome:"Giovana Nunes Santos", status:"Transferido", hrInicio:"03:05", inicioPrevisto:"09:15", fimPrevisto:"10:00", saidaPrevista:"16:00"},
//    ];
   
   
//    function carregaPg(){
//        let i = 0;

//     while(i <= pacientes.length){
        
//     let txtTabela = "";
//         let paciente = pacientes[i];
//         let nome =  paciente.nome;
//        txtTabela += `<tr><td>${nome}</td></tr>`;
//        i++;
//     }   
//     document.getElementById("tbCorpo").innerHTML = txtTabela; 
// }
// carregaPg();

let pacientes = [];

if(localStorage.getItem('pacientes') != null){
    pacientes = JSON.parse(localStorage.getItem('pacientes'));
}

let cor = {
    "pre": "warning",
    "trans" : "info",
    "cir": "danger",
    "rec": "success",
}

function carregaPg(){
    let txtTabela = '';
    for (i  in pacientes){
        let status = pacientes[i].status;
        let local = pacientes[i].local;
        let statusLocal = status;
        if (local != ''){
            status = `${status} (${local})`;
        }

        

        // let status = pacientes[i].status; += (pacientes[i].local != '')? ` (${pacientes[i].local})` : '';

        txtTabela += `<tr onclick="editar(${i})"><td>${pacientes[i].nome}</td><td class="${cor}"> ${status}</td> 
       <td> ${pacientes[i].hrInicio}</td> <td> ${pacientes[i].inicioPrevisto}</td> 
        <td> ${pacientes[i].fimPrevisto}</td> <td> ${pacientes[i].saidaPrevista}</td>`;
        i++;
    }

    document.getElementById('tbCorpo').innerHTML = txtTabela; 
}


function gravar(){
    let paciente = {};
    paciente.nome = document.getElementById('nome').value;
    if (paciente.nome.length < 3){
        alert('Nome vazio.'); return;
    } 
    paciente.status = document.getElementById('status').value;
    paciente.local = document.getElementById('local').value;
    paciente.hrInicio = document.getElementById('hrInicio').value;
    paciente.inicioPrevisto = document.getElementById('inicioPrevisto').value;
    paciente.fimPrevisto = document.getElementById('fimPrevisto').value;
    paciente.saidaPrevista = document.getElementById('saidaPrevista').value;
    let i =  document.getElementById("id").value;
    if(i == ""){
    pacientes.push(paciente);
    } else{
        pacientes[i] = paciente;

    }
    
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
   carregaPg(); //pra nao precisar atualizar a pagina toda hora que faz uma modificação
   novo();
}


function editar(i) {
    document.getElementById("nome").value = pacientes[i].nome;
    document.getElementById("status").value = pacientes[i].status;
    document.getElementById("local").value = pacientes[i].local;
    document.getElementById("hrInicio").value = pacientes[i].hrInicio;
    document.getElementById("inicioPrevisto").value = pacientes[i].inicioPrevisto;
    document.getElementById("fimPrevisto").value = pacientes[i].fimPrevisto;
    document.getElementById("saidaPrevista").value = pacientes[i].saidaPrevista;
    document.getElementById("id").value = i;
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
}

function novo(){
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    document.getElementById("status").value = '';
    document.getElementById("local").value = '';
    document.getElementById("hrInicio").value = '';
    document.getElementById("inicioPrevisto").value = '';
    document.getElementById("fimPrevisto").value = '';
    document.getElementById("saidaPrevista").value = '';
}

function apagar(){
    let i = document.getElementById('id').value;
    if (i == ""){
        alert('Selecione algum paciente');
    }
    pacientes.splice(i,1);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
   carregaPg();
   novo();

}
carregaPg();

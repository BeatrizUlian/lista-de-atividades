document.getElementById('modal-1').style.display = 'block';

let ajax = new XMLHttpRequest();

ajax.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes');
ajax.send();
ajax.onload = function(){
    
    let lsRegiao = JSON.parse(this.response);
    for (const i in lsRegiao){
        let p = document.createElement('p');
        p.innerText = lsRegiao[i].nome;
        document.getElementById('corpo-modal').append(p);
        console.log(lsRegiao[i].nome);
    }
}
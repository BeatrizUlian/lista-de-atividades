function execAjax(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/regioes"); // propriedade que define duas coisas: metodo de comunicacao e qual o endereço que iremos enviar 
    xhttp.onload = function(){
        document.write(this.responseText);
    } //resposta é executada dentro dessa function onload

    
    xhttp.send(); 
    
}

function carregarListaUf(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/regioes");
    xhttp.onload= function (){
        let retorno = JSON.parse(this.responseText);
        let option = "";
        for (const i in response) {
            option += `<option value="${retorno[i].id}">${retorno[i].nome}</option>`
        }
        document.getElementById("ls-uf").innerHTML = option;
    }
    xhttp.send();
}
function carregarListaRegiao(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/regioes"); // propriedade que define duas coisas: metodo de comunicacao e qual o endereço que iremos enviar 
    xhttp.onload = function(){

        let retorno = JSON.parse(this.responseText);
        let option = "";
        for (const i in retorno) {
            option += `<option value="${retorno[i].id}">${retorno[i].nome}</option>`
        }
        document.getElementById("ls-regiao").innerHTML = option;
    } 
    xhttp.send(); 
}

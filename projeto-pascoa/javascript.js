
lista = [];
function buscarListaProduto(){
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "produtos.json");
    ajax.send();
    ajax.onload = function (){
        lista = JSON.parse(this.response);
        replicar();
    }
}

function replicar (){
    let produto = document.querySelector(".produtos").clodeNode(true);
    produto.querySelector(".titulosabores").innerHTML= "novo titulo";
    document.querySelector(".lista").append(produto);
}
buscarListaProduto();

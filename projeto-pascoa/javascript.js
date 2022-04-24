
    lista = [];
    function buscarListaProduto() {
        let ajax = new XMLHttpRequest();
        ajax.open("GET", "https://beatrizulian.github.io/lista-de-atividades/projeto-pascoa/produtos.json");
        ajax.send();
        ajax.onload = function () {
            lista = JSON.parse(this.response);
            replicar();
        }

    }

    function replicar(){
let i = 0;
        for (const p of lista) {
            let id = i;
            let produto = document.querySelector('.ovos').cloneNode(true);
            produto.querySelector('.titulosabores').innerHTML = p.nome;
            produto.querySelector('.descricao').innerHTML = p.descricao;
            produto.querySelector('.valor').innerHTML = p.valor;
            produto.querySelector('.quantidade').innerHTML = p.quantidade;
            produto.querySelector('img').src= `https://beatrizulian.github.io/lista-de-atividades/projeto-pascoa/${p.img}`;
         
            produto.querySelector(".menos").addEventListener("click", function () { alterarQt(id, -1) });
            produto.querySelector(".mais").addEventListener("click", function () { alterarQt(id, 1) });

            document.querySelector('.lista').append(produto);
            i++;
        }
        document.querySelector('.ovos').remove();
    }

    function alterarQt(id, quantidade) {
        let p = lista[id];
        p.quantidade += quantidade;
        if(p.quantidade < 0 ) p.quantidade = 0;
        document.getElementsByClassName("quantidade")[id].innerHTML = p.quantidade;
    }
    buscarListaProduto();

    let msgModal = "";
function mostrarPedido(){
   
    let subTotal = 0;
    let total = 0;
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    
    for (const produto of lista){
        if(produto.quantidade > 0){
            subTotal = (produto.valor * produto.quantidade);
            total += subTotal;
                  
           msgModal += `<p>${produto.nome} (R$ ${produto.valor} x ${produto.quantidade}) = <b>R$${subTotal}</b> </p>`;
        
        }
    }

    
    if(msgModal == ""){
        msgModal ="<p>Nenhum produto selecionado.</p>";
        document.querySelector("#btEnviar").disabled = "disabled";
    }else {
        msgModal += `<b>Nome</b>: ${nome}<br>
        <b>Endereço para entrega</b>: ${endereco}<br><br>
        <b>Total</b>: R$${total}<br>`;
        document.querySelector("#btEnviar").disabled = "";
    }
    document.querySelector(".modal-body").innerHTML = msgModal;

    
}

function enviar(){
    let fone = '5561999011995';
    msgModal = msgModal.replaceAll("<b>","*").replaceAll("</b>", "*");
    msgModal = msgModal.replaceAll("<p>", "").replaceAll("</p>", "\n");
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    msgModal += `Nome: *${nome}*\n`;
    msgModal += `Endereço: *${endereco}*\n`;
    msgModal = encodeURI(msgModal);
    link = `https://api.whatsapp.com/send?phone=${fone}&text=${msgModal}`
    window.open(link,'_blanck')
}
    // }
    // function replicar() {
    //     let i = 0;
    //     for (const p of lista) {
    //         let id = i;
    //         let produto = document.querySelector(".produtos").cloneNode(true);
    //         produto.querySelector(".titulosabores").innerHTML = p.nome;
    //         produto.querySelector("img").innerHTML = p.img;
    //         produto.querySelector(".valor").innerHTML = `R$ ${p.valor}`;
    //         produto.querySelector(".descricao").innerHTML = p.descricao;
    //         produto.querySelector(".quantidade").innerHTML = p.quantidade;

    //         produto.querySelector(".menos").addEventListener("click", function () { alterarQt(id, -1) });
    //         produto.querySelector(".mais").addEventListener("click", function () { alterarQt(id, 1) });

    //         document.querySelector(".lista").append(produto);
    //         i++;
    //     }
    //     document.querySelector(".produto").remove();
    // }

    // function alterarQt(id, qt) {
    //     let p = lista[id];
    //     p.qt += qt;
    //     if(p.qt < 0 ) p.qt = 0;
    //     document.getElementsByClassName("qt")[id].innerHTML = p.qt;
    // }

    // buscarListaProduto();
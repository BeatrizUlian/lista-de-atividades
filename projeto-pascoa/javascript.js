
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
            produto.querySelector('img').innerHTML = p.img;
         
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

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

        for (const p of lista) {
            let produto = document.querySelector('.ovos').cloneNode(true);
            produto.querySelector('.titulosabores').innerHTML = p.nome;
            produto.querySelector('.descricao').innerHTML = p.descricao;
            produto.querySelector('.valor').innerHTML = p.valor;
            produto.querySelector('#quantidade').innerHTML = p.quantidade;
            // produto.querySelector('.img').innerHTML = p.img;
            document.querySelector('.lista').append(produto);
    
        }
        document.querySelector('.ovos').remove();
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
let contador = 0;
let input = document.getElementById('inputItem');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addItem() {
    let valorInput = input.value;

    if ((valorInput !== " ") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarItem(${contador})" class="item-icone">
                <i id="icone_${contador}" class="bi bi-circle"></i>
            </div>
            <div onclick="marcarItem(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"> <i class="bi bi-x-circle"></i> Excluir</button>
            </div>
        </div>`;

        main.innerHTML += novoItem;
        input.value = " ";
        input.focus();
    }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarItem(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class')

    if (classe == "item") {
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('bi-circle');
        icone.classList.add('bi-check-circle');

        item.parentNode.appendChild(item);
    }
    else {
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_' + id);
        icone.classList.add('bi-circle');
        icone.classList.remove('bi-check-circle');
    }
}

input.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})
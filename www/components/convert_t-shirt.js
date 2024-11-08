var sizeMap = {
    'Brasil': ['PP','P','M','G','GG','XG','XXG'], 
    'EUA': ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    'Japão': ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    'UE': ['32-34', '36-38', '38-40', '42-44', '46-48', '50-52', '54-56'],
    'AUS': ['6-8', '8-10', '10-12', '14-16', '18-20', '22-24', '26-28'],
    'UK': ['4-6', '6-8', '10-12', '12-14', '16-18', '20-22', '24-26']
};
var paisOrigem, tamanhoOrigem, paisDestino, tamanhoDestino;

function preencherPais(selectPais) {
    selectPais.innerHTML = '<option value="0" selected>País</option>';
    for (var pais of Object.keys(sizeMap)) {
        selectPais.appendChild(new Option(pais, pais));
    }
}

function paisSelecionado(selectPais) {
    var selectTamanhos, outroPais, outroTamanho;
    if (selectPais === paisOrigem) {
        selectTamanhos = tamanhoOrigem;
        outroTamanho = tamanhoDestino;
        outroPais = paisDestino;
    } else {
        selectTamanhos = tamanhoDestino;
        outroTamanho = tamanhoOrigem;
        outroPais = paisOrigem;
    }

    // preenche os tamanhos deste país
    selectTamanhos.innerHTML = '<option value="0" selected>Tamanho</option>';
    if (selectPais.value in sizeMap) {
        for (var tamanho of sizeMap[selectPais.value]) {
            selectTamanhos.appendChild(new Option(tamanho, tamanho));
        }
    }
    // verifica se o outro país e o outro tamanho já estão selecionados
    if (outroPais.value != '0' && outroTamanho.value != '0') {
        tamanhoSelecionado(outroTamanho);
    }
}

function tamanhoSelecionado(selectTamanhos) {
    var outroTamanho, pais, outroPais;
    if (selectTamanhos === tamanhoOrigem) {
        outroTamanho = tamanhoDestino;
        pais = paisOrigem;
        outroPais = paisDestino;
    } else {
        outroTamanho = tamanhoOrigem;
        pais = paisDestino;
        outroPais = paisOrigem;
    }
    if (selectTamanhos.value == '0' || pais.value == '0' || outroPais.value == '0')
        return;
    // encontrar posição do tamanho no país correspondente ao tamanho que foi alterado
    var pos = sizeMap[pais.value].indexOf(selectTamanhos.value);
    // setar a opção do outro select para a mesma posição
    outroTamanho.selectedIndex = pos + 1; // soma 1 porque a primeira posição é a opção com o texto "Tamanho"
}

// DOMContentLoaded: depois que a página for carregada (assim garante que os elementos já existem)
document.addEventListener('DOMContentLoaded', function () {
    paisOrigem = document.getElementById('paisOrigem');
    tamanhoOrigem = document.getElementById('tamanhoOrigem');
    paisDestino = document.getElementById('paisDestino');
    tamanhoDestino = document.getElementById('tamanhoDestino');

    preencherPais(paisOrigem);
    preencherPais(paisDestino);
    paisOrigem.addEventListener('change', function () {
        paisSelecionado(paisOrigem);
    });
    paisDestino.addEventListener('change', function () {
        paisSelecionado(paisDestino);
    });
    tamanhoOrigem.addEventListener('change', function () {
        tamanhoSelecionado(tamanhoOrigem);
    });
    tamanhoDestino.addEventListener('change', function () {
        tamanhoSelecionado(tamanhoDestino);
    });
});
var sizeMap = {
    'Brasil': ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '46'],
    'EUA Masculino': ['3,5', '4,5', '5', '6', '7', '7,5', '8', '8,5', '9', '10,5', '11,5', '12,5', '14'],
    'EUA Feminino': ['5', '6', '6,5', '7,5', '8,5', '9', '9,5', '10', '10,5', '12', '13', '14', '15,5'],
    'Europa (UE)': ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46,5', '48,5'],
    'UK Masculino': ['3,0', '4', '4,5', '5,5', '6', '7', '7,5', '8', '8,5', '10', '11', '12', '13,5'],
    'UK Feminino': ['2,5', '3,5', '4', '5', '6', '6,5', '7', '7,5', '8', '9,5', '10,5', '11,5', '13'],
    'Japão Masculino': ['21,5', '22,5', '23', '24', '25', '25,5', '26', '26,5', '27', '28,5', '29,5', '30,5', '31,5'],
    'Japão Feminino': ['21', '22', '22,5', '23,5', '24', '25', '25,5', '26', '26,5', '27', '28', '29', '31'],
    'AUS Masculino': ['3', '4', '4,5', '5,5', '6', '7', '7,5', '8', '8,5', '10', '11', '12', '13,5'],
    'AUS Feminino': ['3,5', '4,5', '5', '6', '7', '7,5', '8', '8,5', '9', '10,5', '11,5', '12', '14']
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
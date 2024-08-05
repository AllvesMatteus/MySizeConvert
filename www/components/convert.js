var sizeMap = {
    //Brasil para Americano Masculino
    'BR': {
        '33': '3,5',
        '34': '4,5',
        '35': '5',
        '36': '6',
        '37': '7',
        '38': '7,5',
        '39': '8',
        '40': '8,5',
        '41': '9',
        '42': '10,5',
        '43': '11,5',
        '44': '12,5',
        '46': '14'
    },
    //Americano Masculino para Brasil
    'US_M': {
        '3,5': '33',
        '4,5': '34',
        '5': '35',
        '6': '36',
        '7': '37',
        '7,5': '38',
        '8': '39',
        '8,5': '40',
        '9': '41',
        '10,5': '42',
        '11,5': '43',
        '12,5': '44',
        '14': '46'
    },
    //Americano Feminino para Brasil
    'US_F': {
        '5': '33',
        '6': '34',
        '6,5': '35',
        '7,5': '36',
        '8,5': '37',
        '9': '38',
        '9,5': '39',
        '10': '40',
        '10,5': '41',
        '12': '42',
        '13': '43',
        '14': '44',
        '15,5': '46'
    },
    //Europeu para Brasil
    'EUR': {
        '35': '33',
        '36': '34',
        '37': '35',
        '38': '36',
        '39': '37',
        '40': '38',
        '41': '39',
        '42': '40',
        '43': '41',
        '44': '42',
        '45': '43',
        '46,5': '44',
        '48,5': '46'
    }
};

function updateSizes(paisSelectId, sizeSelectId) {
    var pais = document.getElementById(paisSelectId).value;
    var sizeSelect = document.getElementById(sizeSelectId);

    // Limpar opções atuais
    sizeSelect.innerHTML = '';

    // Definir novas opções baseado no país selecionado
    if (pais === 'BR') {
        addOptions(sizeSelect, Object.keys(sizeMap[pais]));
    } else if (pais === 'US_M') {
        addOptions(sizeSelect, Object.keys(sizeMap[pais]));
    } else if (pais === 'US_F') {
        addOptions(sizeSelect, Object.keys(sizeMap[pais]));
    } else if (pais === 'EUR') {
        addOptions(sizeSelect, Object.keys(sizeMap[pais]));
    }

    // Atualiza o tamanho correspondente
    sizeSelect.addEventListener('change', function() {
        var selectedSize = sizeSelect.value;
        var correspondingSize = sizeMap[pais][selectedSize];
        var otherSizeSelectId = sizeSelectId === 'ize1' ? 'ize2' : 'ize1';
        document.getElementById(otherSizeSelectId).value = correspondingSize;
    });
}

function addOptions(selectElement, optionsArray) {
    optionsArray.forEach(function(optionValue) {
        var option = document.createElement('option');
        option.value = option.textContent = optionValue;
        selectElement.appendChild(option);
    });
}

document.getElementById('clear-button').addEventListener('click', function() {
    var selects = document.querySelectorAll('select');
    selects.forEach(function(select) {
        select.value = 'elected';
    });
});
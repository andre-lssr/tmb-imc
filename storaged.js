function localsalvar() {
    /* SALVAR NO LOCAL STOREGE */
    exibirresul();
    var lspeso = document.getElementById("peso").value;
    var lsaltura = document.getElementById("altura").value;
    var lsnome = document.getElementById("nome").value;
    var lsidade = Number(document.getElementById("idade").value);
    var lsfem = document.getElementById("fem");
    var lsmasc = document.getElementById("masc");
    if (lsmasc.checked == true) {
        localStorage.setItem('sexo', "Masculino");
    } else {
        if (fem.checked == true) {
            localStorage.setItem('sexo', "Feminino");
        }
    }
    if ((lspeso != '') && (lsaltura != '') && (lsnome != '') && (lsidade != '')) {
        localStorage.setItem('peso', lspeso);
        localStorage.setItem('altura', lsaltura);
        localStorage.setItem('nome', lsnome);
        localStorage.setItem('idade', lsidade);
        var msg = alertify.success('Registro Salvo.');
        msg.delay(1.9);
        alertify.set('notifier', 'position', 'bottom-center');
        limpar();
    } else {
        var msg = alertify.error('Preencha os dados corretamente.');
        msg.delay(1.9);
        alertify.set('notifier', 'position', 'bottom-center');
    }
}

function localexibir() {
    exibirresul();
    /* EXIBIR DADOS SALVOS NO LOCAL STORAGE */
    let exibedados = document.querySelector('div#resultado');
    let exibepeso = localStorage.peso;
    let exibealtura = localStorage.altura;
    let exibeimc = localStorage.imc;
    let exibenome = localStorage.nome;
    let exibeidade = localStorage.idade;
    let exibesexo = localStorage.sexo;
    let exibelaudo = localStorage.laudo;
    let exibetmb = localStorage.tmb;
    if (exibepeso != null && exibealtura != null) {
        exibedados.innerHTML = `&bull; ${exibenome} &bull; <br> &bull; ${exibeidade} anos &bull; <br> &bull; Sexo ${exibesexo} &bull;<br> 
        &bull; Peso: ${exibepeso} Kg &bull; <br> &bull; Altura: ${exibealtura}m &bull; <br> &bull; IMC: ${exibeimc} &bull; <br> &bull; Resultado: ${exibelaudo} &bull;
        <BR> &bull; TMB: ${exibetmb} kcal &bull;`;
    } else {
        var msg = alertify.error('Não há dados salvos.');
        alertify.set('notifier', 'position', 'bottom-center');
        msg.delay(1.9);
    }
}

function apagarstorage() {
    /* LIMPA TODO LOCAL STORAGE */
    localStorage.clear();
    limpar();
    var msg = alertify.success('Registro Excluido.');
    alertify.set('notifier', 'position', 'bottom-center');
    msg.delay(1.9);
}        
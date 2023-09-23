function limpar() {
    ocultarresult();
    document.querySelector('input#peso').value = '';
    document.querySelector('input#altura').value = '';
    document.querySelector('input#nome').value = '';
    document.querySelector('input#idade').value = '';
    let limpa = document.querySelector('div#resultado');
    let limpa2 = document.querySelector('div#resultado');
    limpa2.innerHTML = '';
    limpa.innerHTML = '';
}

function limitapeso() {
    let tpeso = String(document.querySelector('input#peso').value);
    if (tpeso.length > 3) {
        var msg = alertify.error('Máximo de 3 caracteres. Você digitou ' + tpeso.length + '.');
        alertify.set('notifier', 'position', 'bottom-center');
        msg.delay(1.9);
        document.querySelector('input#peso').value = '';
        let limpa = document.querySelector('div#resultado');
        limpa.innerHTML = '';
    }
}

function limitaaltura() {
    let taltura = String(document.querySelector('input#altura').value);
    if (taltura.length > 4) {
        var msg = alertify.error('Máximo de 4 caracteres. Você digitou ' + taltura.length + '.');
        alertify.set('notifier', 'position', 'bottom-center');
        msg.delay(1.9);
        document.querySelector('input#altura').value = '';
        let limpa = document.querySelector('div#resultado');
        limpa.innerHTML = '';

    }
}

function exibirresul() {
    document.querySelector("div#resultado").style.display = "block"
    document.querySelector("div#info").style.display = "block"
}

function ocultarresult() {
    document.querySelector("div#resultado").style.display = "none"
    document.querySelector("div#info").style.display = "none"
}


function testaConexao() {
    if (navigator.onLine) {
        /**/
    } else {
        var msg = alertify.error('Sem conexão com a Internet.');
        msg.delay(3);
        alertify.set('notifier', 'position', 'bottom-center');
    }
}


function clique() {
    alertify.minimalDialog || alertify.dialog('minimalDialog', function () {
        return {
            main: function (content) {
                this.setContent(content);
            }
        };
    });
    alertify.minimalDialog("&bull; <strong>A Taxa Metabólica Basal (TMB)</strong> é o mínimo de energia necessária para manter as funções do organismo em repouso, como os batimentos cardíacos, a pressão arterial, a respiração e a manutenção da temperatura corporal. <br><br> &bull; O <strong>IMC</strong> é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura. Embora seja uma ferramenta muito comum, o IMC não é considerada a forma mais exata de avaliar o peso, já que não leva em consideração a composição corporal. Por isso, é comum que no caso de atletas (que possuem uma maior quantidade de massa muscular) seja aconselhado o uso de outras técnicas, como a bioimpedância, para uma avaliação mais detalhada do peso.").set({ transition: 'zoom', message: 'Transition effect: zoom' }).show();

}

function stat() {
    if (document.getElementById("nome").value === "") {
        botao.disabled = true;
        console.log("nome")
    } else {
        botao.disabled = false;
        console.log("nome")
    }
}

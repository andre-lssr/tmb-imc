function calcular() {
    /* CALCULO DO IMC */
    let peso = document.querySelector('input#peso');
    let altura = document.querySelector('input#altura');
    let peso_n = Number(peso.value);
    let altura_n = Number(altura.value);
    let exibe_resultado_imc = document.querySelector('div#resultado');
    if (peso_n == "" || altura_n == "") {
        var msg = alertify.error('Preencha os dados corretamente.');
        alertify.set('notifier', 'position', 'bottom-center');
        msg.delay(1.9);
    } else {
        if (peso_n < 10) {
            var msg = alertify.error('Preencha os dados corretamente.');
            alertify.set('notifier', 'position', 'bottom-center');
            msg.delay(1.9);

        } else {
            if (Number.isInteger(altura_n)) {
                let altura_final_int = (altura_n * 0.01)
                var calculo_imc = (peso_n) / (altura_final_int * altura_final_int);
                var calculo_imc_final = parseFloat(calculo_imc.toFixed(1));
                exibe_resultado_imc.innerHTML = `Seu IMC é de ${calculo_imc_final}`
                localStorage.setItem('imc', calculo_imc_final);
            } else {
                var calculo_imc = (peso_n) / (altura_n * altura_n);
                var calculo_imc_final = parseFloat(calculo_imc.toFixed(1));
                exibe_resultado_imc.innerHTML = `Seu IMC é de ${calculo_imc_final}`
                localStorage.setItem('imc', calculo_imc_final);
            }
        }
        var resultado_laudo = parseFloat(calculo_imc_final.toFixed(1));
        if (resultado_laudo < 18.5) {
            var resultadolaudo = localStorage.setItem('laudo', "Magreza");
            exibe_resultado_imc.innerHTML += ` (MAGREZA)`;
        } else {
            if (resultado_laudo >= 18.5 && resultado_laudo < 24.9) {
                var resultadolaudo = localStorage.setItem('laudo', "Normal");
                exibe_resultado_imc.innerHTML += ` (NORMAL)`;
            } else {
                if (resultado_laudo > 25.0 && resultado_laudo < 29.9) {
                    var resultadolaudo = localStorage.setItem('laudo', "Sobrepeso I");
                    exibe_resultado_imc.innerHTML += ` (SOBREPESO I)`;
                } else {
                    if (resultado_laudo > 30.0 && resultado_laudo < 39.9) {
                        var resultadolaudo = localStorage.setItem('laudo', "Obesidade II");
                        exibe_resultado_imc.innerHTML += ` (OBESIDADE II)`;
                    } else {
                        if (resultado_laudo > 40.0) {
                            var resultadolaudo = localStorage.setItem('laudo', "Obesidade III");
                            exibe_resultado_imc.innerHTML += ` (OBESIDADE III)`;
                        }
                    }
                }
            }
        }
    }
}
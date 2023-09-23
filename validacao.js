function validarSexo() {
    exibirresul();
    var fem = document.getElementById("fem");
    var masc = document.getElementById("masc");
    let idade = document.getElementById("idade");
    let resultado = document.querySelector('div#resultado');
    let alturaSexo = document.querySelector('input#altura');
    alturaSexofinal = Number.parseFloat(alturaSexo.value);
    pesoSexofinal = Number.parseFloat(peso.value);
    idadeSexofinal = Number.parseInt(idade.value);
    if (masc.checked == true && !isNaN(pesoSexofinal) && !isNaN(alturaSexofinal)) {
        var tmbhomemfinal = ((66) + (13.8 * pesoSexofinal) + (5 * alturaSexofinal) - (6.8 * idadeSexofinal));
        localStorage.setItem('tmb', tmbhomemfinal);
        resultado.innerHTML += `<br>Metabolismo Basal: ${tmbhomemfinal} kcal`;
    } else {
        if (fem.checked == true && !isNaN(pesoSexofinal) && !isNaN(alturaSexofinal)) {
            var tmbmulherfinal = (655) + (9.6 * pesoSexofinal) + (1.8 * alturaSexofinal) - (4.7 * idadeSexofinal);
            var tmbfinalfem = parseFloat(tmbmulherfinal.toFixed(2));
            localStorage.setItem('tmb', tmbfinalfem);
            resultado.innerHTML += `<br>Metabolismo Basal: ${tmbfinalfem} kcal`;
        }
    }
}
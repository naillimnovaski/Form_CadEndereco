'use strict' // ativa o modo retritor 
//codigo de consumo de API da ViaCEP
//https;//viacep.com.br/

//limpar consulta do form ja realizada
const limparFormulario =() => {

    document.getElementById ("rua").value = " ";
    document.getElementById ("bairro").value = " ";
    document.getElementById ("cidade").value = " ";
    document.getElementById ("estado").value = " ";
}

//verifica se o cep e valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
//verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);



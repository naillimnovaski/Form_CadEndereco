'use strict' // ativa o modo retritor 
//codigo de consumo de API da ViaCEP
//https;//viacep.com.br/

//limpar consulta do form ja realizada
const limparFormulario =() => {

    document.getElementById ("Rua").value = ' '; 
    document.getElementById ("Rairro").value = ' ';
    document.getElementById ("Cidade").value = ' ';
    document.getElementById ("Estado").value = ' ';
}

//verifica se o cep e valido, texta o q e numero e o q nao
const eNumero = (numero) => /^[0-9]+$/.test(numero);
//verifica o tamanho do CEP, verifica c e igual a 8 digitos
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//funcao para preencher campos relacionados ao CEP 
const preencherFormulario = (endereco) => {
    document.getElementById('Rua').value = endereco.logradouro;
//coloca o valor de logradouro da API dentro do campo logradouro do formulario
    document.getElementById('Bairro').value = endereco.bairro;

    document.getElementById('Cidade').value = endereco.Cidade;

    document.getElementById('Estado').value = endereco.uf;
   
}




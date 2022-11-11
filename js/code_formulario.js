// Identificar elementos do HTML //
const ele_nome = document.getElementById("nome");
const ele_rg = document.getElementById("rg");
const ele_email = document.getElementById("email");
const ele_senha = document.getElementById("senha");
const ele_repetir_senha = document.getElementById("repetir_senha");
const ele_cep = document.getElementById("cep");
const ele_rua = document.getElementById("rua");
const ele_numero = document.getElementById("numero");
const ele_complemento = document.getElementById("complemento");
const ele_bairro = document.getElementById("bairro");
const ele_cidade = document.getElementById("cidade");
const ele_estado = document.getElementById("estado");

// Monitor de eventos: acionar quando qualquer edição for feita no CEP (apagando ou escrevendo) //
ele_cep.addEventListener('input', api_busca_cep);
ele_cep.addEventListener('propertychange', api_busca_cep);

// Corrigir CEP e executar API //
function api_busca_cep() {

  // Substituir qualquer coisa que não seja número por nada //
  let cep = ele_cep.value.replace(/\D/g, '');
  ele_cep.value = cep;

  // Executar somente se o CEP tiver mais de 7 dígitos //
  if (cep.length > 7) {

    // Inserir no formulário o CEP formatado com "-" //
    ele_cep.value = cep[0] + cep[1] + cep[2] + cep[3] + cep[4] + "-" + cep[5] + cep[6] + cep[7];

  }
}
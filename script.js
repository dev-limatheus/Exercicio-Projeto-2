const form = document.getElementById('formContato');
const contatos = [];
const numeros = [];

let linhas='';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');
    {

    contatos.push(inputNomeContato.value);
    numeros.push(parseFloat(inputNumero.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputNomeContato.value='';
    inputNumero.value='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;  
}
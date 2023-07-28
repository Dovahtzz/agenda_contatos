const form = document.getElementById('form-atividade');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('Nome-contato');
    const inputNumeroContato = document.getElementById('Numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já existe`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));
        
        let novaLinha = '<tr>';
        novaLinha += `<td>${inputNomeContato.value}</td>`;
        novaLinha += `<td>${inputNumeroContato.value}</td>`;
        novaLinha += '</tr>';
        
        linhas += novaLinha; 
        
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas; 
        
        form.reset();
    }
}

function enviar() {
    let nome = document.forms["infos"]["nome"].value;
    let email = document.forms["infos"]["email"].value;
    let idade = document.forms["infos"]["idade"].value;
    let telefone = document.forms["infos"]["telefone"].value;
    
    document.getElementById('resultadoNome').textContent = `Nome: ${nome}`;
    document.getElementById('resultadoEmail').textContent = `E-mail: ${email}`;
    document.getElementById('resultadoIdade').textContent = `Idade: ${idade}`;
    document.getElementById('resultadoTelefone').textContent = `Telefone: ${telefone}`;
}
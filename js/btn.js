const senha = document.querySelector('.senha');
const btn = document.querySelector('.exibirSenha'); // Alterado para a classe 'exibirSenha'

btn.onclick = () => {
    if (senha.type === 'password') {
        senha.type = 'text';
        btn.src = './img/eye.svg';
    } else {
        senha.type = 'password';
        btn.src = './img/eye-off.svg';
    }
};
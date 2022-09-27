let form = document.querySelector('.formulario')

let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let confirmar = document.querySelector('#confirmar');
let botao = document.querySelector('.botao')
let mensagem = document.querySelector('.mensagem')

let ok = document.querySelector('.ok')


function iniciar() {
    mensagem.classList.add('sumir')
    mensagem.classList.add('diminuir')
}

function mudarCampo(input, conteudo) {

    if (input.value === '' || 
    input.value === "Crie um nome de usuário" || 
    input.value === "Digite o seu email" || 
    input.value === "Digite sua senha" || 
    input.value === "Confirme sua senha") {
        input.value = conteudo;
        input.style.opacity = '30%'

    } else {
        input.style.opacity = '100%'
    }

}

function trocaTipo() {
    if 
    (nome.value === "Crie um nome de usuário" || nome.value === "" || 
    email.value === "Digite o seu email" || email.value === "" ||
    senha.value === "Digite sua senha" || senha.value === "" ||
    confirmar.value === "Confirme sua senha" || confirmar.value === "") 
    {   
        form.classList.remove('tirarBlur');
        form.classList.add('criarBlur');


        mensagem.classList.remove('sumir');
        mensagem.classList.replace('diminuir','crescer')
        


    } else {
        botao.type = 'submit';
    }
}

function alerta() {
    form.classList.remove('criarBlur');
    form.classList.add('tirarBlur');
    
    mensagem.classList.replace('crescer', 'diminuir')
    mensagem.classList.add('sumir');
    
}



const divResposta = document.querySelector('#resposta')
const btnSair = document.querySelector('#sair')
const token = localStorage.getItem('token')

// Verifica se o token está presente no LocalStorage
if (!localStorage.getItem('token')) {
    // Redireciona o usuário para a página de login
    alert('Usuário não está logado.')
    window.location.href = './login-usuario.html'
} else {

    divResposta.innerHTML = token
}

btnSair.addEventListener('click', () => {


    localStorage.removeItem('token')
    window.location.href = './login-usuario.html'
    // const usuario = dadosDoFormulario()
    // capturar os dados do formulário
    //const usuario = getDadosForm()
    // enviar os dados para api
    // enviarDadosParaAPI(usuario)
    //divToken.innerHTML = 'deu certo'


})

// Verifica se o token está presente no LocalStorage
if (!localStorage.getItem('token')) {
    // Redireciona o usuário para a página de login
    window.location.href = './login-usuario.html'
    alert('Usuário não está logado.')

}


// Obtém o token do LocalStorage
const token = localStorage.getItem('token')

// Envia uma solicitação GET para a rota protegida com o token de autenticação
fetch('https://pdv-cubos-hml.onrender.com/cliente', {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    .then(response => {
        if (!response.ok) {
            // Se a resposta não for OK, redireciona o usuário para a página de login
            alert('Token Expirado.')
            window.location.href = './login-usuario.html'

        } else {

            // Se a resposta for OK, mostra a página protegida
            // Aqui você pode carregar o conteúdo da página protegida usando JavaScript ou fazer um redirecionamento para a página HTML correspondente
        }
    })
    .catch(error => {
        console.error(error);
        // Trata erros de rede ou outras exceções
    });

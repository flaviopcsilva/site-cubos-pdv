

// Verifica se o token está presente no LocalStorage
if (!localStorage.getItem('token')) {
    // Redireciona o usuário para a página de login
    window.location.href = './login-usuario.html'
    alert('Usuário não está logado.')

}


// Obtém o token do LocalStorage
const token = localStorage.getItem('token')
const divRes = document.querySelector('#resposta')

// // Envia uma solicitação GET para a rota protegida com o token de autenticação
// fetch('https://pdv-cubos-hml.onrender.com/usuario', {
//     headers: {
//         Authorization: `Bearer ${token}`
//     }

// })
//     .then(response => {
//         if (!response.ok) {
//             // Se a resposta não for OK, redireciona o usuário para a página de login
//             alert('Token Expirado.')
//             window.location.href = './login-usuario.html'

//         } else {


//             // Se a resposta for OK, mostra a página protegida
//             // Aqui você pode carregar o conteúdo da página protegida usando JavaScript ou fazer um redirecionamento para a página HTML correspondente
//         }
//     })
//     .catch(error => {
//         console.error(error);
//         // Trata erros de rede ou outras exceções
//     })

const btnVoltar = document.querySelector('#home')

btnVoltar.addEventListener('click', () => {

    window.location.href = '../index.html'

})



async function consultaCategorias() {




    const retorno = await fetch('https://pvd-cubos.vercel.app/usuario', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const categorias = await retorno.json(retorno)

    const usuario = `<div  align="center" class="livro">
    <h3>Perfil do Usuário Logado</h3>
    <p><h4>ID: ${categorias.id}</h4></p>
    <p><h4>Nome: ${categorias.nome}</h4></p>
    <p><h4>Email: ${categorias.email}</h4></p>
  </div>`

    divRes.innerHTML = usuario

    if (retorno.status === 401) {
        alert('Token Expirado')
        window.location.href = './login-usuario.html'
    }


}





consultaCategorias()




const btnVoltar = document.querySelector('#home')
const divRes = document.querySelector('#res')
// Verifica se o token está presente no LocalStorage
if (!localStorage.getItem('token')) {
    // Redireciona o usuário para a página de login
    window.location.href = './login-usuario.html'
    alert('Usuário não está logado.')

}


// Obtém o token do LocalStorage
const token = localStorage.getItem('token')


btnVoltar.addEventListener('click', () => {
    window.location.href = '../index.html'
})



async function consultaCategorias() {
    const retorno = await fetch('https://pdv-cubos-hml.onrender.com/cliente', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (retorno.status === 401) {
        alert('Não Autorizado ou Token Expirado.')
        window.location.href = './login-usuario.html'
    }

    const categorias = await retorno.json()
    preencheTela(categorias)
}

function preencheTela(categorias) {
    categorias.forEach(categoria => {
        const novaCategoriaHTML = `
    <div  align="center" class="livro">
    <h3>ID: ${categoria.id}</h3>
    <p><h4>Nome: ${categoria.nome}</h4></p>
    <p><h4>Email: ${categoria.email}</h4></p>
  </div>
    `
        divRes.innerHTML = divRes.innerHTML + novaCategoriaHTML
    })
}

consultaCategorias()
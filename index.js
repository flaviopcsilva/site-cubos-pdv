const hrefSair = document.querySelector('#sair')
// Verifica se o token está presente no LocalStorage

if (localStorage.getItem('token')) {
    // Redireciona o usuário para a página de login
    hrefSair.style.display = 'block'

} else {
    hrefSair.style.display = 'none';
}

hrefSair.addEventListener('click', () => {
    localStorage.removeItem('token')
})
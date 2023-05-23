const hrefSair = document.querySelector('#sair')
// Verifica se o tokenestá presente no LocalStorage

if (localStorage.getItem('token')) {
    // Redireciona o usuário para a página de login
    hrefSair.style.display = 'inline'

} else {
    hrefSair.style.display = 'none';
}

hrefSair.addEventListener('click', () => {
    localStorage.removeItem('token')
})

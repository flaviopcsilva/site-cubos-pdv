const divCategorias = document.querySelector('#categorias')
const btnVoltar = document.querySelector('#home')

window.addEventListener('scroll', function () {
    btnVoltar.style.top = window.innerHeight - myButton.offsetHeight - 20 + 'px';
})

btnVoltar.addEventListener('click', () => {
    window.location.href = '../index.html'
})

async function consultaCategorias() {
    const retorno = await fetch('https://pvd-cubos.vercel.app/categoria')
    const categorias = await retorno.json()
    preencheTela(categorias)
}

function preencheTela(categorias) {
    categorias.forEach(categoria => {
        const novaCategoriaHTML = `
    <div >
    <h3>ID: ${categoria.id}</h3>
    <p><h4>Descrição: ${categoria.descricao}</h4></p>
  </div>
    `
        divCategorias.innerHTML = divCategorias.innerHTML + novaCategoriaHTML
    })
}

consultaCategorias()
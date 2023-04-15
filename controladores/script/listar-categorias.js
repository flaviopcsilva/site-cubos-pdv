const divCategorias = document.querySelector('#categorias')

async function consultaCategorias() {
    const retorno = await fetch('https://cubos-pdv.cyclic.app/categoria')
    const categorias = await retorno.json()
    preencheTela(categorias)
}

function preencheTela(categorias) {
    categorias.forEach(categoria => {
        const novaCategoriaHTML = `
    <div  align="center" class="livro">
    <h3>ID: ${categoria.id}</h3>
    <p><h4>Descrição: ${categoria.descricao}</h4></p>
  </div>
    `
        divCategorias.innerHTML = divCategorias.innerHTML + novaCategoriaHTML
    })
}

consultaCategorias()
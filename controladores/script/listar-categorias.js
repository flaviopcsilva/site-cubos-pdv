const divCategorias = document.querySelector('#categorias')

async function consultaCategorias() {
    const retorno = await fetch('https://pdv-cubos-hml.onrender.com/categoria')
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
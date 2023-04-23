const btnEnviar = document.querySelector('#enviar')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const divResultado = document.querySelector('#resultado')


btnEnviar.addEventListener('click', () => {

    const usuario = dadosDoFormulario()
    // capturar os dados do formulário
    //const usuario = getDadosForm()
    // enviar os dados para api
    enviarDadosParaAPI(usuario)


})

const dadosDoFormulario = () => {

    if (email.value === '' || senha.value === '') {
        // window.alert('Todos os campos devem ser preenchidos.')
        divResultado.innerHTML = `Todos os campos devem ser preenchidos.`
        email.focus()
        return
    }
    usuario = {
        email: email.value,
        senha: senha.value
    }
    return usuario
}

const enviarDadosParaAPI = async (usuario) => {
    let res = ''
    try {
        const resposta = await fetch('https://pdv-cubos-hml.onrender.com/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario),


        })
        const token = await resposta.json()






        if (resposta.status === 404) {
            divResultado.innerHTML = 'Email ou senha Invávidos!'
        }
        if (resposta.status === 400) {
            divResultado.innerHTML = `Erro interno do servidor`
        }

        if (resposta.status === 201) {

            divResultado.innerHTML = `TOKEN: ${token.token}`
        }

    } catch (error) {
        console.error(error)


    }




}

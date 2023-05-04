const btnEnviar = document.querySelector('#enviar')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const divResultado = document.querySelector('#resultado')
//const divToken = document.getElementById('token')



btnEnviar.addEventListener('click', () => {

    const usuario = dadosDoFormulario()
    // capturar os dados do formulário
    //const usuario = getDadosForm()
    // enviar os dados para api
    enviarDadosParaAPI(usuario)
    //divToken.innerHTML = 'deu certo'


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
        const resposta = await fetch('https://pvd-cubos.vercel.app/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario),


        })


        if (resposta.status === 201) {
            const token = await resposta.json()

            localStorage.setItem('token', token.token)
            window.alert('Usuário logado com sucesso.')
            window.location.href = '../index.html'
        }




        if (resposta.status === 404) {
            divResultado.innerHTML = 'Email ou senha Invávidos!'
        }
        if (resposta.status === 400) {
            divResultado.innerHTML = `Usuário ou senha inválidos`
        }

        if (resposta.status === 201) {

            divResultado.innerHTML = `TOKEN: ${token.token}`
        }

        if (resposta.status === 302) {
            divResultado.innerHTML = `Email não tem formato válido ou \n
            senha menor que 3 caracteres!`
        }



    } catch (error) {
        console.error(error)


    }




}

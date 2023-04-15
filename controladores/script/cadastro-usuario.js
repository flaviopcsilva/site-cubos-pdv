
const btnEnviar = document.querySelector('#enviar')
const divResultado = document.querySelector('#resposta')

btnEnviar.addEventListener('click', () => {
    // capturar os dados do formulário
    const usuario = getDadosForm()
    // enviar os dados para api
    enviarDadosParaAPI(usuario)
})

function getDadosForm() {
    const txtNome = document.querySelector('#nome')
    const txtEmail = document.querySelector('#email')
    const txtSenha = document.querySelector('#senha')

    if (txtNome.value === "" || txtEmail.value === "" ||
        txtSenha.value === "") {
        // window.alert('Todos os campos devem ser preenchidos.')

        divResultado.innerHTML = 'Todos os campos devem ser preenchidos.'

        txtNome.focus()



        console.log('campos vazios')

        return
    }

    const usuario = {
        nome: txtNome.value,
        email: txtEmail.value,
        senha: txtSenha.value
    }
    return usuario

}

async function enviarDadosParaAPI(usuario) {
    try {
        const resposta = await fetch('https://cubos-pdv.cyclic.app/usuario', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })

        if (resposta.status === 302) {
            divResultado.innerHTML = `O campo email precisa ter um formato válido
             ou senha contem menos de 5 caracteres`
        }

        if (resposta.status === 400) {
            const msg = await resposta.json()
            console.log('Erro ao adicionar curso', msg)
            // window.alert('Email já foi cadastrado para outro usuário.')
            divResultado.innerHTML = 'Email já foi cadastrado para outro usuário.'
        }
        if (resposta.status === 201) {
            limparCampos()
            window.alert('Cadastro efetuado com sucesso.')
            window.location.href = '../index.html'
        } else {
            const msg = await resposta.json()
            console.log('Erro ao adicionar curso', msg)
        }
    } catch (erro) {
        console.error(erro)
    }
}


function limparCampos() {
    document.querySelector('#nome').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#senha').value = ''
}


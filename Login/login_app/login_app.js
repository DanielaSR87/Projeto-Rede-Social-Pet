let btn = document.querySelector('.fa-eye')//Estou acessando o documento e atraves do queryselector adicionado a classe a minha variavel btn

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')/*Adicionei o evento de click a variavel btn, quando eu clicar faça alguma coisa..Criei uma arrow function e dentro dela criei uma 
    variavel onde eu vou pegar o que estiver dentro desse input de senha*/

    if(inputSenha.getAttribute('type') == 'password'){//Utilizei o getAttribute para pegar o tipo do meu inpur senha e se ele for do tipo password 
        inputSenha.setAttribute('type','text')//então vou convertelo para o tipo texto(get é pra pegar e set é pra colocar)
    } else {//senão faço exatamente o contrário
        inputSenha.setAttribute('type','password')  //se for do type texto, converto em password
    }
})











function entrar(){//Criei uma função entrar onde 
    let usuario = document.querySelector('#usuario')//criei uma variavel usuario que vai receber o que está no input usuario
    let usuarioLabel = document.querySelector('#usuarioLabel')

    let senha = document.querySelector('#senha')//criei uma variavel senha que vai receber o que está no input senha
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgErro = document.querySelector('#msgErro')//criei uma variavel msg que vai receber a msg erro caso ocorra
    let listaUsuarios = []//Criei uma variavel listaUsuarios que vai receber um array vazio

    let validarUsuario = {/*Criei um objeto com campos já pre-determinados, que são os campos que quero pegar do meu
        localstorage*/
        nome: "",
        user: "",
        senha: ""
    }

    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))/*lista de usuarios recebe a lista de usuarios 
    que estão na local storage*/ 

    listaUsuarios.forEach((item) => {//Esse for each vai varrer a minha lista de usuarios item por item 
       if(usuario.value == item.userCad && senha.value == item.senhaCad){/*valinha se usuario e senha são iguais ao da
        minha lista de usuários, se for igual entra no if e preenche o meu objeto*/
        validarUsuario = {
            nome: item.nomeCad,
            user: item.userCad,
            senha: item.senhaCad
        }
       }
    })

    if(usuario.value == validarUsuario.user && senha.value == validarUsuario.senha){
        window.location.href = "../Login/cadastro.html"
    } else {
        usuarioLabel.setAttribute('style','color:red')/*Troco a cor do texto do meu label para vermelho*/
        usuario.setAttribute('style','border-color:red')/*n funciona pois n tenho borda*/
        senhaLabel.setAttribute('style','color:red')/*Troco a cor do texro do meu label para vermelho*/
        senha.setAttribute('style','background-color:red')/*n funciona pois n tenho borda*/
        msgErro.setAttribute('style', 'display:block')/*Altera o atributo display para block paara que fique visivel, pois estava none*/
        msgErro.innerHTML = 'Usuário ou senha incorretos'/*Adiciona esse texto a mensagem de erro*/
        usuario.focus()//Retorna o cursor para o campo de usuário para que eu possa escrever de novo
    }

    /*Agora vou fazer um if para verificar se o usuário e a senha estão corretos, se estiverem 
    corretos eu vou realizar o login*/

}



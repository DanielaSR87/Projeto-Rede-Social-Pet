
let btn = document.querySelector('#verSenha')//Estou acessando o documento e atraves do queryselector adicionado a classe a minha variavel btn
let btnConfirm = document.querySelector('#confirmarSenha')//Estou acessando o documento e atraves do queryselector adicionado a classe a minha variavel btn


let nome = document.querySelector('#nome')//Criei variavel para chamar o campo de input nome
let labelNome = document.querySelector('#labelNome')//Criei variavel para chamar o campo de labelNome
let validNome = false /*Criei uam variavel booleana para validar se cada campo está com algo preenchido, que ja inicia 
com false que quer dizer que os campos já começam sem estar preenchidos*/



let usuario = document.querySelector('#usuario')//Criei variavel para chamar o campo de input usuario
let labelUsuario = document.querySelector('#labelUsuario')//Criei variavel para chamar o campo de labelusuario
let validUsuario = false /*Criei uam variavel booleana para validar se cada campo está com algo preenchido, que ja inicia 
com false que quer dizer que os campos já começam sem estar preenchidos*/



let senha = document.querySelector('#senha')//Criei variavel para chamar o campo de input senha
let labelSenha = document.querySelector('#labelSenha')//Criei variavel para chamar o campo de labelsenha
let validSenha = false /*Criei uam variavel booleana para validar se cada campo está com algo preenchido, que ja inicia 
com false que quer dizer que os campos já começam sem estar preenchidos*/


let confirmSenha = document.querySelector('#confirmSenha')//Criei variavel para chamar o campo de input confirmsenha
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')//Criei variavel para chamar o campo de labelconfirmsenha
let validConfirmSenha = false /*Criei uam variavel booleana para validar se cada campo está com algo preenchido, que ja inicia 
com false que quer dizer que os campos já começam sem estar preenchidos*/

let msgErroCadastro = document.querySelector('#msgErroCadastro')
let msgSucessoCadastro = document.querySelector('#msgSucessoCadastro')



//Por boa prática as variaveis ficam nas primeiras linhas, e os eventos nas demais linhas


nome.addEventListener('keyup', ()=>{//Adicionei um evento onde qndo eu tirar o meu dedo da tecla ele já faz uma validação
    if(nome.value.length <= 3){//se a qt de caracteres do meu campo nome for menor ou igual a 2...
        labelNome.setAttribute('style', 'color: red')//vou mudar meu a propriedade cor do meu atributo style da lebel nome para red
        labelNome.innerHTML = 'Nome *Insira no minímo 4 caracteres'//Altero o texto do meu label
        validNome = false//Mantenho a validação do nome como falso para não realizar o cadastro
    }else {
        labelNome.setAttribute('style', 'color: #f7b600')//mantenho a cor padrão 
        labelNome.innerHTML = 'Nome'//Mantenho o nome padrao do meu label
        validNome = true//Altero o valor da variavel para true para poder seguir com o cadastro/login
    }
})

usuario.addEventListener('keyup', ()=>{//Adicionei um evento onde qndo eu tirar o meu dedo da tecla ele já faz uma validação
    if(usuario.value.length <= 4){//se a qt de caracteres do meu campo nome for menor ou igual a 2...
        labelUsuario.setAttribute('style', 'color: red')//vou mudar meu a propriedade cor do meu atributo style da lebel nome para red
        labelUsuario.innerHTML = 'Usuário *Insira no minímo 5 caracteres'//Altero o texto do meu label
        validUsuario = false//Mantenho a validação do nome como falso para não realizar o cadastro
    }else {
        labelUsuario.setAttribute('style', 'color: #f7b600')//mantenho a cor padrão 
        labelUsuario.innerHTML = 'Usuário'//Mantenho o nome padrao do meu label
        validUsuario = true//Altero o valor da variavel para true para poder seguir com o cadastro/login
    }
})

senha.addEventListener('keyup', ()=>{//Adicionei um evento onde qndo eu tirar o meu dedo da tecla ele já faz uma validação
    if(senha.value.length <= 5){//se a qt de caracteres do meu campo nome for menor ou igual a 2...
        labelSenha.setAttribute('style', 'color: red')//vou mudar meu a propriedade cor do meu atributo style da lebel nome para red
        labelSenha.innerHTML = 'Senha *Insira no minímo 6 caracteres'//Altero o texto do meu label
        validSenha = false//Mantenho a validação do nome como falso para não realizar o cadastro
    }else {
        labelSenha.setAttribute('style', 'color: #f7b600')//mantenho a cor padrão 
        labelSenha.innerHTML = 'Senha'//Mantenho o nome padrao do meu label
        validSenha = true//Altero o valor da variavel para true para poder seguir com o cadastro/login
    }
})


confirmSenha.addEventListener('keyup', ()=>{//Adicionei um evento onde qndo eu tirar o meu dedo da tecla ele já faz uma validação
    if(senha.value != confirmSenha.value){//se o valor de senha não for igual ao valor digitado em confirm senha....
        labelConfirmSenha.setAttribute('style', 'color: red')//vou mudar meu a propriedade cor do meu atributo style da lebel nome para red
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senham não conferem'//Altero o texto do meu label
        validConfirmSenha = false//Mantenho a validação do nome como falso para não realizar o cadastro
    }else {//senão
        labelConfirmSenha.setAttribute('style', 'color: #f7b600')//mantenho a cor padrão 
        labelConfirmSenha.innerHTML = 'Confirmar Senha'//Mantenho o nome padrao do meu label
        validConfirmSenha = true//Altero o valor da variavel para true para poder seguir com o cadastro/login
    }
})













function cadastrar(){//Criei a função cadastrar
    if(validNome && validUsuario && validSenha && validConfirmSenha){/*não estou comparando pois ele já me retorna o 
    false direto, então vai cair direto no else*/

    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]')/*Criei a variavel de lista de usuários 
    se todos os campos forem validados corretamente. Ela vai receber esse json parse para transformarmos o que colocarmos
    dentro do local storage em json. Ou seja, pegue o item lista de usuários e se já existir alguma lista no local storage
    eu incremento essa lista, se não existir, em crio umarray vazio

    /*O localstorage é uma funcionalidade que existe em todos os navegadores q é como se fosse uma memoria local
    um banco de dados local do navegador, que fica lá até vc ou limpar manualmente esses dados, ou limpar historicos, 
    cookies, mesmo reiniciando o pc nao limpa*/
    listaUsuarios.push(//Vou incrementar a minha lista de usuários através de array de objetos
        {
           nomeCad: nome.value,//nomeCad é a variavel que acabei de criar que irá receber o valor digitado no input do campo nome
           userCad: usuario.value,
           senhaCad: senha.value
        }
    )
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios))/*Cria um novo registro lá no meu local storage
        com 2 parametros..o nome do meu campo e o que eu quero colocar dentro desse campo, ou seja os usuários que 
        cadastrar no array*/


        setTimeout(()=>{
            window.location.href = 'file:///C:/Users/rudie/OneDrive/%C3%81rea%20de%20Trabalho/FullStack/Curso%20Full%20Stack/JAVASCRIPT/projeto-tera-main/Login/loginNovo.html'
        }, 3000)/*Neste comando, após realizar um cadastro com sucesso, quero que mude a localização da minha página e 
        volte para a pagina de login através do comando window.....
        O comando setTimeOut cria um delay de 3000 milisegundos(3 segundos) para que de tempo de ver a mensagem q o 
        usuário foi cadastrado com sucesso*/



        msgSucessoCadastro.setAttribute('style','display: block')/*Eu quero que se o cadastro de certo, o estilo de display que ele é mostrado na tela seja block*/ 
        msgSucessoCadastro.innerHTML = '<strong>Usuário cadastrado com sucesso!!...</strong>'/*Se a validação estiver correta..Insiro o 
        texto da minha div..*/
        msgErroCadastro.setAttribute('style','display: none')/*Se a validação estiver correta..mantenho a div de erro  
        texto da minha div..*/
        msgErroCadastro.innerHTML = ''/*Se a validação estiver correta..mantenho a div de erro  
        com o texto vazio..*/
    } else {
        msgErroCadastro.setAttribute('style','display: block')
        msgErroCadastro.innerHTML = '<strong>Por favor, preencha todos os campos corretamente...</strong>'
        msgSucessoCadastro.innerHTML = ''
        msgSucessoCadastro.setAttribute('style','display:none')
    }
}


btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')/*Adicionei o evento de click a variavel btn, quando eu clicar faça alguma coisa..Criei uma arrow function e dentro dela criei uma 
    variavel onde eu vou pegar o que estiver dentro desse input de senha*/

    if(inputSenha.getAttribute('type') == 'password'){//Utilizei o getAttribute para pegar o tipo do meu inpur senha e se ele for do tipo password 
        inputSenha.setAttribute('type','text')//então vou convertelo para o tipo texto(get é pra pegar e set é pra colocar)
    } else {//senão faço exatamente o contrário
        inputSenha.setAttribute('type','password')  //se for do type texto, converto em password
    }
})




btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')/*Adicionei o evento de click a variavel btn, quando eu clicar faça alguma coisa..Criei uma arrow function e dentro dela criei uma 
    variavel onde eu vou pegar o que estiver dentro desse input de senha*/

    if(inputConfirmSenha.getAttribute('type') == 'password'){//Utilizei o getAttribute para pegar o tipo do meu inpur senha e se ele for do tipo password 
        inputConfirmSenha.setAttribute('type','text')//então vou convertelo para o tipo texto(get é pra pegar e set é pra colocar)
    } else {//senão faço exatamente o contrário
        inputConfirmSenha.setAttribute('type','password')  //se for do type texto, converto em password
    }
})



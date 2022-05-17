function openList1() {
    var lista = document.getElementById("ulist");

    if (lista.style.display == "none") {
        lista.style.display = "block";
        weather.style.display = "none";
    } else {
        lista.style.display = "none";
        weather.style.display = "block";
    }
    let text = document.getElementById("h3perfil").innerText
    if (text == "▸  Perfil") {
        text = "▾  Perfil"

    } else {
        text = "▸  Perfil"
    }
    document.getElementById("h3perfil").innerText = text;


}

function openList2() {
    var list = document.getElementById("uladocao");

    if (list.style.display == "none") {
        list.style.display = "block";
        weather.style.display = "none";
    } else {
        list.style.display = "none";
        weather.style.display = "block";
    }
    let text = document.getElementById("adocao").innerText
    if (text == "▸  Adoção de animais") {
        text = "▾  Adoção de animais"
    } else {
        text = "▸  Adoção de animais"
    }
    document.getElementById("adocao").innerText = text;


}



$("#fotoperfil").click(function (e) {
    $("#imageUpload").click();
});

let file = document.getElementById("imageUpload")
let img = document.getElementById("fotoperfil")

file.addEventListener('change', function () {
    const choosedFile = this.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(choosedFile);
    if (choosedFile) {
        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
            img.style.height = "100px";
            img.style.width = "100px";
        });

    }
})

$('.fotobicho').click(function (e) {
    let fotobicho = document.getElementsByClassName('fotobicho')
    let botaobicho = document.getElementsByClassName('botaobicho')
    for (i = 0; i < fotobicho.length; i++) {
        botaobicho[i].click()
        botaobicho[i].addEventListener('change', function () {
            const chosenPic = this.files[0]
            const reader2 = new FileReader()
            reader2.readAsDataURL(chosenPic)
            if (chosenPic) {
                reader2.addEventListener('load', function () {
                    fotobicho[i].setAttribute('src', reader2.result)
                    fotobicho[i].style.height = "60px";
                    fotobicho[i].style.width = "60px";
                })

                Event.stopPropagation();
            }

        })
        Event.stopPropagation();
        Event.stopPropagation();
    }
})

function abrirDados() {
    let list = document.getElementById('seusbichos')
    let source = document.getElementById('setaesquerda')
    if (list.style.display == "none") {
        list.style.display = "flex";
        source.src = "./arrow-204-16.png";
    } else {
        list.style.display = "none";
        source.src = "./arrow-30-16.png";
    }

    let hr = document.getElementById("hroculto")
    if (hr.style.visibility == "hidden") {
        hr.style.visibility = "visible";
    } else {
        hr.style.visibility = "hidden";
    }
}

function addPet() {
    let animais = document.getElementById('tabela-animais')
    let animal = document.createElement('tr')
    animal.classList.add('umanimal')

    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')

    td1.classList.add('clique')

    let tipoAnimal = document.createElement('input')
    tipoAnimal.setAttribute('list', 'tipo-de-animal')
    td1.appendChild(tipoAnimal)

    let nomeAnimal = document.createElement('input')
    nomeAnimal.setAttribute('type', 'text')
    nomeAnimal.classList.add('animalNome')

    td2.appendChild(nomeAnimal)

    let lapinho2 = document.createElement('img')
    lapinho2.setAttribute('src', 'pencil-16.png')
    lapinho2.classList.add('lapinho2')

    td2.appendChild(lapinho2)

    let alterarAnimal = document.createElement('button')
    alterarAnimal.classList.add('alterarAnimal')
    alterarAnimal.setAttribute('type', 'submit')
    alterarAnimal.innerHTML = "Alterar"

    td2.appendChild(alterarAnimal)

    let botaoadd = document.createElement('button')
    botaoadd.setAttribute('type', 'button')
    botaoadd.setAttribute('onclick', '')
    botaoadd.classList.add('botaoadd')


    let maisinho = document.createElement('img')
    maisinho.setAttribute('src', 'plus-16.png')
    maisinho.classList.add('maisinho')
    maisinho.addEventListener('click', function () {
        let classMaisinho = document.getElementsByClassName('maisinho')
        console.log('oie!')
        for (i = 0; i < classMaisinho.length; i++) {


            let fotonomeanimais = document.getElementById('fotonomeanimais')

            let novoanimal = document.createElement('div')
            novoanimal.classList.add('cadafotoenome')
            novoanimal.classList.add('BICHO')

            let newid = Math.floor(Math.random() * 10000)

            let umanimal = document.getElementsByClassName('umanimal')
            //resolver problema com índices (o índice do animal tá sempre ficando o mesmo)
            umanimal[i + 3].setAttribute('id', newid)

            novoanimal.setAttribute('id', newid)

            let novafoto = document.createElement('img')
            novafoto.classList.add('fotobicho')
            novafoto.setAttribute('src', 'cameraCinza.jpg')


            let nomeani = document.createElement('p')
            nomeani.classList.add('bichop')
            let nomedoanimal = document.getElementsByClassName('animalNome')
            nomeani.innerText = nomedoanimal[i].value

            let botaobicho = document.createElement('input')
            botaobicho.classList.add('botaobicho')
            botaobicho.setAttribute('type', 'file')
            botaobicho.setAttribute('name', 'profile-photo')
            botaobicho.setAttribute('placeholder', 'Photo')
            botaobicho.setAttribute('required', '')
            botaobicho.setAttribute('capture', '')

            novoanimal.append(novafoto, nomeani, botaobicho)
            fotonomeanimais.appendChild(novoanimal)
            maisinho.remove()
        }
    })

    botaoadd.appendChild(maisinho)

    td3.appendChild(botaoadd)

    let xis = document.createElement('img')
    xis.setAttribute('src', 'x-mark-16.png')
    xis.classList.add('xis')
    xis.addEventListener('click', function (e) {
        const cadastroId = e.currentTarget.parentNode.parentNode.id;
        const trToBeRemoved = e.currentTarget.parentNode.parentNode;
        trToBeRemoved.remove()
        const tagToBeRemoved = document.getElementById(cadastroId)
        tagToBeRemoved.remove()
    })

    td4.appendChild(xis)

    animal.append(td1, td2, td3, td4)

    let tbody = document.querySelector('tbody')
    tbody.appendChild(animal)

}

$('.xis').click(function (e) {
    const cadastroId = e.currentTarget.parentNode.parentNode.id;
    const trToBeRemoved = e.currentTarget.parentNode.parentNode;
    trToBeRemoved.remove()
    const tagToBeRemoved = document.getElementById(cadastroId)
    tagToBeRemoved.remove()
})


$('document').ready(function (e) {
    document.getElementById("postagensUsuario").innerHTML =
        '<object type="text/html" style="height:100%" width="100%" data="../Feed/feed.html"></object>';

})

function alterarNome() {
    let novoNome = document.getElementById('novoNome').value
    document.getElementById('nomeAtual').innerHTML = novoNome
}

$('.alterarAnimal').click(function (e) {
    let alterarAnimal = document.getElementsByClassName('alterarAnimal')
    for (i = 0; i < alterarAnimal.length; i++) {
        let nomeAnimal = document.getElementsByClassName('nomeAnimal')[i].value
        document.getElementsByClassName('bichop')[i].innerHTML = nomeAnimal

    }
})

$('.lapinho2').click(function () {
    let lapinho2 = document.getElementsByClassName('lapinho2')
    for (i = 0; i < lapinho2.length; i++) {
        let nomeAnimal = document.getElementsByClassName('nomeAnimal')
        nomeAnimal[i].click()
        console.log('HEYA')
    }
})

//refazendo

let paw = document.getElementById('paw')
let adocaoAnimais = document.getElementById('adocaoAnimais')
adocaoAnimais.focus(function () {
    paw.setAttribute('src', 'paw-16-white.png')
})
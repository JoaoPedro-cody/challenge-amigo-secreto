let amigos = [];
let nome = document.querySelector('input');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


function adicionarAmigo(){
    if (nome.value.trim() === '' ){
        alert('Por Favor, insira um nome');
    }
    else{
        amigos.push(nome.value.trim());
        nome.value = '';
        atualizarAmigos();
    }
}

function atualizarAmigos(){
    lista.innerHTML = '';
    for (let amigo of amigos){
        const itemsLista = document.createElement('li');
        itemsLista.textContent = amigo;
        lista.appendChild(itemsLista);
    }
}

function  sortearAmigo(){

    if (amigos.length === 0 ){
        resultado.innerHTML = 'O Sorteio de nomes acabou';
    }
    else{
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        lista.innerHTML = '';
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[numeroSorteado]}`;
        console.log(numeroSorteado);

        let amigoSorteado = amigos[numeroSorteado];
        amigos.splice(numeroSorteado, 1);

    }

    console.log(amigos);
}


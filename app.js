//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value;
  if (nomeAmigo === '') {
    alert("Por favor, insira um nome")
    return;
  }
    amigos.push(nomeAmigo);
    atualizaLista();
    document.getElementById('amigo').value = '';
}

function atualizaLista() {
  let list = document.getElementById("listaAmigos");
  list.innerHTML = "";

  for(let i = 0; i < amigos.length; i += 1) {
    let item = document.createElement('li');
    item.textContent = amigos[i];
    list.appendChild(item);
  }
}

function sortearAmigo() {
  if(amigos.length === 0) {
    alert("Adicione um amigo");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}

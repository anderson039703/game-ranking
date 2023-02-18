var jogador = []

function carregarPagina(){
    var tabela = document.querySelector("tbody");

    var elemento1 =""
    for(var i=0; i < jogador.length;i++){
        elemento1 += "<tr><td>"+jogador[i].nome+"</td>"
        elemento1 +="<td>"+jogador[i].vitorias+"</td>"
        elemento1 +="<td>"+jogador[i].empates+"</td>"
        elemento1 +="<td>"+jogador[i].derrotas+"</td>"
        elemento1 +="<td>"+jogador[i].pontos+"</td>"
        elemento1 +="<td><button onClick='adicionarVitoria("+i+")'>Vitória</button>"
        elemento1 += "<button onClick='adicionarEmpate("+i+")'>Empate</button>"
        elemento1 += "<button onClick='adicionarDerrota("+i+")'>Derrota</button>"
        elemento1 += "<button onClick='deletarJogador("+i+")'>Exluir Jogador</button></td>"
    }
    tabela.innerHTML = elemento1
}

function adicionarJogador(){
    play = document.getElementById("jogador").value
    jogador.push({nome:play,vitorias:0,empates:0,derrotas:0,pontos:0})
    carregarPagina()
    document.getElementById("jogador").value = ""
}

function ordenaçãoJogador(){
    jogador.sort(function(a,b) {
        return a.pontos > b.pontos ? -1 : a.pontos < b.pontos ? 1 : 0;
    });
}

function adicionarVitoria(i){
    jogador[i].vitorias++
    calcularPontos(i)
    carregarPagina()
}

function adicionarEmpate(i){
    jogador[i].empates++
    calcularPontos(i)
    carregarPagina()
}

function adicionarDerrota(i){
    jogador[i].derrotas++
    jogador[i].pontos = 0
    calcularPontos(i)
    carregarPagina()
}

function calcularPontos(i){
    jogador[i].pontos = (jogador[i].vitorias * 3) + jogador[i].empates
    
    ordenaçãoJogador();
}

function deletarJogador(i){
    jogador.splice(i, 1)
    carregarPagina()
}
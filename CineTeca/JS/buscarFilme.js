function buscarFilme() {

    let titulo = document.getElementById("titulo").value;

    if (titulo == "") {

        alert("Digite o nome de um filme.");
        return;

    }

//API
    document.getElementById("nomeFilme").innerHTML = titulo;
    document.getElementById("ano").innerHTML = "";
    document.getElementById("diretor").innerHTML = "";
    document.getElementById("sinopse").innerHTML = "";

}

// Salva a avaliação
function salvarFilme() {

    let titulo = document.getElementById("nomeFilme").innerHTML;
    let nota = document.getElementById("nota").value;
    let comentario = document.getElementById("comentario").value;

    if (nota == "" || comentario == "") {

        alert("Preencha todos os campos.");
        return;

    }

    // Verifica se o filme já foi salvo
    let existe = listaFilmes.some(function (filme) {

        return filme.titulo.toLowerCase() == titulo.toLowerCase();

    });

    if (existe) {

        alert("Este filme já foi avaliado.");
        return;

    }

    // Cria o objeto
    let filme = {

        titulo: titulo,
        nota: nota,
        comentario: comentario

    };

    // Adiciona ao vetor
    listaFilmes.push(filme);

    // Salva no localStorage
    localStorage.setItem("filmes", JSON.stringify(listaFilmes));

    alert("Avaliação salva com sucesso!");

}
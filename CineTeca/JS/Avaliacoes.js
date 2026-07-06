// Recupera os filmes salvos
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Mostra os filmes na tela
mostrarAvaliacoes();

function mostrarAvaliacoes() {

    let lista = document.getElementById("listaAvaliacoes");

    lista.innerHTML = "";

    if (favoritos.length == 0) {

        lista.innerHTML = "<p>Nenhum filme favoritado ainda.</p>";

        return;

    }

    for (let i = 0; i < favoritos.length; i++) {

        // Se ainda não existir nota, deixa como 1
        if (favoritos[i].nota == undefined) {

            favoritos[i].nota = "1";

        }

        lista.innerHTML +=

        "<div class='card mb-3'>" +

            "<div class='card-body'>" +

                "<h4>" + favoritos[i].titulo + "</h4>" +

                "<p>" + favoritos[i].ano + "</p>" +

                "<p>" + favoritos[i].diretor + "</p>" +

                "<img src='" + favoritos[i].poster + "' width='200'>" +

                "<br><br>" +

                "<label><strong>Sua nota:</strong></label>" +

                "<select id='nota" + i + "' class='form-select'>" +

                    "<option value='1'" + (favoritos[i].nota == "1" ? " selected" : "") + ">⭐ 1</option>" +

                    "<option value='2'" + (favoritos[i].nota == "2" ? " selected" : "") + ">⭐⭐ 2</option>" +

                    "<option value='3'" + (favoritos[i].nota == "3" ? " selected" : "") + ">⭐⭐⭐ 3</option>" +

                    "<option value='4'" + (favoritos[i].nota == "4" ? " selected" : "") + ">⭐⭐⭐⭐ 4</option>" +

                    "<option value='5'" + (favoritos[i].nota == "5" ? " selected" : "") + ">⭐⭐⭐⭐⭐ 5</option>" +

                "</select>" +

                "<br>" +

                "<button class='btn btn-success' onclick='salvarNota(" + i + ")'>" +
                "Salvar Nota" +
                "</button>" +

                "<br><br>" +

                "<button class='btn btn-warning' onclick='editarAvaliacao(" + i + ")'>" +
                "Editar" +
                "</button> " +

                "<button class='btn btn-danger' onclick='removerAvaliacao(" + i + ")'>" +
                "Excluir" +
                "</button>" +

            "</div>" +

        "</div>";

    }

}

function salvarNota(indice) {

    favoritos[indice].nota =
    document.getElementById("nota" + indice).value;

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

    alert("Nota salva com sucesso!");

}

function removerAvaliacao(indice) {

    let confirmar = confirm("Deseja remover este filme?");

    if (confirmar) {

        favoritos.splice(indice, 1);

        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

        mostrarAvaliacoes();

    }

}

function editarAvaliacao(indice) {

    alert("Editar avaliação do filme: " + favoritos[indice].titulo);

}
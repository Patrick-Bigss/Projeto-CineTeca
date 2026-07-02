// Salva a avaliação
function salvarFilme() {

    let titulo = document.getElementById("nomeFilme").innerHTML;
    let nota = document.getElementById("nota").value;
    let comentario = document.getElementById("comentario").value;

    if (nota == "" || comentario == "") {

        alert("Preencha todos os campos.");
        return;

    }

    // Cria o objeto
    let filme = {

        titulo: titulo,
        nota: nota,
        comentario: comentario

    };


    // Salva no localStorage
    localStorage.setItem("filmes", JSON.stringify(listaFilmes));

    alert("Avaliação salva com sucesso!");

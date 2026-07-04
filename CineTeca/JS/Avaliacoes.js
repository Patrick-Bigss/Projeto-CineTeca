 let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

mostrarAvaliacoes();

function mostrarAvaliacoes() {

    let lista = document.getElementById("listaAvaliacoes");

console.log(lista);

    let lista = document.getElementById("listaAvaliacoes");

    if (favoritos.length == 0) {

        lista.innerHTML = "<p>Nenhum filme favoritado ainda.</p>";

        return;

    }

    lista.innerHTML = `

        <div class="card">

            <div class="card-body">

                <h4>${favoritos[0].titulo}</h4>

                <p>${favoritos[0].ano}</p>

                <p>${favoritos[0].diretor}</p>

                <img src="${favoritos[0].poster}" width="200">

                <br><br>

                <button
                    class="btn btn-warning"
                    onclick="editarAvaliacao()"> Editar</button>

                <button
                    class="btn btn-danger" onclick="removerAvaliacao()"> Excluir </button>

            </div>

        </div>

    `;

}

function removerAvaliacao(indice){

    favoritos.splice(indice,1);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    mostrarAvaliacoes();

}

function editarAvaliacao(indice){

    alert("Editar: " + favoritos[indice].titulo);


}
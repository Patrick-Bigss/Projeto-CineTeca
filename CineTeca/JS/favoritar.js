let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function adicionarFavorito(){

    let filme = {

        titulo: document.getElementById("nomeFilme").innerHTML,

        ano: document.getElementById("anoResultado").innerHTML,

        diretor: document.getElementById("diretor").innerHTML,

        sinopse: document.getElementById("sinopse").innerHTML,

        poster: document.getElementById("poster").src

    };

    let existe = favoritos.some(function(item){

    return item.titulo == filme.titulo;

});

if(existe){

    alert("Este filme já está favoritado.");

    return;


        // console.log(favoritos);
}

    favoritos.push(filme);

    localStorage.setItem(

        "favoritos", JSON.stringify(favoritos)

    );

    alert("Filme favoritado!!!");

}
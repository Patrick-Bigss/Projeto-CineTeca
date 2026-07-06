function resultado(titulo, ano, diretor, sinopse, poster){
    /*
    let sessaoLista = document.getElementById("dadosfilmes");
    // let cardFilme = document.createElement("div");

    cardFilme.style.border = "1px solid #ccc";
    cardFilme.style.padding = "10px";
    cardFilme.style.margin = "10px 0";
    cardFilme.style.borderRadius = "5px";

    //alert(console.log(localStorage.key(i-1).nome));

    inserirImagem(poster);
    
    cardFilme.innerHTML = 
    "<p><strong>Título:</strong> " + titulo + "</p>" +
    "<p><strong>Ano:</strong> " + ano + "</p>" +
    "<p><strong>Escritor:</strong> " + escritor + "</p>";
    //"<div id='imagem'></div>"

    sessaoLista.appendChild(cardFilme);
    */

    document.getElementById("nomeFilme").innerHTML = titulo;

    document.getElementById("anoResultado").innerHTML =
        "Ano: " + ano;

    document.getElementById("diretor").innerHTML =
        "Diretor: " + diretor;

    document.getElementById("sinopse").innerHTML =
        "Sinopse: " + sinopse;

    document.getElementById("poster").src =
        poster;
        
}
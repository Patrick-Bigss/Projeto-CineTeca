function editarAvaliacao(){

    alert("Função para editar avaliação.");

}

function removerAvaliacao(){

    let confirmar = confirm("Deseja excluir esta avaliação?");

    if(confirmar){

        alert("Avaliação removida.");

    }

}


// Salva no Local Storage (persistencia?)
    // localStorage.setItem("avaliacoes", JSON.stringify(listaAvaliacoes));

    // alert("Avaliação salva com sucesso!");

    // function salvarNome(){
    // let valorDigitado = document.getElementById("texto-inserido").value;
    // let idadeDigitada = 22

    // let objetoNome = { 
    //     nome: filmeAssistido,
    //     Nota: notaDigitada
    // };

    // let textoJSON = JSON.stringify(objetoNome)
    // localStorage.setItem("dadoNome", textoJSON)

    // document.getElementById("nome-salvo").innerText = valorDigitado;
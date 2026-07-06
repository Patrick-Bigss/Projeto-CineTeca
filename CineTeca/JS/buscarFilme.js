let qtdBuscasRealizadas = 0

function buscarFilme(){

    let chave = "ae81a959";

    let titulo = document.getElementById("titulo").value;
    let ano = document.getElementById("ano").value;

    if (titulo == "") {

        alert("Digite o nome de um filme.");
        return;
    }
    
    fetch(`https://www.omdbapi.com/?apikey=${chave}&t=${titulo}&y=${ano}`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.error){
                alert("Titulo não encontrado");
                return;
            }
            
            //tratarErroUndefined(dados.Title);
            
            console.log("Titulo: ", dados.Title);
            console.log("Ano: ", dados.Year);
            console.log("Writer: ", dados.Writer);
            console.log("Poster: ", dados.Poster);

            // Preenche os elementos da página
        
        
            tratarErroBusca(dados.Title, dados.Year, dados.Director, dados.Plot, dados.Poster);
            qtdBuscasRealizadas++;
            apresentarConsultasFeitas(qtdBuscasRealizadas);

    });
}
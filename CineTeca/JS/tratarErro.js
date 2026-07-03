function tratarErroBusca(titulo, ano, escritor, poster){
    /*
    Verifica se o título na busca está undefined, outros erros relacioandos
    a busca podem ser incorporados aqui
    */
     try {
        if(titulo===undefined){
            alert("título nao encontrado")
            throw new Error("Esse filme não existe!")

        //Como escrever esse lançamento de erro?
        // elseif(poster==404){
        //     alert("Filme sem imagem");
        //     throw new Error("Esse filme não tem imagem!")
        //}
        }else{
            resultado(titulo, ano, escritor, poster);            
        }
        
    } catch (error) {
        console.error("Erro encontrado: " + error.message);
    }
}

function tratarListaDuplicada(){
    /* 
    Verifica se algum filme da lista do usuario já foi selecionado
    */
    try {
        
    } catch (error) {
        
    }
}


/*
Um portal de entretenimento focado na busca de obras cinematográficas e 
criação de uma lista personalizada de avaliações.

Consumo de API: Integração com a OMDb API para buscar filmes por título, 
exibindo pôster, ano de lançamento, diretor e sinopse.

Tratamento de Exceções: Captura de erros de requisição caso o 
título não seja encontrado ou a chave da API atinja o limite. 
Tratar o retorno vazio de forma graciosa.

patrick
Formulários: Sistema de avaliação do filme selecionado, onde o usuário 
insere uma nota (1 a 5 estrelas) e escreve uma crítica/resenha.

Persistência: Gravação dos filmes assistidos juntamente com as 
resenhas e notas estruturadas no localStorage.

Lógica de Programação: Verificação para impedir a duplicação do mesmo 
filme na lista de favoritos e ordenação dos filmes por nota mais alta.

patrick
Estrutura de Páginas: 
1.Página de Busca (Pesquisa e exibição de resultados) e 
2.Página de Avaliações (Exibição do catálogo pessoal do usuário).

*/
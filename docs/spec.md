🛠️ Especificação Técnica (Tech Spec) - PokéDeck Builder
Este documento detalha a arquitetura técnica, o modelo de dados e os contratos de API (pública e via JSON Server) necessários para o funcionamento do ecossistema PokéDeck Builder.

1. Modelo de Dados (Diagrama ER)
O diagrama abaixo representa a estrutura do nosso banco de dados local (db.json) e como as informações de usuários e seus decks personalizados são relacionadas.

Snippet de código
erDiagram
    TREINADOR ||--o{ DECK : "gerencia"
    
    TREINADOR {
        string id PK "Gerado automaticamente"
        string nome
        string email "Usado para o login"
        string senha
    }

    DECK {
        string id PK "Gerado automaticamente"
        string treinadorId FK "Vínculo com o Treinador"
        string pokemonId "ID da carta na API (ex: lp1-1)"
        string nomePokemon "Nome da carta"
        string imageUrl "Link da imagem da carta"
        string dataAdicao "Formato ISO (YYYY-MM-DD)"
    }
2. Dicionário de Dados
Explicação das entidades principais que serão manipuladas pelo JSON Server:

Treinadores (Users): Armazena os dados de perfil e autenticação.

id: Identificador único (String/Hash).

email: Chave de acesso única para login.

senha: String para validação de acesso.

Decks (Cards): Registra quais cartas pertencem a qual usuário.

treinadorId: Chave estrangeira que vincula a carta ao seu dono (padrão de aninhamento do JSON Server).

pokemonId: O ID oficial da carta vindo da Pokémon TCG API. Isso permite que, ao carregar o deck, possamos buscar informações atualizadas se necessário.

imageUrl: Cache da imagem para carregamento rápido da galeria do usuário.

3. Rotas da API

# 🛠️ Especificação Técnica (Tech Spec) - PokéDeck Builder

Este documento descreve o modelo de dados da aplicação necessários para o funcionamento do ecossistema PokéDeck Builder.

## 1. Modelo de Dados (Diagrama ER)

Abaixo está o Diagrama Entidade-Relacionamento (DER) que representa a estrutura do nosso "banco de dados" (`db.json`) e como as informações se conectam.

```mermaid
erDiagram
    TREINADOR ||--o{ DECK : "possui"
    DECK ||--o{ DECK_CARDS : "contém"
    
    TREINADOR {
        string id PK "ID único"
        string nome
        string email "Login"
        string senha
    }

    DECK {
        string id PK "ID do Deck"
        string treinadorId FK "Dono do deck"
        string nome_deck "Ex: Meus Favoritos"
    }

    DECK_CARDS {
        string id PK "ID do item no banco local"
        string deckId FK "A qual deck pertence"
        string pokemonId "ID oficial da API (ex: swsh1-1)"
        string nomePokemon "Nome vindo da API"
        string imageUrl "URL da imagem vinda da API"
    }

## 2. Dicionário de Dados

Breve explicação das tabelas que compõem o banco de dados dinâmico (`db.json`):

* **Treinadores:** Armazena as informações de perfil e credenciais de acesso para autenticação.
    * **id:** Identificador único gerado automaticamente pelo JSON Server (String ou Hash).
    * **nome:** Nome completo do treinador.
    * **email:** Chave de acesso única, utilizada para realizar o Login e identificar o usuário.
    * **senha:** String para validação de acesso ao painel privado.
* **Decks:** Define as coleções ou agrupamentos de cartas criados pelo treinador.
    * **id:** Identificador único do deck gerado pelo JSON Server.
    * **treinadorId:** Chave estrangeira (FK) que vincula o deck ao seu dono. **Regra de Negócio:** Um deck só pode ser visualizado ou editado pelo treinador que o criou.
    * **nome_deck:** Título personalizado dado pelo usuário (ex: "Estratégia Fogo", "Favoritos").
* **Deck_Cards:** Registra cada instância de carta salva dentro de um deck específico. Os dados aqui são oriundos da API Pública.
    * **id:** Identificador único do item no banco local.
    * **deckId:** Chave estrangeira (FK) que vincula a carta ao deck correspondente.
    * **pokemonId:** O ID oficial da carta vindo da Pokémon TCG API (ex: `swsh1-1`). Serve como referência para consultas detalhadas na API externa.
    * **nomePokemon:** Cópia do nome da carta (armazenado localmente como cache para exibição rápida na listagem).
    * **imageUrl:** URL da imagem da carta vinda da API pública, persistida localmente para otimizar o carregamento da galeria do usuário.

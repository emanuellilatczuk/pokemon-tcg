# 🛠️ Especificação Técnica (Tech Spec) - PokéDeck Builder

Este documento detalha a arquitetura técnica, o modelo de dados e os contratos de API (pública e via JSON Server) necessários para o funcionamento do ecossistema PokéDeck Builder.

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
        string id PK "ID do item"
        string deckId FK "A qual deck pertence"
        string pokemonId "ID da API (ex: swsh1-1)"
        string nomePokemon
        string imageUrl
    }

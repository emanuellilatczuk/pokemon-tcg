# 🛠️ Especificação Técnica (Tech Spec) - PokéDeck Builder

Este documento detalha a arquitetura técnica, o modelo de dados e os contratos de API (pública e via JSON Server) necessários para o funcionamento do ecossistema PokéDeck Builder.

## 1. Modelo de Dados (Diagrama ER)

Abaixo está o Diagrama Entidade-Relacionamento (DER) que representa a estrutura do nosso "banco de dados" (`db.json`) e como as informações se conectam.

```mermaid
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
        string treinadorId FK "Dono do deck"
        string nome_deck "Ex: Estratégia Fogo"
    }

    DECK_CARDS {
        string id PK
        string deckId FK "Vínculo com o Deck específico"
        string pokemonId "ID da API (ex: lp1-1)"
        string nomePokemon
        string imageUrl
    }

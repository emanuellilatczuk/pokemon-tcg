# 🛠️ Especificação Técnica (Tech Spec) - PokeDeck Studio

Este documento descreve o modelo de dados da aplicação necessários para o funcionamento do ecossistema PokeDeck Studio.

## 1. Modelo de Dados (Diagrama ER)

Abaixo está o Diagrama Entidade-Relacionamento (DER) que representa a estrutura do "banco de dados" (`db.json`) e como as informações se conectam.

```mermaid
erDiagram
    TRAINER ||--o{ DECK : "possui"
    DECK ||--o{ DECK_CARDS : "contém"
    
    TRAINER {
        string id PK "ID único"
        string name
        string email "Login"
        string password
    }

    DECK {
        string id PK "ID do Deck"
        string trainer_id FK "Dono do deck"
        string deck_name "Ex: Meus Favoritos"
    }

    DECK_CARDS {
        string id PK "ID do item no banco local"
        string deck_id FK "A qual deck pertence"
        string card_id "ID oficial da API"
        string card_name "Nome vindo da API"
        string image_url "URL da imagem vinda da API"
    }
```
## 2. Dicionário de Dados

Breve explicação das tabelas que compõem o banco de dados:

* **Trainers::** Armazena as informações de perfil e credenciais de acesso para autenticação.
    * **id:** Identificador único gerado automaticamente pelo JSON Server (String ou Hash).
    * **name:** Nome completo do treinador.
    * **email:** Chave de acesso única, utilizada para realizar o Login e identificar o usuário.
    * **password:** String para validação de acesso ao painel privado.
* **Decks:** Define as coleções ou agrupamentos de cartas criados pelo treinador.
    * **id:** Identificador único do deck gerado pelo JSON Server.
    * **trainer_id::** Chave estrangeira (FK) que vincula o deck ao seu dono. **Regra de Negócio:** Um deck só pode ser editado pelo treinador que o criou.
    * **deck_name:** Título personalizado dado pelo usuário (ex: "Estratégia Fogo", "Favoritos").
* **Deck_Cards:** Registra cada instância de carta salva dentro de um deck específico. Os dados aqui são oriundos da API Pública.
    * **id:** Identificador único do item no banco local.
    * **deck_id:** Chave estrangeira (FK) que vincula a carta ao deck correspondente.
    * **card_id:** O ID oficial da carta vindo da Pokémon TCG API. Serve como referência para consultas detalhadas na API externa.
    * **card_name:** Cópia do nome da carta (armazenado localmente como cache para exibição rápida na listagem).
    * **image_url:** URL da imagem da carta vinda da API pública, persistida localmente para otimizar o carregamento da galeria do usuário.
 
## 3. Especificação Técnica
**Framework de Estilização**
    * Tecnologia: Bootstrap
    * Versão: v5.3.3
    * Método de Implementação: Via CDN (ou via NPM, se estiver usando Node.js)

**Fonte de Dados (API)**
    * API: Pokémon TCG API
    * Versão da API: v2 
    * Endpoint Base: https://api.pokemontcg.io/v2/
    * Estrutura de Dados: JSON estruturado.

# 📄 Product Requirements Document (PRD) - PokéDeck Builder

## 1. Visão Geral e Objetivo

O **PokéDeck Builder** é uma aplicação web didática que utiliza a API pública de Pokémon TCG para permitir a exploração de cartas colecionáveis e a simulação de montagem de decks personalizados.

**O grande diferencial (Regra de Negócio Principal):** Diferente de uma enciclopédia estática, o sistema foca na **experiência de gerenciamento**. O usuário pode buscar cartas em tempo real e "capturá-las" para o seu deck digital. O sistema utiliza persistência de dados (via JSON Server ou Web Storage) para garantir que a coleção do treinador seja mantida entre as sessões, simulando um ambiente real de coleção.

## 2. Atores do Sistema

- **Visitante:** Usuário não autenticado que acessa a landing page para explorar o catálogo geral de cartas.
- **Treinador (Cliente):** Usuário autenticado que possui permissão para salvar cartas, criar decks e gerenciar sua coleção pessoal.
- **PokeAPI (Sistema Externo):** Provedor de dados oficial que fornece as imagens, atributos técnicos e raridades das cartas.

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP (Minimum Viable Product), organizadas por épicos.

### 👤 Épico 1: Autenticação e Perfil do Treinador

- **US01 - Cadastro de Treinador:** Como um Visitante, quero preencher um formulário (Nome, E-mail, Senha) para criar minha conta de treinador.
  - *Critérios de Aceitação:* O e-mail deve ser válido; todos os campos são obrigatórios; os dados devem ser persistidos para permitir logins futuros.
- **US02 - Acesso ao Sistema (Login):** Como um Treinador, quero inserir meu e-mail e senha para acessar meu painel de decks salvos.

### 🃏 Épico 2: Exploração e Descoberta

- **US03 - Visualização do Catálogo:** Como um usuário, quero visualizar uma grade de cartas Pokémon carregadas dinamicamente da API.
- **US04 - Busca por Nome:** Como um usuário, quero digitar o nome de um Pokémon em um campo de busca para encontrar cartas específicas rapidamente.
- **US05 - Filtros por Tipo:** Como um usuário, quero filtrar as cartas por tipo (ex: Fogo, Água, Psíquico) para facilitar a montagem de decks temáticos.
  - *Critérios de Aceitação:* Os filtros devem disparar novas requisições à API oficial.

### 🗃️ Épico 3: Gerenciamento da Coleção (Deck)

- **US06 - Adicionar ao Deck:** Como um Treinador logado, quero clicar em um botão nas cartas do catálogo para adicioná-las à minha coleção pessoal.
  - *Critérios de Aceitação:* O sistema deve registrar a data da adição e vincular a carta ao ID do treinador logado no `db.json`.
- **US07 - Visualizar Meu Deck:** Como um Treinador, quero uma tela exclusiva que exiba apenas as cartas que eu selecionei, funcionando como um "extrato" da minha coleção.
- **US08 - Remover da Coleção:** Como um Treinador, quero poder remover uma carta do meu deck caso decida mudar minha estratégia.
  - *Critérios de Aceitação:* A remoção deve refletir instantaneamente na interface e ser atualizada no banco de dados fake.

---

# 📄 Product Requirements Document (PRD) - PokéDeck Builder

## 1. Visão Geral e Objetivo

O **PokéDeck Builder** é uma aplicação web que utiliza a API pública de Pokémon TCG para permitir a exploração de cartas colecionáveis e a simulação de montagem de decks personalizados.

**Diferencial:** Diferente de uma enciclopédia estática, o sistema foca na **experiência de gerenciamento**. O usuário pode buscar cartas em tempo real e "capturá-las" para o seu deck digital. O sistema utiliza persistência de dados (via JSON Server ou Web Storage) para garantir que a coleção do treinador seja mantida entre as sessões, simulando um ambiente real de coleção.

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

### 🗃️ Épico 3: Gerenciamento de Múltiplos Decks e Coleções 

- **US06 - Criar Novo Deck:** Como um Treinador logado, quero criar diferentes decks com nomes personalizados (ex: "Deck de Fogo", "Meu Deck para Torneio") para organizar minhas estratégias.
  - *Critérios de Aceitação:* O deck deve estar vinculado ao ID do treinador; o nome é obrigatório.
- **US07 - Visualizar Meus Decks:** Como um Treinador, quero uma tela de dashboard que liste todos os decks que eu criei.
- **US08 - Editar Nome do Deck:** Como um Treinador, quero poder alterar o nome de um deck já existente.
- **US09 - Excluir Deck:** Como um Treinador, quero poder excluir um deck completo.
  - *Critérios de Aceitação:* Ao excluir um deck, o sistema deve remover o vínculo de todas as cartas pertencentes a ele.
- **US10 - Gerenciar Cartas no Deck:** Como um Treinador, quero poder adicionar cartas do catálogo a um deck específico e removê-las quando desejar.

---

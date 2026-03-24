Product Requirements Document (PRD) - PokéDeck Builder
1. Visão Geral e Objetivo
O PokéDeck Builder é uma aplicação web didática que utiliza a API pública de Pokémon TCG para permitir a exploração de cartas colecionáveis e a simulação de montagem de decks.

O grande diferencial (Regra de Negócio Principal): Diferente de uma simples Wiki, o sistema foca na experiência do colecionador. O usuário pode buscar cartas em tempo real e "montar" seu deck estrategicamente. Para tornar o projeto dinâmico dentro dos requisitos da disciplina, o sistema simula a persistência de dados (decks e favoritos) localmente, permitindo que o usuário gerencie sua coleção sem a necessidade de um backend real complexo.

2. Atores do Sistema
Visitante: Usuário não autenticado que pode navegar pelo catálogo geral de cartas e realizar buscas por nome ou tipo.

Treinador (Cliente): Usuário autenticado que possui acesso ao painel de "Meu Deck", onde pode salvar suas cartas favoritas e organizar sua estratégia.

A PokéAPI (Sistema Externo): O fornecedor de dados que alimenta a aplicação com imagens, tipos, ataques e raridades das cartas em tempo real.

3. Histórias de Usuário e Escopo
Abaixo estão as funcionalidades principais do MVP (Minimum Viable Product), escritas sob a perspectiva do usuário final.

👤 Épico 1: Autenticação e Perfil
US01 - Cadastro de Treinador: Como um Visitante, quero preencher um formulário com meus dados (Nome, E-mail, Senha) para criar um perfil de treinador.

Critérios de Aceitação: O e-mail deve ser validado; todos os campos são obrigatórios; os dados devem ser salvos no Web Storage (ou JSON Server).

US02 - Acesso ao Painel (Login): Como um Treinador, quero inserir minhas credenciais para visualizar meu deck salvo anteriormente.

🃏 Épico 2: Exploração de Cartas
US03 - Busca de Cartas: Como um Visitante ou Treinador, quero pesquisar cartas pelo nome (ex: "Pikachu") para visualizar suas artes e estatísticas.

US04 - Filtros Avançados: Como um usuário, quero filtrar as cartas por "Tipo" (Fogo, Água, Elétrico) ou "Raridade".

Critérios de Aceitação: Os filtros devem ser aplicados dinamicamente via requisição à API pública.

US05 - Detalhes da Carta: Como um usuário, quero clicar em uma carta para ver informações detalhadas como ataques, fraquezas, resistência e o preço médio no mercado (se disponível na API).

🗃️ Épico 3: Gerenciamento de Deck
US06 - Adicionar ao Deck: Como um Treinador logado, quero clicar em um botão para adicionar uma carta específica ao meu deck personalizado.

Critérios de Aceitação: O deck deve ter um limite de cartas (opcional); o sistema deve alertar caso a carta já esteja no deck.

US07 - Visualizar Meu Deck: Como um Treinador, quero acessar uma tela exclusiva que liste apenas as cartas que eu selecionei.

Critérios de Aceitação: A lista deve ser recuperada do LocalStorage ou JSON Server; deve permitir a remoção de cartas do deck.

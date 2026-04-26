# 🎨 Design System - PokeDeck Studio

Neste projeto, utilizamos o framework **Bootstrap v5.3** e aplicamos customizações pontuais via CSS para refletir uma identidade visual moderna, imersiva e temática.

## 1. Framework Base

**Framework escolhido:** Bootstrap v5.3  
**Motivação:** Escolhido pela robustez do sistema de grid e flexibilidade dos componentes de interface (modais, cards e formulários).

## 2. Paleta de Cores (Design Tokens)

As cores foram definidas para criar uma estética "Nature UI", equilibrando tons de verde que remetem ao cenário de jornada Pokémon com cores de ação vibrantes:

* **Cor Primária (Ação/Branding):** `#9E4E4E`
    * **Uso:** Títulos de modais, nomes de cartas em destaque e botões de ação principal.
* **Cor de Fundo Dinâmica (Background):** `Linear Gradient (#FFFFFF para #E5F4CC)`
    * **Uso:** Aplicado ao fundo da aplicação para criar profundidade e suavidade visual.
* **Cor de Sucesso/Base (Sage):** `#A3B18A`
    * **Uso:** Background de containers de busca e áreas de filtros.
* **Cor de Destaque Secundário:** `#56A5D8` 
    * **Uso:** Botões de criação de conta e elementos informativos secundários.
* **Superfície de Cards:** `#FFFFFF` 
    * **Uso:** Cards de cartas individuais e modais de informação básica para máximo contraste e leitura.
* **Texto Principal:** `#344E41` 
    * **Uso:** Textos informativos, descrições de ataques e labels de formulário.

## 3. Tipografia

* **Títulos e Cabeçalhos:** `Inter` ou `Poppins` (Peso: 700 - Bold). Transmite precisão e autoridade.
* **Corpo de Texto e Dados da API:** `Montserrat` (Peso: 400/500). Escolhida pela clareza na exibição de dados numéricos e técnicos das cartas.

## 4. Diretrizes de Uso de Componentes

Regras de implementação para manter a consistência visual:

* **Cards de Cartas (.card-poke):** Devem possuir cantos arredondados (`border-radius: 20px`) e uma borda sutil. O nome do Pokémon deve usar a cor primária bordo.
* **Botões de Interface (.btn-pill):** Devem seguir o formato "pílula" com arredondamento máximo (`border-radius: 33554400px`) e altura fixa de `48px` a `60px` conforme a importância da ação.
* **Modais (.modal-custom):** Devem utilizar o fundo `#FAF9F6` com cabeçalhos coloridos em Sage (`#A3B18A`) e botões de fechamento estilizados.
* **Filtros de Busca:** Devem ser organizados em uma barra horizontal de largura fixa (`448px` no desktop), utilizando estados de hover suaves para indicar interatividade.
* **Grids de Exibição:** Utilização obrigatória do sistema de `row` e `col` do Bootstrap para manter o alinhamento de 4 cartas por linha (desktop) e 2 cartas (mobile).

---

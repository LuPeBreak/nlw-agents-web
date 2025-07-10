# NLW Agents

Este projeto é a interface web do **NLW Agents**, desenvolvido durante o evento Next Level Week (NLW) da Rocketseat.

**Desenvolvido por:** [Luis Felipe de Paula Costa](https://github.com/lupebreak)

---

## 🚀 Tecnologias e Bibliotecas

O projeto foi construído com um conjunto moderno de ferramentas para desenvolvimento web:

- **Framework Principal:** [React](https://react.dev/) com [Vite](https://vitejs.dev/) para um ambiente de desenvolvimento rápido.
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para tipagem estática e um código mais robusto.
- **Estilização:**
  - **shadcn/ui:** Metodologia para construção de componentes. Não é uma biblioteca, mas sim uma coleção de componentes reutilizáveis que são copiados para o projeto, permitindo total customização.
  - **Tailwind CSS:** Framework CSS utility-first para estilização.
- **Roteamento:** React Router DOM para navegação e gerenciamento de rotas na aplicação.
- **Gerenciamento de Estado do Servidor:** TanStack Query para buscar, armazenar em cache e atualizar dados do servidor de forma eficiente.
- **Qualidade de Código:** Biome para formatação e linting do código.

---

## 🎨 Padrões de Projeto

- **Arquitetura com shadcn/ui:** O projeto adota a metodologia do `shadcn/ui`. Em vez de instalar uma biblioteca de componentes de UI, os componentes são adicionados diretamente ao código-fonte (em `src/components/ui`) usando o CLI do shadcn. Isso oferece controle total sobre o código, estilo e comportamento dos componentes, que são construídos sobre as primitivas acessíveis do Radix UI e estilizados com Tailwind CSS.

- **Gerenciamento de Estado do Servidor:** A utilização do TanStack Query centraliza a lógica de data-fetching, simplificando o gerenciamento de cache, revalidações automáticas e estados de carregamento/erro, desacoplando a UI do estado do servidor.

---

## 📂 Arquitetura do Projeto

O projeto segue uma arquitetura baseada em componentes, visando a manutenibilidade e a escalabilidade. A estrutura de pastas principal é organizada da seguinte forma:

```
src/
├── api/         # Lógica de chamadas para a API e hooks do TanStack Query
├── components/  # Componentes React reutilizáveis
│   ├── ui/      # Componentes de UI base (Button, Input, etc.)
│   └── ...      # Outros componentes compartilhados
├── lib/         # Funções utilitárias (ex: cn para classes)
├── pages/       # Componentes que representam as páginas/rotas
├── App.tsx      # Componente raiz da aplicação com o setup de rotas
└── main.tsx     # Ponto de entrada da aplicação
```

---

## ⚙️ Setup e Configuração

Siga os passos abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Um gerenciador de pacotes como npm, yarn ou pnpm

### Instalação

1. **Clone o repositório (caso ainda não tenha feito):**
   ```bash
   # Substitua <URL_DO_REPOSITORIO> pela URL correta
   git clone <URL_DO_REPOSITORIO>
   cd nlw-agents/web
   ```

2. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   Abra seu navegador e acesse o endereço `http://localhost:5173` (ou a porta que aparecer no seu terminal).
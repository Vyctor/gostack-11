# Estruturando primeiro projeto Node.js com Typescript

- Dependencias de desenvolvimento:
  - express
  - typescript -D
  - ts-node-dev

* Dependências:

1. Iniciar projeto Nodejs com o comando
   1. `yarn init -y`
2. Instalar o express
   1. `yarn add express`
3. Instalar o typescript como pacote de desenvolvimento
   1. `yarn add typescript -D`
4. Inicializar o typescript, gerando o arquivo `tsconfig.json`
   1. `yarn tsc --init`
5. Criar o arquivo `src/server.ts`
6. No arquivo `tsconfig.json` setar:

```json
"outDir": "./dist"
"rootDir": "./src",
```

7. Importar o express no arquivo `server.ts`
   1. Instalar o `@types`para o express como pacote de desenvolvimento
8. Instalar o ts-node-dev como pacote de desenvolvimento
9. Criar o script no arquivo `package.json`:

```json
"dev:server": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"
```

# EditorConfig

O EditorConfig serve para padronizar o estilo de código entre ide's para que não sejam geradas diferenças em um projeto codificado por multiplos desenvolvedores.

1. Primeiro é necessário instalar o plugin do VSCODE EditorConfig
2. Após clicar com o botão direito do mouse sobre a raíz do projeto e após em generate .editorconfig e será criado o arquivo `.editorconfig` na raíz do projeto.
3. Mudar as configurações:

```.json
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

# ESLINT

O ESLint padroniza automaticamente o estilo de código, configurações como aspas, ponto e vírgula, etc...

- Instalar o ESLINT como dependência de desenvolvimento
  `yarn add eslint -D`
- Inicializar o ESLINT
  `yarn eslint --init`
- Escolher as opções
  1. Checar sintaxe, encontrar problemas e forçar padrão de código
  2. Javascript modules (import/export)
  3. None of these
  4. Yes para usando typescript
  5. Selecionar Node com espaço
  6. Utilizar guia de estilo popular do Airbnb
  7. Utilizar formato JSON
  8. Instalar pacotes mostrados via yarn

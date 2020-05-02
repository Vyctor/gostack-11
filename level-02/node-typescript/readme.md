# Construindo primeiro projeto Node.js com Typescript

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

10.

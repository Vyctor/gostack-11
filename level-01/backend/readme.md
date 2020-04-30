# Primeiro back-end utilizando Nodejs

- **Dependências**

  - express
  - nodemon
  - uuidv4

- **Curiosidades**
  - Atalho para teclado de emoji **COMMAND + CTRL + SPACE**

# Métodos HTTP

- GET
  - Buscar informações do back-end
- POST
  - Criar uma informação no back-end
- PUT (Altera tudo) / PATCH (altera somente um dado específico)
  - Alterar uma informação no back-end
- Delete
  - Deleta uma informação no back-end

# Tipos de parâmetros

- Query Params:
  - Utilizados principalmente para filtros e paginação
- Route Params:
  - Identificar recursos na hora de atualizar ou deletar
- Request Body:
  - Conteúdo na hora de criar ou editar um recurso

# Middlewares

- Ele é um interceptador de requisições
  - Ele pode:
    - Interromper totalmente uma requisição
    - Alterar dados da requisição
- Quando vou utilizar um middleware?
  - Quando necessitarmos que algum trecho de código seja disparado de forma automática em algumas requisições

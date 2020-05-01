# O que é React?

- É uma biblioteca front-end para construção de interfaces
- Utilizado para construir Single-Page Applications
  - As páginas não são rotas do backend, elas ficam no front-end.
- O ecossistema React é um framework
- Tudo fica dentro do Javascript
- React / ReactJS / React Native
  - React é a biblioteca do React, React Core
  - ReactJS é a junção de React e React DOM, é o React para browser
  - O React Native é o React para aplicações mobile.

# Vantagens do React

- Organização do código
  - Componentização
    - Dividir um monolito em vários componentes que possuem funcionalidades específicas
    - Isolar a lógica de um componente sem que ela interfica na aplicação ao todo
    - Conjunto de lógica, estruturação e estilização que juntos formam um componente que pode ser isolado da aplicação e não interferir no funcionamento dela.
- Divisão de responsabilidades
  - Regras de negócios ficam com o back-end
  - O front-end fica com a responsabilidade de mostrar os dados.
- Uma API, múltiplos clientes
  - Podemos servir os dados para aplicações mobile e web.
- Programação Declarativa vs Programação Imperativa
  - Programação Imperativa
    - O desenvolvedor descreve para o computador cada passo que é necessário.
  - Programação Declarativa
    - O desenvolvedor passa qual o resultado quer e a máquina retorna o esperado.

# JSX

- Permite escrever HTML dentro do Javascript
- Com React podemos criar nossos próprios elementos HTML
- As funções do Javascript podem retornar HTML

# Babel / Webpack

- O browser não entende todo esse código
- O Babel converte o código JS de uma forma que o browser entenda.
- O Webpack possui várias funções
  - Criação do bundle, arquivo com todo código da aplicação
  - Ensinar ao JS como importar arquivos CSS, imagens e etc...
  - Live reload com Webpack Dev Server

# Configuração do Babel

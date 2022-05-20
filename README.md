# Aplicação Angular 13 Implementada na Aula do Dia 19/05/2022 na UNIME

Este projeto foi gerado com a [Angular CLI](https://github.com/angular/angular-cli) versão 13.3.6.

## Pré-Requisitos para Execução Local

Node.js na versão 16.15.0 (https://nodejs.org/pt-br)
Angular CLI versão 13.3.6 (npm i -g @angular/cli)

## Antes de Executar a Aplicação em Ambiente Local

1. Executar `npm i` no terminal (prompt de comando ou power shell).
2. Executar `npm run generate` no terminal (prompt de comando ou power shell) para gerar o arquivo que servirá de banco de dados mockado em ./server.
3. Executar `npm run server` no terminal (prompt de comando ou power shell) para executar o servidor de banco de dados mockado em ./server.

## Execução da Aplicação em Ambiente Local

A aplicação é executada localmente com o comando `ng serve` no terminal (prompt de comando ou power shell). 
Abra no browser de sua preferência a URL `http://localhost:4200/`. 
A aplicação atualizará automaticamente quando o código fonte for alterado com o servidor em execução.

## Geração de Componentes ou Outros Itens


O comando `ng generate component component-name` executado no terminal  (prompt de comando ou power shell) gera um novo componente.
Também é possível executar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

O comando `ng build` no terminal (prompt de comando ou power shell) executa o build do projeto. 
Os artefatos gerados serão armazenados no diretório (pasta) `dist/`.

## Testes Unitários

O comando `ng test` no terminal (prompt de comando ou power shell) executa testes unitários via [Karma](https://karma-runner.github.io).

## Testes Fim-a-Fim

O comando `ng e2e` no terminal (prompt de comando ou power shell) executa testes fim-a-fim via uma plataforma de sua escolha.
Para usar este comando, você precisa primeiro adicionar um pacote que implementa as capacidades de testes fim-a-fim.

## Ajuda Adicional

Para obter ajuda adicional na CLI do Angular use `ng help` no terminal (prompt de comando ou power shell) ou verifique o documento: [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

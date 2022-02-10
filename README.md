# Cifra de César

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do Projeto](#2-resumo-do-projeto)
- [3. Usuário Final](#3-usuário-final)
- [4. Considerações Técnicas](#4-considerações-técnicas)


---

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do Projeto

Este projeto foi criado a primeira aplicação web do _bootcamp_ da Laboratória - Turma SAP007 - . Nela o usuário poderá cifrar e decifrar um texto indicando a chave de deslocamento (_offset_).


## 3. Usuário Final

Atendendo a necessidade daqueles membros empresariais, políticos e até mesmo de sociedade secretas em enviar e receber mensagens sigilosas entre membros ou setores de cunho restrito de suas atas de assembléias e reuniões confidenciais.

## 4. Considerações Técnicas

A lógica do projeto foi implementada inteiramente em JavaScript. Nesse projeto não foram utilizadas bibliotecas ou frameworks, somente vanilla JavaScript, HTML5 e CSS3.

O disigner da página foi criado de forma clara, objetivo e intuívo.


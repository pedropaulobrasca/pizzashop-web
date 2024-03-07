<div align="center">

# 🍕 pizza.shop

![Vite](https://img.shields.io/badge/Vite-2.x.x-blue)
![React](https://img.shields.io/badge/React-17.x.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-2.x.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x.x-blue)

</div>

## 📜 Visão geral

Um dashboard para lojistas que possuem um restaurante delivery.
A ideia é que os lojistas possam acompanhar as métricas do restaurante, como pedidos mensais, diários, gráficos, acompanhar cada pedido, alterar status do pedido e afins.

## 🎑 Capturas de tela

![login](https://github.com/pedropaulobrasca/pizzashop-web/assets/51256634/90d74d02-8dc6-4a16-a3ad-3d45cb783c0e)
![newuser](https://github.com/pedropaulobrasca/pizzashop-web/assets/51256634/ad9dd5d9-f9f3-4b6e-9f89-0f71060e0cfe)
![dashboard](https://github.com/pedropaulobrasca/pizzashop-web/assets/51256634/4862c934-13a8-49ff-9cd7-2b83901be143)
![pedidos](https://github.com/pedropaulobrasca/pizzashop-web/assets/51256634/98a40ea7-af7f-4b79-9658-73eada405fb2)

## 🛠️ Tecnologias Utilizadas

### React Query

O React Query foi escolhido para lidar com a gestão de dados e estado na aplicação. Sua abordagem baseada em hooks simplifica a integração de dados de APIs externas, gerenciamento de cache e tratamento de estados de carregamento e erro.

### Zod

Zod é uma biblioteca de validação de esquemas TypeScript que oferece uma maneira elegante de validar e tipar dados em tempo de compilação. Utilizamos Zod para garantir a integridade dos dados recebidos pela aplicação, evitando erros e inconsistências.

### Tailwind CSS

Tailwind CSS é uma estrutura de estilo utilitário que permite criar interfaces de usuário altamente personalizáveis de forma rápida e eficiente. Optamos por Tailwind CSS devido à sua abordagem de baixo nível, que proporciona flexibilidade total no design e permite a criação de interfaces consistentes e visualmente atraentes.

### React Hook Form

React Hook Form é uma biblioteca de formulários que simplifica a criação e validação de formulários no React. Sua abordagem baseada em hooks facilita a integração de formulários complexos com validação de entrada de dados.

### MSW (Mock Service Worker)

O MSW é uma biblioteca que facilita a criação de mocks para APIs HTTP durante o desenvolvimento e teste de aplicações. Utilizamos o MSW para simular o comportamento de um servidor de backend durante o desenvolvimento e teste da aplicação frontend, permitindo uma abordagem de desenvolvimento mais ágil e independente.

### Vite

Vite é uma ferramenta de desenvolvimento rápida que oferece um ambiente de desenvolvimento moderno e eficiente para aplicações frontend. Sua integração perfeita com React e TypeScript, juntamente com sua compilação e recarga instantâneas, proporciona uma experiência de desenvolvimento fluida e produtiva.

### Playwright/Test

Playwright/Test é uma ferramenta de automação de teste de navegador que permite escrever e executar testes automatizados para aplicações web em diversos navegadores. Utilizamos Playwright/Test para garantir a qualidade e estabilidade da aplicação através da automação de testes de integração e aceitação.

Essas tecnologias foram escolhidas com base em sua eficácia, facilidade de uso e integração, proporcionando uma base sólida para o desenvolvimento de uma aplicação frontend moderna e robusta.

## ❗ Requisitos

- [Node](https://nodejs.org/en/download/)

## 💾 Instalação e uso

```
$ git clone https://github.com/pedropaulobrasca/pizzashop-web.git
$ cd pizzashop-web
$ pnpm install
$ pnpm dev
```

### 🚨 Testes

```
$ pnpm test
$ pnpm e2e
```

</details>

## 😺 Autor

Este projeto foi criado por Pedro Brasca como parte do curso da Rocketseat.

# AngularCoin

Aplicação web desenvolvida em Angular para conversão de moedas em tempo real utilizando uma API REST pública de câmbio. O sistema permite realizar conversões entre diversas moedas internacionais, armazenar o histórico localmente e continuar funcionando mesmo sem conexão com a internet através do uso de cache das últimas taxas obtidas.

## Objetivo

O AngularCoin foi desenvolvido com o objetivo de demonstrar a integração entre Angular e APIs REST, consumindo dados de câmbio em tempo real para fornecer conversões rápidas, precisas e acessíveis ao usuário.

## Funcionalidades

* Conversão de moedas em tempo real
* Integração com API REST de câmbio
* Suporte a diversas moedas internacionais
* Conversão inversa entre moedas
* Histórico de conversões armazenado localmente
* Funcionamento offline utilizando as últimas taxas salvas
* Atualização automática das taxas de câmbio
* Interface responsiva e intuitiva
* Tratamento de erros de conexão

## Tecnologias Utilizadas

* Angular
* TypeScript
* HTML5
* CSS3
* HttpClient (Angular)
* Local Storage
* Exchange Rate API (Open ER API)

## API Utilizada

O projeto utiliza a API pública:

https://open.er-api.com

Exemplo de requisição:

```http
https://open.er-api.com/v6/latest/USD
```

A API fornece taxas de câmbio atualizadas para centenas de moedas internacionais.

## Capturas de Tela

### Tela Principal

![AngularCoin main converter screen in a browser window with a dark blue interface showing 1000 USD converted to 5,077.92 BRL. Controls include source currency USD, destination currency BRL, and an Inverter button. Result details show 1 USD = 5.079 BRL and last update Mon, 15 Jun 2026 00:02:31 +0000, indicating a real-time currency conversion interface.](docs/tela-principal.png)

### Conversão e Histórico

![Currency conversion history panel with a dark blue background showing past entries such as 1000 USD → EUR, 10000 EUR → USD, 100 EUR → BRL, and 1000 USD → BRL. The section includes a header Historico de Conversoes and a Limpar button for clearing history.](docsconversao-historico.png.png)

### Funcionamento Offline

![Offline mode screen with a dark blue browser interface showing 1 USD converted to 5.08 BRL. Status text reads Sem conexao com a API. Usando as ultimas taxas salvas no dispositivo. Modo offline ativo. The screen shows cached exchange rate usage and a history section with past conversions.](docs/modo-offline.png)

## Como Executar o Projeto

### Pré-requisitos

* Node.js
* Angular CLI

### Instalação

Clone o repositório:

```bash
git clone https://github.com/seuusuario/AngularCoin.git
```

Acesse a pasta:

```bash
cd AngularCoin
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
ng serve
```

Abra no navegador:

```text
http://localhost:4200
```

## Estrutura do Projeto

```text
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.css
├── assets/
├── index.html
└── main.ts
```

## Recursos Implementados

### Conversão de Moedas

Permite selecionar uma moeda de origem, uma moeda de destino e realizar a conversão instantaneamente utilizando taxas atualizadas.

### Histórico de Conversões

Todas as conversões realizadas são armazenadas localmente, permitindo consulta posterior sem necessidade de banco de dados.

### Modo Offline

Quando não há conexão com a internet, o sistema utiliza as últimas taxas armazenadas no navegador para continuar funcionando normalmente.

### Conversão Inversa

O usuário pode inverter rapidamente as moedas de origem e destino através do botão "Inverter".

## Autor

Ruan Miguel Correia dos Santos

Curso: Sistemas de Informação

## Licença

Este projeto está licenciado sob a licença MIT.


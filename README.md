## Autor

Ruan Miguel Correia dos Santos 01838500

Curso: Sistemas de Informação

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

<img width="1913" height="787" alt="docstela-principal png" src="https://github.com/user-attachments/assets/0b976249-f19c-45fe-b96d-a665c8f6865d" />


### Conversão e Histórico

<img width="1919" height="988" alt="docsconversao-historico png" src="https://github.com/user-attachments/assets/3cd3d9ba-29b2-46f2-96f5-c4d1ce0a7e29" />

### Funcionamento Offline

<img width="1919" height="989" alt="docsmodo-offline png" src="https://github.com/user-attachments/assets/841ef5b7-be6e-4770-94c0-4b8b77e56dbe" />

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

## Licença

Este projeto está licenciado sob a licença MIT.


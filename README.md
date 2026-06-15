# AngularCoin

Aplicativo web desenvolvido com **Angular** e **TypeScript** para conversão de moedas em tempo real consumindo uma API REST externa.

## Objetivo

O AngularCoin permite que o usuário selecione uma moeda de origem, uma moeda de destino, informe um valor e visualize a conversão com base em taxas de câmbio atualizadas.

## Funcionalidades

- Conversão de moedas em tempo real.
- Consumo de API REST externa de câmbio.
- Suporte a várias moedas internacionais, como USD, BRL, EUR, GBP, JPY e outras.
- Histórico das últimas conversões usando Local Storage.
- Botão para inverter rapidamente as moedas de origem e destino.
- Cache das últimas taxas de câmbio para uso offline.
- Tratamento de erros caso a API esteja indisponível.
- Interface responsiva para computador e celular.

## API utilizada

Este projeto utiliza a API pública:

`https://open.er-api.com/v6/latest/{MOEDA}`

Exemplo:

`https://open.er-api.com/v6/latest/USD`

## Tecnologias

- Angular
- TypeScript
- HTML
- CSS
- Local Storage
- API REST

## Telas do projeto

### Tela de conversão

<img width="1913" height="787" alt="docstela-principal png" src="https://github.com/user-attachments/assets/6692faa1-2fcf-44c0-b07d-0008f647f362" />


### Tela de histórico

<img width="1919" height="988" alt="docsconversao-historico png" src="https://github.com/user-attachments/assets/7b417d85-7c03-473f-b6fe-a85b50a6269e" />


### Tela offline

<img width="1919" height="989" alt="docsmodo-offline png" src="https://github.com/user-attachments/assets/5f264183-273f-474b-b687-5fecb09aa23a" />


## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/AngularCoin.git
```

Entre na pasta:

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

Acesse no navegador:

```bash
http://localhost:4200
```

## Estrutura principal

```text
AngularCoin/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── main.ts
│   ├── index.html
│   └── styles.css
├── docs/
│   └── screenshots/
├── README.md
├── LICENSE
├── .gitignore
├── angular.json
└── package.json
```

## Requisitos atendidos

- Framework Angular.
- Linguagem TypeScript.
- Consumo de API REST externa.
- Conversão entre diferentes moedas.
- Histórico local com Local Storage.
- Cache offline das últimas cotações.
- Botão de conversão inversa.
- Interface responsiva.
- README com imagens.
- LICENSE MIT.
- .gitignore configurado para não versionar `node_modules`.

## Autor

Ruan Miguel

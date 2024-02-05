# Printer Network Management

![Screenshot_2](https://github.com/MarckusP/impressoras/assets/111365757/fd62a648-901f-4e85-9f0d-1e235896c4c0)


## Descrição

Este projeto tem como objetivo oferecer uma solução para gerenciamento de impressoras em uma rede, fornecendo informações como quantidade de toner, status online, etc., através do endereço IP das impressoras.

O projeto utiliza a biblioteca Puppeteer para realizar web scraping, permitindo a extração de informações diretamente das páginas web das impressoras.

## Funcionalidades

- **Coleta de Informações:** Obtém dados relevantes das páginas web das impressoras através do endereço IP.
- **Gestão de Toner:** Monitora a quantidade de toner disponível em cada impressora.
- **Status Online:** Verifica o status de online/offline das impressoras na rede.
- **Interface Web:** Possui uma interface web para visualização e gerenciamento das informações coletadas.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas:

- Node.js
- Puppeteer

```bash
npm install puppeteer
```

## Como Usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

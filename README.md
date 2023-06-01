<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/JacksonSantin/bot-discord?color=%238257E5">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JacksonSantin/bot-discord?color=%238257E5">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JacksonSantin/bot-discord?color=%238257E5">
  
  <a href="https://github.com/JacksonSantin/bot-discord/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JacksonSantin/bot-discord?color=%238257E5">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=%238257E5">
   
  <a href="https://curriculo-vitae-web.web.app/">
    <img alt="Feito por Douglas" src="https://img.shields.io/badge/feito%20por-Jackson Dhanyel santin-%238257E5">
  </a>
</p>

<h1 align="center">
    <img src="https://sm.ign.com/ign_me/screenshot/default/discord-logo_ycay.jpg" width="546" alt="discord.js" />
</h1>

<h4 align="center"> 
	🚧 Bot Lembretes ♻️ Finalizado 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

♻️ Lembretes - bot criado com o intuito de adicionar lembretes para que possa se lembrar de fazer qualquer coisa, no meu caso, tomar remédios.

O projeto partiu de uma ideia de praticar o desenvolvimetno de algum bot para o discord em javascript e por fim, publicá-lo para que sempre fique rodando e funcionando.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) + NPM.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando a aplicação

Primeiramente siga esses passos abaixo.
```bash
# Clone este repositório
$ git clone git@github.com:JacksonSantin/bot-discord.git

# Acesse a pasta do projeto no terminal/cmd
$ cd bot-discord

# Abra o arquivo com no visual studio code pelo terminal
$ code .

```
---
Após, você precisa configurar o arquivo **config.json** colocando o token do seu servidor do Discord.
```bash
{
  "token": "TOKEN_DO_SEU_SERVIDOR_AQUI"
}
```

---
Partindo do ponto que você já acessou o site [Discord Developer Portal](https://discord.com/developers/applications) e já tem criado o seu bot, você deve seguir esses passos da imagem para encontrar o token do seu servidor.
<img src="https://i.imgur.com/zZ1ctsg.png" width="100%" alt="Onde está o token do servidor discord?" />
<em>Essa imagem foi retirada do [Google Imagens](https://images.google.com/) do site [Imgur](https://i.imgur.com)</em>

---
A estrutura dos seus arquivos ficarão dessa forma:
```shell
.
├── Comands
│   └── general
│       ├── Ping.js
│       └── sendMessage.js
├── handler
│   └── index.js
├── bot.js
├── config.json
├── package.json
```

Por fim, só rodar os comando abaixo.
```bash
# Instale as dependências
$ npm i 
# ou
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm bot.js

# O console deverá mostrar a mensagem "Estou online em Lembretes"
```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server** [NodeJS](https://nodejs.org/en/)

- **[discord.js](https://discord.js.org/)**
- **[node-schedule](https://www.npmjs.com/package/node-schedule)**

> Veja o arquivo [package.json](https://github.com/JacksonSantin/bot-discord/blob/master/package.json)


#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Estou utilizando o [Discloud](https://discloudbot.com/) como servidor para que meu bot sempre fique rodando.
  - Para configurá-lo, basta seguir as instruções da [Documentação oficial da DisCloud ](https://docs.discloudbot.com/)
---

## 👨‍💻 Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://curriculo-vitae-web.web.app/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/30778051?v=4" width="100px;" alt=""/><br /><sub><b>Jackson Dhanyel Santin</b></sub></a></td>
  </tr>
</table>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/30778051?v=4" width="100px;" alt=""/><br /><sub><b>Jackson Dhanyel Santin</b></sub>

<a href="https://instagram.com/jackson_santin" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href="https://twitter.com/dhanyeljack" target="_blank"><img src="https://img.shields.io/badge/Twitter-1d9bf0?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a>
<a href="https://fb.com/jackson.santin.52" target="_blank"><img src="https://img.shields.io/badge/Facebook-1877f2?style=for-the-badge&logo=facebook&logoColor=white" target="_blank"></a> 
<a href = "mailto:jackdhanyelsn@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/jackson-dhanyel-santin" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
<a href="https://curriculo-vitae-web.web.app" target="_blank"><img src="https://img.shields.io/badge/-JDS SISTEMAS-333333?style=for-the-badge&logo=web&logoColor=white" target="_blank"></a> 

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](https://github.com/JacksonSantin/bot-discord/blob/master/LICENSE).

Feito com ❤️ por Jackson Dhanyel Santin 👋🏽 [Entre em contato!](https://curriculo-vitae-web.web.app)

---

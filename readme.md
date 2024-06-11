# Projeto de Envio de E-mails

Este é um projeto simples para enviar e-mails usando Node.js e Nodemailer. Ele utiliza o serviço de e-mail do Gmail para enviar e-mails.

Criado para ser utilizado pelo projeto [Evoluti](https://github.com/MAJE-Tecnologias/Evoluti-React) para verificação de email e notificações.

## Configuração

Antes de usar o projeto, você precisa configurar suas variáveis de ambiente no arquivo `.env`. Defina as seguintes variáveis:

```
SMTP_MAIL=seu_email@gmail.com
SMTP_PASS=sua_senha_do_email
```

Certifique-se de permitir o acesso a aplicativos menos seguros no Gmail para a conta de e-mail que você está utilizando.

## Como usar

Para usar o projeto, primeiro instale as dependências com o comando:

```
npm install
```


O servidor será iniciado e estará pronto para receber solicitações POST para enviar e-mails.

Para enviar um e-mail, faça uma solicitação POST para `/send-email` com o seguinte corpo JSON:

```json
{
  "email": "email_destinatario@example.com",
  "subject": "Assunto do e-mail",
  "message": "Conteúdo da mensagem"
}
```
## Hospedagem

Este projeto está hospedado na plataforma Render.

## 🤝 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Poliester2005" title="eu">
        <img src="https://avatars.githubusercontent.com/u/107966984?v=4" width="100px;" alt="Foto do Eduardo Pielich no GitHub"/><br>
        <sub>
          <b>Eduardo Pielich</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

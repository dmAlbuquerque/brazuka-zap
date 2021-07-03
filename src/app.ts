import { create } from 'venom-bot';

async function sendMessage(phones: [], message: string) {
  const prefix = '@c.us'
  create('Brazuka-Zap')
    .then((client) => {

      for (var i = 0; i < phones.length; i++) {
        console.log(`Sending message to: ${phones[i]}\n`)

        client.sendText(phones[i] + "" + prefix, message)
          .then((result) => {
            console.log(`Message successfully sent to: ${phones[i]}\n`);
            console.log(result)
          })
          .catch((erro) => {
            console.log(`An error occurred while trying to send the message to: ${phones[i]}`)
            console.log(erro)
          });

      }
    })
    .catch((erro) => {
      console.log(erro);
    });
}

async function sendLinkPreview(phone: string, link: string, title: string) {
  const prefix = '@c.us'
  create('Brazuka-Zap')
    .then((client) => {
      client
        .sendLinkPreview(
          phone + "" + prefix,
          link,
          title
        )
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    })
    .catch((erro) => {
      console.log(erro);
    });
}

module.exports = {
  sendMessage,
  sendLinkPreview
}

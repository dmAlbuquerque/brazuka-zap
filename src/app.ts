import { create } from 'venom-bot';

/**
 * Send a message to one or more contacts of WhatsApp
 * @param phones type array
 * @param message type string
 */
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

/**
 * Send a message with link preview of video for a contact of WhatsApp
 * @param phone type string
 * @param link type string
 * @param message type string
 */
async function sendLinkPreview(phone: string, link: string, message: string) {
  const prefix = '@c.us'
  create('Brazuka-Zap')
    .then((client) => {
      client
        .sendLinkPreview(
          phone + "" + prefix,
          link,
          message
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

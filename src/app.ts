import { create } from 'venom-bot';

/**
 * Send a message to one or more contacts of WhatsApp
 * 
 * @param phones type array
 * @param message type string
 */
async function sendMessage(phones: string | [], message: string) {
  const prefix = '@c.us'
  create('Brazuka-Zap')
    .then((client) => {

      if(typeof phones != 'string'){
        for (var i = 0; i < phones.length; i++) {
          console.log(`Sending message to: ${phones[i]}\n`)
          client.sendText(phones[i] + "" + prefix, message)
            .then((result) => {
              console.log(`Message successfully sent.\n`);
              console.log(result)
            })
            .catch((erro) => {
              console.log(`An error occurred while trying to send the message`)
              console.log(erro)
            });
        }
      }else{
        console.log(`Sending message to: ${phones}\n`)
        client.sendText(phones + "" + prefix, message)
          .then((result) => {
            console.log(`Message successfully sent.\n`);
            console.log(result)
          })
          .catch((erro) => {
            console.log(`An error occurred while trying to send the message.`)
            console.log(erro)
          });
      }
    })
    .catch((erro) => {
      console.log(erro);
    });
}

/**
 * Send image for one contact of WhatsApp
 * 
 * @param phone type string
 * @param path  type string
 * @param imageName type string
 * @param captionText type string
 */
async function sendImage(phone: string, path: string, imageName: string, captionText: string) {
  const prefix = '@c.us'
  create('Brazuka-Zap')
    .then((client) => {
      client
        .sendImage(
          phone + "" + prefix,
          path,
          imageName,
          captionText
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

/**
 * Send a message with link preview of video for a contact of WhatsApp
 * 
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

/**
 * Send Location  for one contact of WhatsApp
 * 
 * @param phone type string
 * @param latitude type string
 * @param longitude type string
 * @param text type string
 */
async function sendLocation(phone: string, latitude: string, longitude: string, text: string) {
  const prefix = '@c.us'
  create('Brazuka-Zap')
    .then((client) => {
      client
        .sendLocation(
          phone + "" + prefix,
          latitude,
          longitude,
          text
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
  sendImage,
  sendLinkPreview,
  sendLocation
}

import { create, Whatsapp } from 'venom-bot';

create('Brazuka-Zap')
  .then((client) => {
    console.log("O cliente é do tipo --> " + client)
    sendMessage('558897289500@c.us', 'Minha mensagem', client)
  })
  .catch((erro) => {
    console.log(erro);
  });

async function sendMessage(phone: string, message: string, client: Whatsapp) {
  client.sendText(phone, message)
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
}

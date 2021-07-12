import BrazukaZap from '..';

test()

async function test() {

	try {
		var zap = new BrazukaZap();

		await zap.start();

		zap.onMessage((msg: any) => {
			switch (msg.body.toLowerCase()) {
				case 'hi': {
					zap.sendMessage(msg.from, `Hello ${msg.sender.pushname}, welcome to my awesome company!`)
					break
				}
				case 'catalog': {
					zap.sendMessage(msg.from, 'Alright, I\'ll be sending you our product catalog!')
					break
				}
				case 'address': {
					zap.sendMessage(msg.from, 'Our address is: 666 Park Avenue')
					break
				}
				default: {
					zap.sendMessage(msg.from, 'Sorry, I couldn\'t understand, I\'m still learning about your world! 🤖')
				}
			}
		})



		//await zap.sendMessage('558812345678', 'No one could ever know me')
		/*await zap.sendMessage(['558812345678', '558812345678', '558812345678'], 'No one could ever see me Seems like you\'re the only one who knows What it\'s like to be me')
		await zap.sendImage('558812345678', '../../assets/friends.jpg', 'friends', 'My Friends!')
		await zap.sendImage(['558812345678', '558812345678'], '../../assets/friends.jpg', 'friends', 'My Friends')
		await zap.sendLinkPreview('558812345678', 'https://youtu.be/RIjTq_OdFvo', 'Assiste aí.')
		await zap.sendLinkPreview(['558812345678', '558812345678', '558812345678'], 'https://youtu.be/RIjTq_OdFvo', 'I\'ll be there for you')
		await zap.sendLocation('558812345678', '-3.7594297599906294', '-40.81624143391349', 'Frecheirinha')
		await zap.sendLocation(['558812345678', '558812345678', '558812345678'], '-3.7594297599906294', '-40.81624143391349', 'Frecheirinha')*/
	} catch (err) {
		console.log(err)
	}

}









import BrazukaZap from '..';

test()

async function test() {

	try {
		var zap = await new BrazukaZap();

		await zap.start();

		await zap.sendMessage('558812345678', 'No one could ever know me')
		await zap.sendMessage(['558812345678', '558812345678', '558812345678'], 'No one could ever see me Seems like you\'re the only one who knows What it\'s like to be me')
		await zap.sendImage('558812345678', '../../assets/friends.jpg', 'friends', 'My Friends!')
		await zap.sendImage(['558812345678', '558812345678'], '../../assets/friends.jpg', 'friends', 'My Friends')
		await zap.sendLinkPreview('558812345678', 'https://youtu.be/RIjTq_OdFvo', 'Assiste aí.')
		await zap.sendLinkPreview(['558812345678', '558812345678', '558812345678'], 'https://youtu.be/RIjTq_OdFvo', 'I\'ll be there for you')
		await zap.sendLocation('558812345678', '-3.7594297599906294', '-40.81624143391349', 'Frecheirinha')
		await zap.sendLocation(['558812345678', '558892797220', '558892902695'], '-3.7594297599906294', '-40.81624143391349', 'Frecheirinha')
	} catch (err) {
		console.log(err)
	}

}









import BrazukaZap from '..';

test()

async function test() {

	try {
		var zap = await new BrazukaZap();

		await zap.start();

		await zap.sendMessage('558812345678', 'Minha Mensagem de Teste de 1 Número')
		await zap.sendMessage(['558812345678', '558812345678', '558812345678'], 'Minha Mensagem de Teste de Vários Números')
		await zap.sendImage('558812345678', '../../assets/friends.jpg', 'friends', 'Its Me Mario!')
		await zap.sendImage(['558812345678', '558812345678'], '../../assets/friends.jpg', 'friends', 'Its\' Me Mário e Minha Turma!')
		await zap.sendLinkPreview('558812345678', 'https://www.youtube.com/watch?v=V1bFr2SWP1I', 'Assiste aí.')
		await zap.sendLinkPreview(['558812345678', '558812345678', '558812345678'], 'https://www.youtube.com/watch?v=V1bFr2SWP1I', 'Assiste aí.')
		await zap.sendLocation('558812345678', '-3.7594297599906294', '-40.81624143391349', 'Frecheirinha')
		await zap.sendLocation(['558812345678', '558892797220', '558892902695'], '-3.7594297599906294', '-40.81624143391349', 'Frecheirinha')
	} catch (err) {
		console.log(err)
	}

}









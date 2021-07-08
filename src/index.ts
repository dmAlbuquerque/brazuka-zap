import { create } from 'venom-bot';

class BrazukaZap {
	private client: any;

	async start(session = 'Brazuka-Zap') {
		this.client = await create(session);
	}

	private async sendMessagePrivate(phone: string, message: string) {
		const prefix = '@c.us'

		console.log(`Sending message to: ${phone}\n`)
		var result = await this.client.sendText(phone + "" + prefix, message)

		var log = { phone, message, 'status': result.status, 'error': result.erro }

		console.log(log)

		return log

	}

	/**
 * Send a message to one or more contacts of WhatsApp
 *
 * @param phones type array
 * @param message type string
 */
	async sendMessage(phones: string | string[], message: string) {

		if (typeof phones != 'string') {
			var result = []
			var index = 0
			for await (const item of phones) {
				var resp = await this.sendMessagePrivate(item, message)
				result.push({ index, ...resp })
				index++
			}
			return result
		} else {
			return await this.sendMessagePrivate(phones, message)
		}


	}

	private async sendImagePrivate(phone: string, path: string, imageName: string, caption: string) {
		const prefix = '@c.us'

		console.log(`Sending image to: ${phone}\n`)
		var result = await this.client.sendImage(phone + "" + prefix, path, imageName, caption)

		var log = { phone, path, imageName, caption, 'status': result.status, 'error': result.erro }

		console.log(log)

		return log

	}

	/**
	 * Send image for one contact of WhatsApp
	 *
	 * @param phone type string
	 * @param path  type string
	 * @param imageName type string
	 * @param captionText type string
 */
	async sendImage(phones: string | string[], path: string, imageName: string, caption: string) {

		if (typeof phones != 'string') {
			var result = []
			var index = 0
			for await (const item of phones) {
				var resp = await this.sendImagePrivate(item, path, imageName, caption)
				result.push({ index, ...resp })
				index++
			}
			return result
		} else {
			return await this.sendImagePrivate(phones, path, imageName, caption)
		}


	}

	private async sendLinkPreviewPrivate(phone: string, link: string, message: string) {
		const prefix = '@c.us'

		console.log(`Sending LinkPreview to: ${phone}\n`)
		var result = await this.client.sendLinkPreview(phone + "" + prefix, link, message)

		var log = { phone, link, message, 'status': result.status, 'error': result.erro }

		console.log(log)

		return log

	}

	/**
	 * Send a message with link preview of video for a contact of WhatsApp
	 *
	 * @param phone type string
	 * @param link type string
	 * @param message type string
	 */
	async sendLinkPreview(phones: string | string[], link: string, message: string) {

		if (typeof phones != 'string') {
			var result = []
			var index = 0
			for await (const item of phones) {
				var resp = await this.sendLinkPreviewPrivate(item, link, message)
				result.push({ index, ...resp })
				index++
			}
			return result
		} else {
			return await this.sendLinkPreviewPrivate(phones, link, message)
		}


	}

	private async sendLocationPrivate(phone: string, latitude: string, longitude: string, local: string) {
		const prefix = '@c.us'

		console.log(`Sending Location to: ${phone}\n`)
		var result = await this.client.sendLocation(phone + "" + prefix, latitude, longitude, local)

		var log = { phone, latitude, longitude, local, 'status': result.status, 'error': result.erro }

		console.log(log)

		return log

	}

	/**
 * Send Location  for one contact of WhatsApp
 *
 * @param phone type string
 * @param latitude type string
 * @param longitude type string
 * @param local type string
 */
	async sendLocation(phones: string | string[], latitude: string, longitude: string, local: string) {

		if (typeof phones != 'string') {
			var result = []
			var index = 0
			for await (const item of phones) {
				var resp = await this.sendLocationPrivate(item, latitude, longitude, local)
				result.push({ index, ...resp })
				index++
			}
			return result
		} else {
			return await this.sendLocationPrivate(phones, latitude, longitude, local)
		}


	}









}

export default BrazukaZap
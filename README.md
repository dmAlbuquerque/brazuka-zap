# Send messages for free via WhatsApp

## Note
**Brazuka-Zap** is an **unofficial** solution. We are not responsible for its use in production. 


<br>

# Installation
```shell 
npm i brazuka-zap
```

or

```shell 
yarn add brazuka-zap
```

<br>

# Usage

At the beginning it will display a QR Code on Terminal, just scan it using WhatsApp app. Your session will be remembered, there is no need to authenticate everytime.

<br>

# Table of Contents
1. [Start Very Important](#1)
2. [Send message to one contact](#2)
3. [Send the same message to many contacts](#3)
4. [Send the image](#4)
5. [Send the link preview](#5)
6. [Send the location](#6)
7. [Creating a Bot](#7)

<br>

<a name="1"></a>

## Very Important
With the start function, you can define a name for the session (passed as a string parameter), so you can have multiple WhatsApp sessions at the same time.

<blockquote>
For the library to work correctly it is necessary to run the functions using async and await.
</blockquote>

<br>

```js
import BrazukaZap from 'brazuka-zap';

test()

async function test(){
	var brazuka = new BrazukaZap();
	await brazuka.start(); // or await brazuka.start('session_name');
}
```

<a name="2"></a>

## Send message to one contact
```js
import BrazukaZap from 'brazuka-zap';


const phone = '558812345678'
const message = 'I\'ll be there for you'

await brazuka.sendMessage(phone, message)
``` 

<br>

<a name="3"></a>

## Send the same message to many contacts
```js
import BrazukaZap from 'brazuka-zap';

const phones  = ['558812345678','556187654321']
const message = 'When the rain starts to pour'

await brazuka.sendMessage(phones, message)
``` 

<br>

<a name="4"></a>

## Send the Image
```js
import BrazukaZap from 'brazuka-zap';

const phone  = '558812345678'
const path   = 'path/to/image.jpg'
const imageName = 'my-image-name'
const caption = 'my-caption'

await brazuka.sendImage(phone, path, imageName, caption)
``` 
<br>

<a name="5"></a>

## Send the link preview
```js
import BrazukaZap from 'brazuka-zap';

const phone  = '558812345678'
const link   = 'https://youtu.be/RIjTq_OdFvo'
const message = 'You\'re still in bed at ten\nAnd work began at eight'

await brazuka.sendLinkPreview(phone, message)
``` 

<br>

<a name="6"></a>

## Send the Location
```js
import BrazukaZap from 'brazuka-zap';

const phone  = '558812345678'
const latitude = '-3.7594297599906294'
const longitude = '-40.81624143391349'
const local = 'Brasil'

await brazuka.sendLocation(phone, latitude, longitude, local)
``` 
<br>

<a name="7"></a>

# Creating a Bot
The Bot will be listening to WhatsApp connected, and when it receives a new message, the Bot will respond according to what was previously registered. You can use Artificial Intelligence to improve your Bot if you wish.

<br>

```js
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
			break
		}
	}
	})
	} catch (err) {
		console.log(err)
	}
```

## Example Response
```json
{
  "phone": "558812345678-1646089273",
  "message": "Hello, welcome to my awesome company!",
  "status": "OK",
  "error": false
}
```

### Customizing the message
To customize the message, you will have the following properties to use, via the <code>msg</code> variable passed in the <code>onMessage</code> function
```json
{
  "id":"false_558812345678-1646200718@g.us_1BG7C215D2D4F156AE84E0862DD58880",
  "body":"Hi",
  "type":"chat",
  "t":1636110320,
  "notifyName":"",
  "from":"558812345678-1646200718@g.us",
  "to":"558898765432@c.us",
  "author":"558812345678@c.us",
  "self":"in",
  "ack":0,
  "invis":false,
  "isNewMsg":true,
  "star":false,
  "recvFresh":true,
  "isFromTemplate":false,
  "broadcast":false,
  "mentionedJidList":[
    
  ],
  "isVcardOverMmsDocument":false,
  "isForwarded":false,
  "labels":[
    
  ],
  "ephemeralOutOfSync":false,
  "productHeaderImageRejected":false,
  "isDynamicReplyButtonsMsg":false,
  "isMdHistoryMsg":false,
  "chatId":"558812345678-1646200718@g.us",
  "fromMe":false,
  "sender":{
    "id":"558812345678@c.us",
    "name":"Daniel",
    "shortName":"Daniel",
    "pushname":"Daniel Albuquerque",
    "type":"in",
    "isBusiness":false,
    "isEnterprise":false,
    "statusMute":false,
    "labels":[
      
    ],
    "formattedName":"Daniel",
    "isMe":false,
    "isMyContact":true,
    "isPSA":false,
    "isUser":true,
    "isWAContact":true,
    "profilePicThumbObj":{
      "eurl":"https://pps.whatsapp.net/v/t61.24694-24/155555555_000000000000000_777441025896523658_n.jpg?ccb=11-4&oh=a5024da3cd299dbaf16b1da1a4a98ee6&oe=60F16F53",
      "id":"558812345678@c.us",
      "img":"https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F153312958_000000000000000_777441025896523658_n.jpg%3Fccb%3D11-4%26oh%3Da5024da3cd299dbaf16b1da1a4a98ee6%26oe%3D60F16F53&t=s&u=558812345678%40c.us&i=1613954550&n=q417zd84AaHW0He4pHzwT3lADc7RH%2BDbvUuDBwScb%2F4%3D",
      "imgFull":"https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F153312958_000000000000000_777441025896523658_n.jpg%3Fccb%3D11-4%26oh%3Da5024da3cd299dbaf16b1da1a4a98ee6%26oe%3D60F16F53&t=l&u=558812345678%40c.us&i=1613954550&n=q417zd84AaHW0He4pHzwT3lADc7RH%2BDbvUuDBwScb%2F4%3D",
      "raw":null,
      "tag":"1613454350"
    },
    "msgs":null
  },
  "timestamp":1836010520,
  "content":"Hi",
  "isGroupMsg":true,
  "isMedia":false,
  "isNotification":false,
  "isPSA":false,
  "chat":{
    "id":"558812345678-1646200718@g.us",
    "pendingMsgs":false,
    "lastReceivedKey":{
      "fromMe":true,
      "remote":"558812345678-1646200718@g.us",
      "id":"1IBRGOQDW44CNCDN9TFQ",
      "_serialized":"true_558812345678-1646200718@g.us_1IBRGOQDW44CNCDN9TFQ"
    },
    "t":1626118707,
    "unreadCount":0,
    "archive":false,
    "isReadOnly":false,
    "isAnnounceGrpRestrict":false,
    "muteExpiration":0,
    "name":"HL",
    "notSpam":true,
    "pin":0,
    "msgs":null,
    "kind":"group",
    "isGroup":true,
    "contact":{
      "id":"558812345678-1646200718@g.us",
      "name":"HL",
      "type":"in",
      "isBusiness":false,
      "isEnterprise":false,
      "statusMute":false,
      "labels":[
        
      ],
      "formattedName":"HL",
      "isMe":false,
      "isMyContact":false,
      "isPSA":false,
      "isUser":false,
      "isWAContact":false,
      "profilePicThumbObj":[
        "Object"
      ],
      "msgs":null
    },
    "groupMetadata":{
      "id":"558812345678-1646200718@g.us",
      "creation":1646200718,
      "owner":"558812345678@c.us",
      "restrict":false,
      "announce":false,
      "noFrequentlyForwarded":false,
      "ephemeralDuration":0,
      "support":false,
      "uniqueShortNameMap":{
        
      },
      "participants":[
        "Array"
      ],
      "pendingParticipants":[
        
      ]
    },
    "presence":{
      "id":"558812345678-1646200718@g.us",
      "chatstates":[
        "Array"
      ]
    },
    "isOnline":true,
    "lastSeen":null
  }
}
```

<br>

## 🛠️ Coming soon 🛠️
New functions will be added soon.
<br>

## 🚀 Contribution
Contributions make the open source community an amazing place to learn, inspire and create. Any contribution you make will be **much appreciated**.
<br>

## ✔️ License
Distributed under license [MIT](LICENSE). © Daniel Albuquerque


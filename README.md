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
	var brazuka = await new BrazukaZap();
	await brazuka.start(); // or await brazuka.start('session_name');
}
```

<a name="2"></a>

## Send message to one contact
```js
import BrazukaZap from 'brazuka-zap';


const phone = ['558812345678']
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

## 🛠 Coming soon 🛠
New functions will be added soon.
<br>

## 🚀 Contribution
Contributions make the open source community an amazing place to learn, inspire and create. Any contribution you make will be **much appreciated**.
<br>

## ✔️ License
Distributed under license [MIT](LICENSE). © Daniel Albuquerque


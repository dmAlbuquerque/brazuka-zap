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

## Send message to a contact
```js
const brazuka = require('brazuka-zap')

const phone = ['558812345678']
const message = 'I\'ll be there for you'

brazuka.sendMessage(phone, message)
``` 

<br>

## Send the same message to many contacts
```js
const brazuka = require('brazuka-zap')

const phones  = ['558812345678']['556187654321']
const message = 'When the rain starts to pour'

brazuka.sendMessage(phones, message)
``` 

<br>


## Send the Image
```js
const brazuka = require('brazuka-zap')

const phone  = '558812345678'
const path   = 'path/to/image.jpg'
const imageName = 'my-image-name'
const text = 'my-caption'

brazuka.sendImage(phone, path, imageName, message)
``` 
<br>

## Send the link preview
```js
const brazuka = require('brazuka-zap')

const phone  = '558812345678'
const link   = 'https://youtu.be/RIjTq_OdFvo'
const message = 'You\'re still in bed at ten\nAnd work began at eight'

brazuka.sendLinkPreview(phone, message)
``` 

<br>

## Send the Location
```js
const brazuka = require('brazuka-zap')

const phone  = '558812345678'
const latitude = '-3.7594297599906294'
const longitude = '-40.81624143391349'
const text = 'You\'re still in bed at ten\nAnd work began at eight'

brazuka.sendLocation(phone, latitude, longitude, text)
``` 


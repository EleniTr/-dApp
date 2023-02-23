const express = require('express')
const app = express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

import { create } from 'ipfs-http-client'

const ipfs = create({ host: 'infura.ipfs.io', port: '5001', protocol: 'http' })

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/src/app/components/song-list/song-list.component.html')
})

app.post('/profile', upload.single('ipfsForm_file'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(res.file);
})
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
  ipfs.add(data,[options])
})

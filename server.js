//let test = require("@chromasdk/chromajs");

//console.log(new test.Keyboard().setAll(test.Color.Red));
//console.log(new test.Keyboard());
//console.log(test.Color);

const Sonus = require('sonus')
const speech = require('@google-cloud/speech')({
	projectId: 'hal0-1537696578769',
	keyFilename: './keyfile.json'
})

const hotwords = [{ file: 'jarvis.pmdl', hotword: 'jarvis' }]
const sonus = Sonus.init({ hotwords }, speech)

Sonus.start(sonus)
sonus.on('hotword', (index, keyword) => console.log("!"))
sonus.on('final-result', console.log)

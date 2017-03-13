const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(bodyParser.json());
app.use(express.static(__dirname + './../testapp-front/build'));

app.get('/test', (req, res) => {
    res.send('Its working!...found endpoint');

});

app.listen(PORT, () => {
    console.log('Server running. Listening on Port:%s', PORT)
    console.log('Stop with Ctrl+C')
})
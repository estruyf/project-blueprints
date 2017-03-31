var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + "/public/", {redirect: false}));

app.use('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
})

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

var server = app.listen(app.get('port'), () => {
    console.log(`Express server listening to port ${server.address().port}`);
});
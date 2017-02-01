var express = require('express'),
    path = require('path'),
    app = express(),
    port = 8080;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/templates/ken/index.html'));
});

app.use("/assets", function(req, res) {
    var file = req.url = (req.url.indexOf('?') != -1) ? req.url.substring(0, req.url.indexOf('?')) : req.url;
    res.sendFile(path.join(__dirname, "assets/", req.url));
});
app.use(express.static(path.join(__dirname + '/templates/ken/')));

app.listen(port, function () {
    console.log("App listening on: http://localhost:" + port);
});
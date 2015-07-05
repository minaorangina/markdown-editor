var express = require('express'),
    app = express();
require('./routes.js')(app);

// set the view engine to ejs
app.set('view engine', 'ejs');

// public folder to store assets
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));

// listen on port 8000 or the defined port for heroku
var port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log("Markdown editor listening at port " + port);
});

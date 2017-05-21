/**
 * Created by Vitos on 21.05.2017.
 */
var express = require('express');

var app = express();

//routes


//home
app.get('/', function (req, res) {
    res.send('Tutor app is running...');
})

app.listen(3000, function () {
    console.log("Express is running on port 3000...");
});


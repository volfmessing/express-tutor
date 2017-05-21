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
//get episode pages
app.get('/star_wars_episode/:episode_number', function (req, res) {
    var episode = req.params.episode_number;
    res.send("This is the page for episode: " + episode);
});

app.listen(3000, function () {
    console.log("Express is running on port 3000...");
});


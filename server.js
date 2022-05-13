

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


app.set('view engine', 'ejs');

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})


app.get('https://intense-woodland-48789.herokuapp.com/', function(req, res) {
    res.send('/public/index.html');
});

app.use(express.static('./public'));
app.use(express.static('/public/pikachu.jpg/'))
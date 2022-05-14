

const express = require('express');
const app = express();

const bodyparser = require("body-parser");

const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());


app.set('view engine', 'ejs');

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})

app.use(bodyparser.urlencoded({
  extended: true
}));


mongoose.connect("mongodb+srv://packobtainer:37h3YwU3pc9Axpi@cluster0.xw7wz.mongodb.net/test", {useNewUrlParser: true, useUnifiedTopology: true});

const TimesSchema = new mongoose.Schema({
    text: String,
    hits: Number,
    time: Date
});

const PokeSchema = mongoose.Schema({
    abilities: Array,
    base_experience: Number,
    forms: Array,
    game_indices: Array,
    height: Number,
    held_items: Array,
    id: Number,
    is_default: Boolean,
    location_area_encounters: String,
    moves: Array,
    name: String,
    order: Number,
    past_types: Array,
    species: Object,
    sprites: Object,
    stats: Array,
    types: Array,
    weight: Number
})

const timeLineModel = mongoose.model("times", TimesSchema);

const pokeModel = mongoose.model("pokemon", PokeSchema);

app.get('/pokemon/getPoke', function(req, res) {

  pokeModel.find({}, function(err, data){
      if (err){
        console.log("Error " + err);
      }else{
        console.log("Data "+ JSON.stringify(data) );
      }
      res.send(JSON.stringify(data));
  });
})
for (var x = 1; x < 31; x++) {
  app.get(`/pokemon/getPoke/${x}`, function(req, res) {

    pokeModel.find({id: `${x}`}, function(err, data){
        if (err){
          console.log("Error " + err);
        }else{
          console.log("Data "+ JSON.stringify(data) );
        }
        res.send(JSON.stringify(data));
    });
  })
}
app.get('/times/getAllEvents', function(req, res) {

  timeLineModel.find({}, function(err, data){
      if (err){
        console.log("Error " + err);
      }else{
        console.log("Data "+ JSON.stringify(data) );
      }
      res.send(JSON.stringify(data));
  });
})

app.put('/times/insert', function(req, res) {
  timeLineModel.create({
    'text': req.body.text,
    'hits': req.body.hits,
    'time': req.body.time
  }, function(err, data){
    if (err){
      console.log("Error " + err);
    }else{
      console.log("Data "+ JSON.stringify(data) );
    }
    res.send(JSON.stringify(data));


});
})


app.get('https://intense-woodland-48789.herokuapp.com/', function(req, res) {
    res.send('/public/index.html');
});

app.get('https://intense-woodland-48789.herokuapp.com/index.html', function(req, res) {
    res.send('/public/index.html');
});

app.get('https://intense-woodland-48789.herokuapp.com/profile.html', function(req, res) {
    res.send('/public/profile.html');
});

app.get('https://intense-woodland-48789.herokuapp.com/search.html', function(req, res) {
    res.send('/public/search.html');
});

app.use(express.static('./public'));
app.use(express.static('/public/pikachu.jpg/'))


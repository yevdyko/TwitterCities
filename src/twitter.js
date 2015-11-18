var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var params = {
    q: ' ',
    count: 2
    geocode:
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
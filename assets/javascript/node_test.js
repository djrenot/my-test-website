require('dotenv').config();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

client.get('statuses/user_timeline', {screen_name: 'djrenot',count: 1}, function(error, tweets, response) {
  // console.log(tweets);  
  // show body text of the tweet (text)
  // let tweet_area = document.getElementById('tweet_area');
  // tweet_area.innerHTML =
  console.log(tweets[0].text);
  
    // tier link to the original tweet on the text (https://twitter.com/[id_str])
    console.log(tweets[0].id);
  // show the date tweeted (created_at)
  console.log(tweets[0].created_at);
});
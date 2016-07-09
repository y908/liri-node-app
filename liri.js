
//=================================================TWITTER================================================================  
function my-tweets(){
  var Twitter = require('twitter');
  var keys = require('./keys.js');
   
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });
     
  var params = {screen_name: 'yana_y908'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      console.log(tweets);
    }
  });
  }

//=================================================SPOTIFY================================================================ 
function spotify-this-song(){
  var spotify = require('spotify');
   
  spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
   
      // Do something with 'data' 
  });
}

//===============================================DO WHAT IT SAYS========================================================== 
function do-what-it-says(){
  var request = require('request');
  request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})

}
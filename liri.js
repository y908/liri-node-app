console.log(process.argv); 
//=================================================TWITTER================================================================  
/*function myTweets(){
  var Twitter = require('twitter');
  var keys = require('./keys.js');
   
  var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
  });
     
  var params = {screen_name: 'yana_y908'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      console.log(tweets);
    }
  });
  }

  myTweets();

//=================================================SPOTIFY================================================================ 
function spotifyThisSong(){
  var spotify = require('spotify');
   
  spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
   
   console.log(data);
      // Do something with 'data' 
  });
}

spotifyThisSong();
*/

//===============================================DO WHAT IT SAYS========================================================== 


/*function doWhatItSays(){
  var request = require('request');
  request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})

}

doWhatItSays();
*/

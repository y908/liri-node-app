


//==============================================Liri Bot==============================================
var inquirer = require('inquirer');

// Created a series of questions 
inquirer.prompt([

  {
    type: "list",
    name: "selection",
    message: "Hiya! I'm LiriBot. What do you want to see?",
    choices: ["My Tweets", "A Song", "Something Else",] 
  }

]).then(function(user) {

  if (user.selection == "My Tweets"){
       myTweets();
  }

  else if (user.selection == "A Song"){
      spotifyThisSong();
  }

  else{
      console.log(":D I don't know what I'm doing.");
  }


});





//=================================================TWITTER==============================================  
function myTweets(){
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
      for (var i=0; i<tweets.length && i < 20; i++) {
          console.log("----------------------------------");
          console.log(tweets[i].text);
        }console.log("-----------------------------------");
    }
  });
  }


//=================================================SPOTIFY================================================================ 
function spotifyThisSong(){
  var spotify = require('spotify');
   
  spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }else{
           console.log("Artist:" + data.tracks.items[0].artists[0].name);
           console.log("Song Name:" + data.tracks.items[0].name);
           console.log("Link:" + data.tracks.items[0].preview_url);
           console.log("Album:" + data.tracks.items[0].album.name);
           }
  });
}




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
console.log(process.argv);


//==============================================Liri Bot==============================================
var inquirer = require('inquirer');

// Created a series of questions 
inquirer.prompt([

  {
    type: "list",
    name: "selection",
    message: "Hiya! I'm LiriBot. What do you want to see?",
    choices: ["My Tweets", "Info of a Song", "Something Else", ] 
  }

]).then(function(user) {

  if (user.selection == "My Tweets"){
       myTweets();
  }

  else{
        console.log("this works 2222");
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
      for (var i=0; i<tweets.length && i < 5; i++) {
          console.log("----------------------------------");
          console.log(tweets[i].text);
        }console.log("-----------------------------------");
    }
  });
  }


//=================================================SPOTIFY================================================================ 
/*function spotifyThisSong(){
  var spotify = require('spotify');
   
  spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }j
   
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
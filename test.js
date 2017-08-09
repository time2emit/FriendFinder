var candidate = { name: 'sdsdsd',
  photo: 'sdfsdfdssdf',
  scores: [ '1', '1', '1', '1', '1', '1', '1', '1', '1', '1' ] }

 var friends = require("./app/data/friends.json");

 console.log(candidate);
 console.log(friends); 



for (var i = 0; i < friends.length; i++) {
	var score = 0;
	var friend = friends[i];
	for (var j = 0; j < 10; j++) {
		score += Math.abs(candidate.scores[j] - friend.scores[j]);
	}
	console.log(score);
}
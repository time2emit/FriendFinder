// LOAD DATA
var friendsData = require("../data/friends.json");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
      res.json(friendsData[0]);
      formCandidate = req.body;
      console.log(formCandidate.scores[0]);
  });
};
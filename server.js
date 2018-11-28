var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// =============================================================
//  URL data parsing
// =============================================================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
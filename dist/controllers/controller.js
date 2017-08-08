'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeController = homeController;
exports.devController = devController;
exports.queryController = queryController;
// Serve the template's index.html file
function homeController(req, res) {
  res.status(200).sendFile('C:/Users/Nypro/Desktop/HelloBooks/template/index.html');
}

// Send default response for testing purpose
function devController(req, res) {
  res.status(200).send('Hello there!');
}

// Send default response for testing purpose
function queryController(req, res) {
  res.status(200).send('Using query string!');
}
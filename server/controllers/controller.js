// Serve the template's index.html file
export function homeController(req, res) {
  res.status(200).sendFile('C:/Users/Nypro/Desktop/HelloBooks/template/index.html');
}

// Send default response for testing purpose
export function devController(req, res) {
  res.status(200).send('Hello there!');
}

// Send default response for testing purpose
export function queryController(req, res) {
  res.status(200).send('Using query string!');
}

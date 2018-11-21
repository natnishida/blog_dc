var http = require('http');

http.createServer( function(req, res) {
  var categoria = req.url;
  if (categoria == "/discografia") {
  res.end("<html><body>Discografia</body></html>");
} else if (categoria == "/equipe") {
  res.end("<html><body>Equipe</body></html>");
} else if (categoria == "/contato") {
  res.end("<html><body>Contato</body></html>");
} else if (categoria == "/shows") {
  res.end("<html><body>Shows</body></html>");
} else if (categoria == "/galeria") {
  res.end("<html><body>Galeria</body></html>");
} else {
  res.end("<html><body>Dashboard Confessional</body></html>");
}



}).listen(3000);

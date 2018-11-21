const app = require('./config/server');

// const rotaPosts = require('./app/routes/posts')(app);
// const rotaHome = require('./app/routes/home')(app);
// const rotaForm = require('./app/routes/form_posts')(app);

app.listen(3000, function(){
  console.log("Servidor ON");
});

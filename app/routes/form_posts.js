module.exports = function(app){
  app.get('/form_posts', function(req, res){
    res.render("admin/form_add_post.ejs");
  });
  
}

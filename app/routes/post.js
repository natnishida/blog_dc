module.exports = function(app) {

  app.get('/post', function(req, res){
    var connection = app.config.dbConnection();
    var postsModel = app.app.models.postsModel;

    postsModel.getPost(connection, function(error, result){
      res.render("posts/post", {post : result});
    });
  });
};

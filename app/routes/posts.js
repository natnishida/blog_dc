//const dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

  app.get('/posts', function(req, res){
    const connection = app.config.dbConnection();
    const postsModel = app.app.models.postsModel;

    postsModel.getPosts(connection, function(error, result){
      res.render("posts/posts", {posts : result});
    });
  });
};

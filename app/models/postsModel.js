module.exports = function() {
  this.getPosts = function(connection, callback){
        connection.query('select * from posts', callback);
  };
  this.getPost = function (connection, callback) {
      connection.query('select * from posts where id_post = 2', callback);
  }
  return this;
}

var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new views.PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });


console.warn('.myform');
  $('.myform').on('submit', function(event){
    event.preventDefault();
    $(document).trigger('create:post', [{title: "Title", body: "Body"}]);

  });

  models.Post.fetch();
});

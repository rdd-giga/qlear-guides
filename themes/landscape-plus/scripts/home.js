
hexo.extend.helper.register('home', function(page){
  var categories = hexo.locals.get('categories').data;
  var posts = {};
  // for (var cat in categories) {
  //   names.push(categories[cat].name);
  // };
  page.posts.each(function(post) {
    post.categories.each(function(cat) {
      if (posts[cat.name]) {
        posts[cat.name].push(post);
      } else {
        posts[cat.name] = [];
        posts[cat.name].push(post);
      }
    })
  });
  return posts;
});
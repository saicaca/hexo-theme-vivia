// Simple wordcount function, rough but efficient and dependency free
// 简易字数统计，无需依赖包
hexo.extend.helper.register('symbolsCount', function(post){
  // Remove <a> tags and their content
  var contentWithoutATags = post.content.replace(/<a\b[^>]*>(.*?)<\/a>/gi, '');

  // Remove any remaining HTML tags
  var contentWithoutTags = contentWithoutATags.replace(/<\/?[^>]+(>|$)/g, '');

  // Count the length of the resulting content
  return contentWithoutTags.length;
})
// Simple wordcount function, rough but efficient and dependency free
// 简易字数统计，无需依赖包
hexo.extend.helper.register('symbolsCount', function(post) {
  // Remove any remaining HTML tags
  var contentWithoutTags = post.content.replace(/<\/?[^>]+(>|$)/g, '');
  
  // Match English words
  var englishWords = contentWithoutTags.match(/\b\w+\b/g) || [];
  var englishWordCount = englishWords.length;
  
  // Match Chinese characters
  var chineseCharacters = contentWithoutTags.match(/[\u4e00-\u9fff]/g) || [];
  var chineseCharacterCount = chineseCharacters.length;

  // Match Japanese kana
  var japaneseKana = contentWithoutTags.match(/[\u3040-\u309F\u30A0-\u30FF]/g) || [];
  var japaneseKanaCount = japaneseKana.length;
  
  // console.log(post.content);
  // console.log("=============================")
  // console.log(contentWithoutTags);
  // console.log(englishWords);
  // console.log(chineseCharacters);
  // console.log(japaneseKana);
  // Total word count based on different character types

  return englishWordCount + chineseCharacterCount + japaneseKanaCount;
});
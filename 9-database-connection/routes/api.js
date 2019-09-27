var express = require('express');
var router = express.Router();
const ArticleModel = require('../models/article')
/* GET users listing. */
// router.get('/addArticle', function(req, res, next) {
//   const article = new ArticleModel({
//     title: 'My title 1',
//     content: 'My content '
//   })
//   article.save();
//   res.send('ok');
// });

router.post('/addArticle', function(req, res, next) {
  const { title, content } = req.body
  const article = new ArticleModel({
    title: title,
    content: content
  })
  article.save();
  res.send('ok');
});

module.exports = router;

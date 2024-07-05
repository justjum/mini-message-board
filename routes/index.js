var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello there",
    user: "Amanda",
    added: new Date()
  },
  {
    text: "Hello world",
    user: "Charlie",
    added: new Date()
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Message Add'});
})

router.post('/new', function(req, res, next) {
  const { user, messageText } = req.body;
  let message = {text: messageText, user: user, added: new Date()};
  messages.push(message);
  res.render('index', { title: 'Mini Message Board', messages: messages });
})

module.exports = router;

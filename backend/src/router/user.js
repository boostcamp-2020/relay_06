// Dependencies
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const user = {
  pw: '12345678'
}

router.get('/signup', async (req, res, next) => {
  const { id, pw } = req.body;

  const hashedPW = await bcrypt.hash(pw, 12);
  return res.json({result: true});
})

router.post('/signin', async (req, res, next) => {
  const { id, pw } = req.body;

  const comparePW = await bcrypt.compare(pw, user.pw);
  if(comparePW){
    return res.json(user);
  }
  return res.json(user);
})

router.get('/recommend', (req, res, next) => {
  
})

module.exports = router;
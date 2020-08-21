// Dependencies
const express = require('express');
const fs = require('fs');
const router = express.Router();

// db
const userDbPath = './user.json';
const userData = require('../../user.json').user;

let user = { //현재 로그인 한 사용자
  id: '',
  pw: '',
  hobby: ''
}

router.post('/signup', async (req, res, next) => { // 회원가입
  const { id, pw, hobby } = req.body;
  const validity = userData.findIndex(val=> val.id===id);
  
  if(validity === -1) {
    const input = {
      id : id,
      pw : pw,
      hobby : hobby
    }
    userData.push(input);
	  console.log(userData);
	  fs.writeFileSync(userDbPath, JSON.stringify({user : userData}), (err) => {
      if(err) {
        console.log(err);
        return res.status(500).send('서버 에러...');
      }
    })
    return res.json({result: true});
  } else {
    return res.status(409).send('입력한 아이디가 중복됩니다.');
  }
})

router.post('/signin', async (req, res, next) => { // 로그인 > 잘 동작
  const { id, pw } = req.body;
  const validityIdx = userData.findIndex(val=> val.id===id);
  const testUser = userData[validityIdx];

  if(validityIdx !== -1){
    if(pw === testUser.pw){
      user = userData[validityIdx];
      return res.json(user);
    } return res.status(402).send('비밀번호가 다릅니다');
  } else return res.status(402).send('입력한 아이디가 없습니다');
})

router.get("/recommend", (req, res, next) => {
  let recommended = [];

  userData.forEach(function (val) {
    var arr = user.hobby.split(", ");
    var arr2 = val.hobby.split(", ");

    for (var element of arr2) {
      if (arr.includes(element) && val.id !== user.id) {
        recommended.push(val);
        break;
      } 
    }
  });

  if (recommended.length >= 4) recommended = getRandom(recommended, 4);
  else recommended = recommended.concat([...getRandom(userData.filter(v => !recommended.includes(v) && v.id === user.id), 4 - recommended.length)]);

  return res.status(200).json(recommended);
});

module.exports = router;

const getRandom = (arr, num) => {
  if (arr.length <= num) return arr;

  const res = [];
  while (true) {
      let idx = Math.random() * (arr.length - 1) | 0;
      if (!res.includes(arr[idx])) {
          res.push(arr[idx]);
          num--;
      }
      if (num === 0) return res;
  }
}


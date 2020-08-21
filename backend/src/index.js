// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

// routes
const userAPIRouter = require('./router/user');

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userAPIRouter);

server.listen(8000, () => {
  console.log('서버 실행 중')
})
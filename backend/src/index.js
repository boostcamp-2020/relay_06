// Dependencies
const express = require('express');
const http = require('http');
const cors = require('cors');

// routes
const userAPIRouter = require('./router/user');

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userAPIRouter);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

server.listen(8000, () => {
  console.log('서버 실행 중')
});

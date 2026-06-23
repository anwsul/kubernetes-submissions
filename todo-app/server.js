const http = require('node:http');
const port = process.env.PORT;

const server = http.createServer((req, res) => {});

server.listen(port, () => {
  console.log(`Server started in port ${port}`);
});


const app = require("./app/app");
require("dotenv").config();
const http = require("http");
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listing port on ${port}`);
});

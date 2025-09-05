const http = require("http");

const content = `HTTP lecture
1. Basic
  1.1 HTTP Start
  1.2 HTTP Message 
2. Web Browser
 2.1 Content Negotiation
 2.2 Cookie
 `;

const handler = (req, res) => {
  res.write(content)
  res.end();
};

const server = http.createServer(handler);
server.listen(3000, () => console.log("server is running ::3000"));

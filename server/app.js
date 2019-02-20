const http = require('http');
const path = require('path');
const StringDecoder = require('string_decoder').StringDecoder;
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let reqUrl = url.parse(req.url, true);
  let pathName = reqUrl.pathname;
  let trimmedPath = pathName.replace(/^\/|\/$/g, '');

  let headers = req.headers;
  console.log('Headers', headers);
  let queryString = reqUrl.query;
  console.log('Query', queryString);
  let method = req.method.toLowerCasleae();
  console.log('method', method);


  let buffer = '';
  let decoder = new StringDecoder('utf-8');

  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();
  });

  res.writeHead(200);
  res.write('hello World!');
  res.end();

});

server.listen(PORT, () => {
  console.log('\x1b[45m%s\x1b[0m', `App is running and listening on PORT: ${PORT}`);
});
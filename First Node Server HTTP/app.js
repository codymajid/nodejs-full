const http = require('http');
const PORT = 5000;

const server = http.createServer((req,res) => {
    console.log("req" , req);
})

server.listen(PORT, () => {
    console.log("server is listening at port:", PORT);
});
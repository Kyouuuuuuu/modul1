const http = require('http');

const server = http.createServer (() => {
    console.log("Mantap boskuuu")
});
const PORT = 8080;
server.listen(PORT, ()=>{
    console.log("Udh jalan nih boskuu....");
});
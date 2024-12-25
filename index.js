const http=require('http');
const server=http.createServer((req, res) => {
    if(req.url==='/') {
        res.end(`
            <h1>Hello from Sharpener</h1>
            <h1>This is the Homepage<h1>
            <h1>This is page 11</h1>`);
    }

})

server.listen(5000, () => {
    console.log("Server is running");
});
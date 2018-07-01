const { fork } = require('child_process');
const http = require('http');

const longComputation = () => {
    let sum = 0;
    for(let i = 0; i < 1e9; i++) {
        sum += 1;
    }
    return sum;
}

const server = http.createServer();
server.on('request', (req,res) => {
    if(req.url === '/compute') {
        const compute = longComputation();
        res.end(`Sum is ${sum}`);
    } else {
        res.end('Ok');
    }
});

server.listen(3000, () => console.log('Listening on port 3000'));
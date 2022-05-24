
Iniciado com npm i -D esm

criado "start":"node -r esm ."

### minimu implementation

import {createServer} from 'http';

const server = createServer();

server.listen(8000, '127.0.0.1',()=>{
    console.log('Server Running ')
})


### Simples implementation

import {createServer} from 'http';

const server = createServer((request,response) =>{
    switch(request.url){
        case '/status':{
            response.writeHead(200);
            response.write('Okay');
            response.end();
            return;
        }
    }
});

server.listen(8000, '127.0.0.1',()=>{
    console.log('Server Running localhost:8000 ')
})

### implementation v2

import {createServer} from 'http';

const server = createServer((request, response) =>{
    console.log(request.url)
    switch(request.url){
        case '/status':{
            response.writeHead(200, {
                'Content-Type': 'application/json',
            });
            response.write(JSON.stringify({
                status:'Ok'
              })
            );
            response.end();
            break;
        }
        default:{
            response.writeHead(404,'Server not Found');
            response.write('Failed');
            response.end();
            break;
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT):8082
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

server.listen(8082, '127.0.0.1',()=>{
    console.log(`Server Running at http://${HOSTNAME}: ${PORT} `)
})
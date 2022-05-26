import {createServer} from 'http';
import { parse } from 'querystring';
import express from 'express';
import cors from 'cors';
import {ApolloServer, gql} from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

// const server = express();


// server.get ('/authenticate',(_,response)=>{
//     response.send({
//         status:"Okay",
//     })
// })

// const enableCors = cors ({origin: 'http://localhost:3000'})
// server
// .options('/authenticate',enableCors)
// .post('/authenticate',enableCors,express.json(), (request, response)=>{
//     console.log(
//         'E-mail', request.body.email,
//         'Senha', request.body.password
//     )
//     response.send({
//         Okay:true,
//     })
// })

const app= express()



async function startServer(){

    const  server = new ApolloServer({
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
        typeDefs:gql`
            type Client{
                id:ID!
                name:String!
            }
    
            type Demand{
                id: ID!
                name:String!
                client:Client!
                deadline:String
            }
    
            type Query{
                demands:[Demand]!
            }
        `,
        resolvers:{
            Query:{
                demands:()=>[],
            }
        }
    })

await server.start();

server.applyMiddleware({
    app,
    cors:{
        origin: `http://${HOSTNAME}:3000`,
    },
    bodyParserConfig: true,
});
}

startServer();
const PORT = process.env.PORT ? parseInt(process.env.PORT):8083
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

app.listen(PORT, HOSTNAME,()=>{
    console.log(`Server Running at http://${HOSTNAME}: ${PORT} `)
})
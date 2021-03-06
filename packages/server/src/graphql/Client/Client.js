import {gql} from 'apollo-server-express';
//import * as uuid from 'uuid';
import createRepository from '../../io/Database/createRepository';

const clientRepository = createRepository('client');

export const typeDefs= gql`
    type Client{
        id:ID!
        name: String!
        email: String!
        disabled: Boolean!
    }
    extend type Query{
        client(id: ID!): Client
        clients: [Client!]!
    }
`;

export const resolvers ={
    Query:{
        client: async(
            _, 
            { id }, //id
            //{  }, //global
            //info
        )=>{
            const clients = await clientRepository.read();
            console.log(clients)
            return clients.find((client) => client.id === id)
    }}
}
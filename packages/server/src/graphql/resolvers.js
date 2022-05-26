import {gql} from 'apollo-server-express';
import {resolvers as demandResolvers} from './Demand/Demand';
import { resolvers as nodeResolvers } from './Node/Node';


const resolvers = {
    ...demandResolvers,

    Query:{
        ...demandResolvers.Query,
    },
};

export default resolvers;
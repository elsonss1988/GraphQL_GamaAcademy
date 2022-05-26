import {gql} from 'apollo-server-express';
import { typeDefs as clientTypeDefs, typeDefs} from "./Client/Client";
import { typeDefs as demandTypeDefs} from "./Demand/Demand";
import { typeDefs as nodeTypeDefs } from './Node/Node';


const tyoeDefs = gql`
    type Query{
        _root:String
    }
    ${nodeTypeDefs}
    ${clientTypeDefs}
    ${demandTypeDefs}
`;

export default typeDefs
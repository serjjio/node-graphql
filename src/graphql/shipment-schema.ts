import { buildSchema } from 'graphql';

export default buildSchema(`
    type Mutation {
        createShipment(inputData: ShipmentInput!): ShipmentOutput!
    }
    
    
`);

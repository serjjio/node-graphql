import { buildSchema } from 'graphql';

export default buildSchema(`
    type Mutation {
        createShipment(inputData: ShipmentInput!): ShipmentOutput!
    }
    
    input ShipmentInput {
        orderId: Int!
    }
    
    type ShipmentOutput {
        order: Order!
        shipment: Shipment
        
    }
    
    type Order {
        orderId: Int!
        orderIncrement: String!
    }
    
    type Shipment {
        incrementId: String!
        tracks: [Tracking]
    }
    
    type Tracking {
        trackNumber: String
        carrierCode: String
    }
`);

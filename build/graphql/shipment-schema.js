import { buildSchema } from 'graphql';
export default buildSchema(`
    type Product {
        title: String!
        identifier: String!
    }

    type ProductData {
        items: [Product!]!
        totalProducts: Int!
        pageSize: Int!
    }

    input ProductInputData {
        limit: Int
    }

    type Query {
        shipment(inputData: ProductInputData!): ProductData!
    }
`);
//# sourceMappingURL=shipment-schema.js.map
import { buildSchema } from 'graphql';

export default buildSchema(`
    type Product {
        title: String!
        identifier: String!
    }

    type ProductOutputData {
        items: [Product!]!
        totalProducts: Int!
        pageSize: Int!
    }

    input ProductInputData {
        limit: Int
    }

    type Query {
        products(inputData: ProductInputData!): ProductOutputData!
    }
`);

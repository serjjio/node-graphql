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
        products(inputData: ProductInputData!): ProductData!
    }
`);
//# sourceMappingURL=product-schema.js.map
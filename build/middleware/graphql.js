import { graphqlHTTP } from 'express-graphql';
import schema from '../graphql/combined-schema.js';
import magento from '../graphql/resolvers/magento/combined-resolver.js';
import shopify from '../graphql/resolvers/shopify.js';
import defaultResolver from '../graphql/resolvers.js';
//Calculates resolvers depending on the platform
const graphql = (req, res) => {
    let resolver = undefined;
    switch (process.env.BACKEND_PLATFORM) {
        case 'magento2':
            resolver = magento;
            break;
        case 'shopify':
            resolver = shopify;
            break;
        default:
            resolver = defaultResolver;
    }
    const graphqlMiddleware = graphqlHTTP({
        schema: schema,
        rootValue: resolver,
    });
    graphqlMiddleware(req, res);
};
export default graphql;
//# sourceMappingURL=graphql.js.map
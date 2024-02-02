import { graphqlHTTP } from 'express-graphql';

import graphqlSchema from '../graphql/schema.js';
import magento from '../graphql/resolvers/magento2.js';
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
    schema: graphqlSchema,
    rootValue: resolver,
  });

  graphqlMiddleware(req, res);
}

export default graphql;
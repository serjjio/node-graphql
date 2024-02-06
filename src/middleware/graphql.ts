import { graphqlHTTP } from 'express-graphql';

import { Request, Response } from 'express';

import schema from '../graphql/combined-schema.js';
import magento from '../graphql/resolvers/magento/resolvers.js';
import shopify from '../graphql/resolvers/shopify/resolvers.js';

//Calculates resolvers depending on the platform
const graphql = (req: Request, res: Response) => {
  let resolver = undefined;

  switch (process.env.BACKEND_PLATFORM) {
    case 'magento2':
      resolver = magento;
      break;
    case 'shopify':
      resolver = shopify;
      break;
    default:
      throw new Error('Failed to determine resolver')
  }

  const graphqlMiddleware = graphqlHTTP({
    schema: schema,
    rootValue: resolver,
  });

  graphqlMiddleware(req, res);
}

export default graphql;
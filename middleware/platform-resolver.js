import magento from '../graphql/resolvers/magento2.js';
import shopify from '../graphql/resolvers/shopify.js';
import defaultResolver from '../graphql/resolvers.js';

//Calculates resolvers depending on the platform
const platformResolver = (req, res, next) => {
  switch (process.env.BACKEND_PLATFORM) {
    case 'magento2':
      req.resolver = magento;
      break;
    case 'shopify':
      req.resolver = shopify;
      break;
    default:
      req.resolver = defaultResolver;
  }
  next();
};

export default platformResolver;

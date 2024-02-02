import { mergeResolvers } from '@graphql-tools/merge';
import productResolvers from './product-resolver.js';
import shipmentResolvers from './shipment-resolver.js';
const resolvers = mergeResolvers([productResolvers, shipmentResolvers]);
export default resolvers;
//# sourceMappingURL=combined-resolver.js.map
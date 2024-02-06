import { mergeResolvers } from '@graphql-tools/merge';
import productResolvers from './product.js';
import shipmentResolvers from './shipment.js';

const resolvers = mergeResolvers([productResolvers, shipmentResolvers]);

export default resolvers;
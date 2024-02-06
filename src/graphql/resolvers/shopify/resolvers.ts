import { mergeResolvers } from '@graphql-tools/merge';
import productResolvers from './product.js';

const resolvers = mergeResolvers([productResolvers]);

export default resolvers;
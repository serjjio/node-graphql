import { mergeSchemas } from '@graphql-tools/schema';
import productSchema from './product-schema.js';
import shipmentSchema from './shipment-schema.js';

const schema = mergeSchemas({
    schemas: [productSchema, shipmentSchema],
});

export default schema;
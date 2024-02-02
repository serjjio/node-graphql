import { GraphqlService } from "../../services/graphql-service.js";
import ProductsSchema from '../schema/magento/Products.js';
import Product from '../../models/Product.js';
import { mergeResolvers } from 'merge-graphql-schemas';

const graphqlService = new GraphqlService(process.env.MAGENTO_GRAPHQL_URL);
export default {
    products: async (args, req) => {
        const variables = {filter: {}}
        if (args?.inputData.limit) {
            variables['pageSize'] = args.inputData.limit
        }
        const result = await graphqlService.sendQuery({
            query: ProductsSchema,
            variables: variables
        });

        const products = result?.data?.products?.items || [];

        return {
            items: products.map((product) => {
                return new Product(product.name, product.sku)
            }),
            totalProducts: result?.data?.products?.total_count || 0,
            pageSize: result?.data?.products?.page_info?.page_size || 0
        }
    }
}
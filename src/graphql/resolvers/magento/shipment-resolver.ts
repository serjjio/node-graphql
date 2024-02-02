// @ts-ignore
import { GraphqlService } from "../../../services/graphql-service.js";
// @ts-ignore
import ProductsSchema from '../../schema/magento/Products.js';
import Product from '../../../models/Product.js';

const graphqlService = new GraphqlService(process.env.MAGENTO_GRAPHQL_URL);
export default {
    shipment: async (args, req) => {
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
            items: [],
            totalProducts: 555,
            pageSize: 50
        }
    }
}
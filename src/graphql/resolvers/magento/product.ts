import { GraphqlService } from "../../../services/graphql-service.js";
import { PRODUCTS_QUERY } from '../../queries/magento/product.js';
import Product from '../../../models/Product.js';
import {MagentoProductInterface, QueryProductsArgs, ResolvedProducts, ProductsQueryVariables } from "../../../types/graphql/index.js";

const graphqlService = new GraphqlService(process.env.MAGENTO_GRAPHQL_URL!);

export default {
    products: async (args: QueryProductsArgs, context: any) => {
        const variables: ProductsQueryVariables  = {filter: {}}

        if (args?.inputData.limit) {
            variables['pageSize'] = args.inputData.limit
        }
        const result = await graphqlService.sendQuery({
            query: PRODUCTS_QUERY,
            variables: variables
        });

        const products: Array<MagentoProductInterface> = result?.data?.products?.items || [];

        const ResolvedProducts: ResolvedProducts = {
            items: products.map((product: MagentoProductInterface) => {
                return new Product(product.name, product.sku)
            }),
            totalProducts: result?.data?.products?.total_count || 0,
            pageSize: result?.data?.products?.page_info?.page_size || 0
        };

        return ResolvedProducts
    }
}
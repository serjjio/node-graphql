import { GraphqlService } from "../../../services/graphql-service.js";
import Product from '../../../models/Product.js';
import {ResolvedProducts} from "../../../types/graphql/product.js";

const graphqlService = new GraphqlService(process.env.MAGENTO_GRAPHQL_URL!);

export default {
    products: () => {
        const ResolvedProducts: ResolvedProducts = {
            items: [new Product('test', 'test')],
            totalProducts: 1,
            pageSize: 1
        }

        return ResolvedProducts
    }
}
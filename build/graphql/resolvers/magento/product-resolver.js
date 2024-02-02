import { GraphqlService } from "../../../services/graphql-service.js";
import ProductsSchema from '../../schema/magento/Products.js';
import Product from '../../../models/Product.js';
const graphqlService = new GraphqlService(process.env.MAGENTO_GRAPHQL_URL);
export default {
    products: async (args, req) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const variables = { filter: {} };
        if (args === null || args === void 0 ? void 0 : args.inputData.limit) {
            variables['pageSize'] = args.inputData.limit;
        }
        const result = await graphqlService.sendQuery({
            query: ProductsSchema,
            variables: variables
        });
        const products = ((_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.products) === null || _b === void 0 ? void 0 : _b.items) || [];
        return {
            items: products.map((product) => {
                return new Product(product.name, product.sku);
            }),
            totalProducts: ((_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.products) === null || _d === void 0 ? void 0 : _d.total_count) || 0,
            pageSize: ((_g = (_f = (_e = result === null || result === void 0 ? void 0 : result.data) === null || _e === void 0 ? void 0 : _e.products) === null || _f === void 0 ? void 0 : _f.page_info) === null || _g === void 0 ? void 0 : _g.page_size) || 0
        };
    }
};
//# sourceMappingURL=product-resolver.js.map
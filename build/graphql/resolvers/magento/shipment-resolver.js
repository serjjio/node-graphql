// @ts-ignore
import { GraphqlService } from "../../../services/graphql-service.js";
// @ts-ignore
import ProductsSchema from '../../schema/magento/Products.js';
const graphqlService = new GraphqlService(process.env.MAGENTO_GRAPHQL_URL);
export default {
    shipment: async (args, req) => {
        var _a, _b;
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
            items: [],
            totalProducts: 555,
            pageSize: 50
        };
    }
};
//# sourceMappingURL=shipment-resolver.js.map
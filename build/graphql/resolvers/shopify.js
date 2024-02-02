import { GraphqlService } from "../../services/graphql-service.js";
const graphqlService = new GraphqlService(process.env.SHOPIFY_GRAPHQL_URL);
export default {
    post(postInput) {
        return {
            posts: {
                title: 'Shopify',
                content: 'Shopify Content'
            },
            totalPosts: 200
        };
    }
};
//# sourceMappingURL=shopify.js.map
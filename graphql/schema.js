import { buildSchema } from 'graphql';

export default buildSchema(`
    type Post {
        title: String!
        content: String!
    }

    type PostData {
        posts: Post!
        totalPosts: Int!
    }

    input PostInputData {
        title: String!
    }

    type RootQuery {
        post(inputData: PostInputData!): PostData!
    }

    schema {
        query: RootQuery
    }
`);

import axios from 'axios';
import { QueryVariables } from "../types/graphql/index.js";

export class GraphqlService {
    url: string
    constructor(url: string) {
        this.url = url;
    }

    async sendQuery({query, variables}: {query: string; variables: QueryVariables}) {
        try {
            const response = await axios.post(
                this.url,
                {query, variables},
                {
                    headers: {
                        //some headers
                    },
                }
            );

            return response.data;
        } catch (error) {
            typeof error === 'object'
                && error !== null
                && 'message' in error
                && console.error('Error sending GraphQL request:', error.message);
            throw error;
        }
    }
}
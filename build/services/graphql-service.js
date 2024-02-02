import axios from 'axios';
export class GraphqlService {
    constructor(url) {
        this.url = url;
    }
    async sendQuery({ query, variables }) {
        try {
            const response = await axios.post(this.url, { query, variables }, {
                headers: {
                //some headers
                },
            });
            return response.data;
        }
        catch (error) {
            console.log(error);
            console.error('Error sending GraphQL request:', error.message);
            throw error;
        }
    }
}
//# sourceMappingURL=graphql-service.js.map
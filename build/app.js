import express from 'express';
import bodyParser from 'body-parser';
import graphql from "./middleware/graphql.js";
const app = express();
// Body parsing middleware
app.use(bodyParser.json());
// Authentication middleware
//app.use(auth);
// GraphQL endpoint
app.use('/graphql', graphql);
// Example route
app.use('/test', (req, res) => {
    console.log(req);
    res.status(201).json({
        message: 'Request sent successfully!'
    });
});
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map
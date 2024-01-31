import express from 'express';
import bodyParser from 'body-parser';
import auth from './middleware/auth.js';
import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './graphql/schema.js';
import platformResolver from "./middleware/platform-resolver.js";
import resolver from './graphql/resolvers.js';

const app = express();

// Body parsing middleware
app.use(bodyParser.json());

// Authentication middleware
//app.use(auth);

// GraphQL endpoint
app.use(
    '/graphql',
    platformResolver,
    graphqlHTTP((req, res) => ({
        schema: graphqlSchema,
        rootValue: req.resolver || resolver
    }))
);

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
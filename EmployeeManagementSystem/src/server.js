const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const typeDefs = require('./schemas');    
const resolvers = require('./resolvers'); 

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/graphql`));

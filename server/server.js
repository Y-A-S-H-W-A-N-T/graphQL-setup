const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(cors({
  origin: 'http://localhost:3000',
}));


// Connect to MongoDB
const MONGO_URL = 'mongodb+srv://yashwant:yashwant@cluster0.n8lyem8.mongodb.net/Test?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(MONGO_URL).then(()=>console.log("DATABASE CONNECTED")).catch((err)=>console.log(err))
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
})

// Middleware for GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.use(bodyParser.json());

app.listen(8000,async()=>{
    console.log("server running")
})

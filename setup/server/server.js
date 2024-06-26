import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';


async function startServer(){
  const app = express()
  const PORT = 8000
  
  app.use(bodyParser.json());

  app.use(cors());

  const apolloserver = new ApolloServer({typeDefs, resolvers})

  await apolloserver.start()

  apolloserver.applyMiddleware({app, path: '/graphql'})

  app.use('/',(req,res)=>{
    res.send("grapgQL Server Started")
  })

  app.listen(PORT,async()=>{
    console.log("server running")
  })

  // Connect to MongoDB
  const MONGO_URL = 'mongodb+srv://yashwant:yashwant@cluster0.n8lyem8.mongodb.net/Test?retryWrites=true&w=majority&appName=Cluster0'
  mongoose.connect(MONGO_URL).then(()=>console.log("DATABASE CONNECTED"))
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

startServer()

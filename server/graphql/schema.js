const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList, GraphQLID } = require('graphql')
const { Book } = require('../mongo/schema')

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
      id: { type: GraphQLID },
      author: { type: GraphQLString },
      books: { type: GraphQLString },
      copies: { type: GraphQLString },
    }),
  })

  const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      book: {
        type: BookType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Book.findById(args.id);
        },
      },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) {
          return Book.find({});
        },
      },
    },
  })

  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addBook: {
        type: BookType,
        args: {
          author: { type: GraphQLString },
          books: { type: GraphQLString },
          copies: { type: GraphQLString },
        },
        resolve(parent, args) {
          let book = new Book({
            author: args.author,
            books: args.books,
            copies: args.copies,
          });
          return book.save();
        },
      },
      removeBook: {
        type: BookType,
        args: {
          id: { type: GraphQLID }
        },
        resolve(parent,args){
          return Book.deleteOne({ _id: args.id })
        }
      }
    },
  })

  module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
  });
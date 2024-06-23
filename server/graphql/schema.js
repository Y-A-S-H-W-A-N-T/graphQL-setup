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
        async resolve(parent, args) {
          return await Book.findById(args.id);
        },
      },
      books: {
        type: new GraphQLList(BookType),
        async resolve(parent, args) {
          return await Book.find({});
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
        async resolve(parent, args) {
          let book = new Book({
            author: args.author,
            books: args.books,
            copies: args.copies,
          });
          return await book.save();
        },
        },
        updateBook: {
          type: BookType,
          args: {
            id: { type: GraphQLID },
            books: { type: GraphQLString },
            copies: { type: GraphQLString },
          },
          async resolve(parent, args){
            return await Book.updateOne(
              { _id: args.id },
              { $set: { books: args.books, copies: args.copies } }
            ,)
          }
        },
        deleteBook: {
          type: BookType,
          args: { 
            id: { type: GraphQLID }
          },
          async resolve(parent, args){
            return await Book.deleteOne({_id: args.id});
          }
        }
    },
  })

  module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
  });
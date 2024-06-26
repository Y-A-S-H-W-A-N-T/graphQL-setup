import { gql } from "apollo-server-express"

const typeDefs = gql`

    type book{
        id: ID,
        author: String,
        books: String,
        copies: String
    }

    type Query{
        welcome: String
        getBooks: [book]
    }

    type Mutation{
        addBook(author: String, copies: String, books: String): book
        updateBook(id: ID, books: String, copies: String): book
        deleteBook(id: ID): book
    }
`

export default typeDefs
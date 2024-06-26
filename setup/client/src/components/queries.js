import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  {
    getBooks {
      id
      author
      copies
      books
    }
  }
`
const GET_BOOK = gql`
  query GETBOOK($bookId: ID!) {
    book(id: $bookId) {
      id
      copies
      author
    }
  }
`

const ADD_BOOK = gql`
  mutation addBook($author: String, $books: String, $copies: String) {
    addBook(author: $author, books: $books, copies: $copies) {
      id
      author
    }
  }
`
  

const REMOVE_BOOK = gql`
  mutation REMOVEBOOK($bookId: ID!) {
    deleteBook(id: $bookId) {
      author
    }
  }
`

const UPDATE_BOOK = gql`
  mutation updateBook($bookId: ID, $books: String, $copies: String) {
    updateBook(id: $bookId, books: $books, copies: $copies) {
      id
      author
      copies
      books
    }
  }
`


export { GET_BOOKS, GET_BOOK, REMOVE_BOOK, ADD_BOOK, UPDATE_BOOK }

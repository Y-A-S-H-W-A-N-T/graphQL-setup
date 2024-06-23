import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks{
    books {
      id
      author
      books
      copies
    }
  }
`
export const GET_BOOK = gql`
query GetBook($bookId: ID!){
    book(id: $bookId){
      id
      author
      books
      copies
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($author: String!, $books: String!, $copies: String!) {
    addBook(author: $author, books: $books, copies: $copies) {
      id
      author
      books
      copies
    }
  }
`
export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookID: ID!) {
    deleteBook(id: $bookID) {
      author
      books
      copies
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook($bookID: ID!, $books: String!, $copies: String!) {
    updateBook(id: $bookID, books: $books, copies: $copies) {
      author
      books
      copies
    }
  }
`;
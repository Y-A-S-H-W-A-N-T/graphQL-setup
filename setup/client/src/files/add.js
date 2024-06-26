import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_BOOK, GET_BOOKS } from '../components/queries';

function Add() {

    const [book,setbook] = useState()

    const [ addBook, { loading, error } ] = useMutation(ADD_BOOK)

    const ADD = ()=>{
        addBook(
          {
            variables: {author: book.author, books: book.books, copies: book.copies},
            refetchQueries: [
              { query: GET_BOOKS }
            ]
          }
        )
    }

  return (
      <div>
        <h1>ADD Users</h1>
        <input placeholder='author' onChange={(e)=>setbook((prev)=>({...prev,author: e.target.value}))}/>
        <input placeholder='books' onChange={(e)=>setbook((prev)=>({...prev,books: e.target.value}))}/>
        <input placeholder='copies' onChange={(e)=>setbook((prev)=>({...prev,copies: e.target.value}))}/>
        <button onClick={ADD}>ADD USER</button>
      </div>
  );
}

export default Add;

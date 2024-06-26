import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_BOOKS, GET_BOOK, REMOVE_BOOK } from '../components/queries';

function REM() {

  const { loading: totalLoading, error: totalError, data: totalData } = useQuery(GET_BOOKS)
//   const { loading: load1, error: err1, data } = useQuery(GET_BOOK, {
//     variables: { bookId }
//   })
const [ removeBook, { loading, error } ] = useMutation(REMOVE_BOOK);


  const totalBooks = totalData

  console.log(totalBooks)

  const REMOVE = (id)=>{
    removeBook({variables: { bookId: id }})
  }

  return (
      <div>
        <h1>Users</h1>
        { totalBooks!==undefined &&
          totalBooks.books.map((val,ind)=>(
              <div key={ind}>
                  <h1>{val.author}</h1>
                  <h1>{val.books}</h1>
                  <h1>{val.copies}</h1>
                  <button onClick={()=>REMOVE(val.id)}>REMOVE</button>
              </div>
          ))
        }
      </div>
  );
}

export default REM;

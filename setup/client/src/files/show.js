import React, { useState } from 'react'
import { GET_BOOKS, REMOVE_BOOK, UPDATE_BOOK } from '../components/queries'
import { useQuery, useMutation } from '@apollo/client'
import Add from './add'

export default function Show() {

  const { data } = useQuery(GET_BOOKS)

  console.log(data)
  const [ removeBook ] = useMutation(REMOVE_BOOK)
  const [ updateBook ] = useMutation(UPDATE_BOOK)

  const [update,setUpdate] = useState()

  const REMOVE = (id)=>{
    removeBook(
      {variables: { bookId: id },
      refetchQueries: [
        { query: GET_BOOKS }
      ]
    })
  }

  const UPDATE = (id)=>{
    updateBook(
      {variables: {
        bookId: id,
        books: update.books,
        copies: update.copies
      }}
    )
  }


  return (
    <div>
      <Add/>
      SHOW BOOKS HERE
      {
        data?.getBooks.map((val,ind)=>(
          <div key={ind}>
              <p>{val.author}</p>
              <p>{val.books}</p><input placeholder='books' onChange={(e)=>setUpdate((p)=>({...p,books: e.target.value}))}/>
              <p>{val.copies}</p><input placeholder='copies' onChange={(e)=>setUpdate((p)=>({...p,copies: e.target.value}))}/>
              <button onClick={()=>UPDATE(val.id)}>UPDATE</button>
              <button onClick={()=>REMOVE(val.id)}>X</button>
          </div>
        ))
      }
    </div>
  )
}

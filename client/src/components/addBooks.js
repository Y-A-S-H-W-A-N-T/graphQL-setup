import { useQuery, useMutation } from '@apollo/client';
import { GET_BOOKS, GET_BOOK, ADD_BOOK } from '../queries';
import { useState } from 'react';

function App() {
  const bookId = "666b7c8e78ede77488ca6566"
  const { loading: load2, error: err2, data: d2 } = useQuery(GET_BOOK, { variables: { bookId } });
  const [ addBook, { loading, error } ] = useMutation(ADD_BOOK)

  const [ bookDetails, setBookDetails ] = useState()


  const ADD = ()=>{
    addBook({ variables: { author: bookDetails.bookAuthor, books: bookDetails.bookBooks, copies: bookDetails.bookCopies } })
    window.location.reload()
  }

  return (
    <div>
        ADD A BOOK
        <input type="text" onChange={(e)=>setBookDetails((prev)=>({...prev,bookAuthor: e.target.value}))} />
        <input type="text" onChange={(e)=>setBookDetails((prev)=>({...prev,bookBooks: e.target.value}))} />
        <input type="text" onChange={(e)=>setBookDetails((prev)=>({...prev,bookCopies: e.target.value}))} />
        <button onClick={ADD}>ADD</button>
    </div>
  );
}

export default App;

import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_BOOK } from '../queries';
import { useState } from 'react';

function Edit({ bookId }) {
//   const bookId = "666b7c8e78ede77488ca6566"
//   const { loading: load2, error: err2, data: d2 } = useQuery(GET_BOOK, { variables: { bookId } })
  const [ updateBook, { loading, error } ] = useMutation(UPDATE_BOOK)

  const [ bookDetails, setBookDetails ] = useState()


  const EDIT = ()=>{
    updateBook({ variables: { bookID: bookId, books: bookDetails.bookBooks, copies: bookDetails.bookCopies } })
    window.location.reload()
  }

  return (
    <div>
        EDIT BOOK
        <input type="text" onChange={(e)=>setBookDetails((prev)=>({...prev,bookBooks: e.target.value}))} />
        <input type="text" onChange={(e)=>setBookDetails((prev)=>({...prev,bookCopies: e.target.value}))} />
        <button onClick={EDIT}>EDIT</button>
    </div>
  );
}

export default Edit;

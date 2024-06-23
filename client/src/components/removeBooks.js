import { useQuery, useMutation } from '@apollo/client';
import { GET_BOOKS, GET_BOOK, ADD_BOOK, REMOVE_BOOK } from '../queries';
import { useState } from 'react';
import EditBook from './editBook';

function App() {
  const bookId = "666b7c8e78ede77488ca6566"
  const { loading: load1, error: err1, data: d1 } = useQuery(GET_BOOKS)
  const {loading: load2, error: err2, data: d2 } = useQuery(GET_BOOK,{ variables: { bookId } })
  const [ removeBook, { loading, error } ] = useMutation(REMOVE_BOOK)

  const [ bookDetails, setBookDetails ] = useState()

  console.log()

  console.log(d1)

  const REMOVE = (id)=>{
    const bookID = id
    removeBook({variables: { bookID }})
    window.location.reload()
  }

  return (
    <div>
    {/*{
        d1.book.map((val,ind)=>(
            <div key={ind}>
                <h1>{val.author}</h1>
            </div>
        ))
    }*/}
        <h1>BOOK : </h1>
        {
          d1!==undefined &&
          d1.books.map((val,ind)=>(
            <div key={ind}>
              <p>{val.author}</p>
              <p>{val.books}</p>
              <p>{val.copies}</p>
              <p>{val.id}</p>
              <button onClick={()=>REMOVE(val.id)}>REMOVE</button><EditBook bookId={val.id}/>
            </div>
          ))          
        }
    </div>
  );
}

export default App;

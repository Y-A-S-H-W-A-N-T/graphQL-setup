import { useQuery, useMutation } from '@apollo/client';
import { GET_BOOKS, GET_BOOK, ADD_BOOK } from './queries';
import AddBooks from './components/addBooks'
import RemoveBooks from './components/removeBooks'

function App() {
  const bookId = "666b7c8e78ede77488ca6566"
  const { loading: load, error: err, data: d1 } = useQuery(GET_BOOKS)
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { bookId },
  })


  return (
    <div>
      <AddBooks/>
      <RemoveBooks/>
    </div>
  );
}

export default App;

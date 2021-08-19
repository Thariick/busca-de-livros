import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyBsdmVIL8uuiKFRfVhMmS3LsrjaybwKATY");






  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }
  function handleSubmit (event){
    event.preventDefault(book);
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book)
    .then(data => {
      setResult(data.data.items);
    })
  }








  return (
    <div class = "container">
      <h1>Sitema para busca de livros</h1>
      <form onSubmit = {handleSubmit}>
        <div class = "form-group">
          <input type = "text" onChange = {handleChange}
          className = "form-control" 
          placeholder = "Busque seu livro" 
          autoComplete = "on"/>
        </div>
        <button type = "submit" className = "btn btn-danger">Buscar</button>
      </form>
 
        {result.map(book => (
          <img src = {
            book.volumeInfo.imageLinks === undefined
              ? ""
              : `${book.volumeInfo.imageLinks.thumbnail}`
        } alt = {book.title}/>
        ))}

    </div>
  
  );
}

export default App;

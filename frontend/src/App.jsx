import {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []);
    
  

  return (
    <>
      <p>Jokes:</p>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.content}</li>
        ))}
      </ul>
    </>
  )
}

export default App

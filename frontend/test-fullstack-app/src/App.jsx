import { useEffect, useState } from 'react'
import './App.css'

const URL = import.meta.env.VITE_API_URL;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function initialLoad() {
      const response = await fetch(URL);
      const result = await response.json();

      // Store test data
      setData(result.data);
    }

    initialLoad();
  }, []);

  return (
    <>
        {data == [] ? "Loading data..." : data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
    </>
  )
}

export default App

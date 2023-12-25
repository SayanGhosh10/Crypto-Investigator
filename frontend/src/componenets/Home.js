import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {
    const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      
      <p>{data}</p>
      
    </div>
  )
}

export default Home

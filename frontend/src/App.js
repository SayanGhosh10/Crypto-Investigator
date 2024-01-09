import React, { useState } from 'react';
import axios from 'axios';
import Banner from './componenets/Banner';
import Footer from './componenets/Footer';

function App() {
  const [inputData, setInputData] = useState('');
  const [processedData, setProcessedData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://crypto-investigator-backend.onrender.com/process_input', {
        input_data: inputData,
      });

      setProcessedData(response.data.processed_data);
    } catch (error) {
      console.log('Error processing input:', error);
    }
  };


  return (
    <>
      <Banner />
      <div className="App container d-flex align-items-center justify-content-center my-5">
        <div>
          <h1>Crypto Investigator</h1>
          <label className='form-label'>
            Input Data:
            <input className='form-control form-control-lg' type="text" value={inputData} onChange={handleInputChange} />
          </label>
          <button className='mx-3 btn btn-warning' onClick={handleSubmit}>Process Input</button>
          {processedData && (
            <div>
              <h2>Result</h2>
              <p>{processedData}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

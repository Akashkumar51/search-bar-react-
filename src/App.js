import './App.css';
import JsonData from './DATA.json'
import React,{useState} from 'react';

function App() {
  const [inputvalue, setInputvalue] = useState("");
  console.log(inputvalue);
  return (
    <div className="App">
      <input value={inputvalue} onChange={(event)=>setInputvalue(event.target.value)} className='searchbar' type="text" placeholder='search...' />
      {JsonData.filter(data =>{
        if (inputvalue === "") {
          return data
        }else if (data.first_name.toLowerCase() === inputvalue.toLowerCase()) {
          return data
        }
      }).map((val, key)=> {
        return <div key={key}>
          <p>
          {val.first_name}
          </p>
        </div>
      })}
    </div>
  );
}

export default App;

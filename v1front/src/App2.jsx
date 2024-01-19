import { useState , useCallback} from 'react'
import React from 'react' 
import axios from 'axios'
import { createChart } from 'lightweight-charts';

function App() {
  const [data, setData] = useState([])
  
  const getData2= async()=>{
    const response = await fetch('http://localhost:3000/api/stocknameind')
    const dataa = await response.json()
    setData(dataa)
    console.log(dataa)
  }
  const getStockData= async()=>{
    let flag=0;
    console.log(noteInv)
    for(let i=0;i<data.length;i++){
      if(data[i].Ticker===noteInv){
        flag=1;
        break;
      }
    }
    if(flag===1){
      const response = await axios.get('http://localhost:5000/api/ml2', {params: {name: noteInv}})
      console.log(response.data.data)
      
    }
    else{
      alert("Invalid Stock Name")
    }
  }
  React.useEffect(() => {
    getData2();
    }, [])
    const [noteInv, setNoteInv] = useState('')
    const handleChangeInvy=(e)=>{
      console.log(e.target.value)
      setNoteInv(e.target.value)
    }

 

  return (
    <>
    HELLO :)
    

    <input
      list="data"
      name="Name"
      onChange={handleChangeInvy}
      value={noteInv}
      placeholder="Search"
    />
    <datalist id="data">
      {data.length === 0 ? (
        <></>
      ) : (
        data.map((op, index) => (
          <div className="item" key={index}>
            <option value={op.Ticker} key={index}>
              {op.Name}
            </option>
          </div>
        ))
      )}
    </datalist>
    <button onClick={getStockData}>click</button>
    
    </>
  )
}

export default App

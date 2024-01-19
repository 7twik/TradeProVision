import React,{useState} from 'react'
import Top from './Top'
import Areachar from './Areachar'
import Candlechar from './Candlechar'
import Barchar from './Barchar'
import Baselinechar from './Baselinechar'
import Histogramchar from './Histogramchar'
import Try from './Try'
const App = () => {
    const [pastData, setPastData] = useState([])
    const datafound= async(data)=>{
        console.log(data)
        setPastData(data)
    }
    const [month, setMonth] = useState(0)
    const changemonth= async(month)=>{
        console.log(month)
        setMonth(month)
    }
    const [name, setName] = useState('')
    const changename= async(name)=>{
        console.log(name)
        setName(name)
    }
  return (
    <div>
        <Top data={datafound} month={changemonth} name={changename} />
        {/* <Try /> */}
        {/* <Areachar past={pastData} /> */}
        <Candlechar past={pastData} month={month} name={name}  />
        {/* <Barchar past={pastData} />
        <Baselinechar past={pastData} />
        <Histogramchar past={pastData} /> */}
    </div>
  )
}

export default App
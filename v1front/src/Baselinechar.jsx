import React,{useRef,useEffect} from 'react'
import { createChart, ColorType } from 'lightweight-charts';
const Char = (props) => {
    
    const chartContainerRef=useRef();
    const [state, setState] = React.useState(0)
    useEffect(()=>{
        if(props.past.length===0){
            setState(0)
        }
        else{
            let sum=0;
            let count=0;
        let inidata2=props.past.map((item)=>{
                sum+=item.Close;
                count++;
                // Create a new Date object from the input string
                var inputDate = new Date(item.Date);

                // Get the year, month, and day components
                var year = inputDate.getUTCFullYear();
                var month = String(inputDate.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
                var day = String(inputDate.getUTCDate()).padStart(2, '0');

                // Create the yyyy-mm-dd format string
                var formattedDate = `${year}-${month}-${day}`;
            return {time:formattedDate,value:item.Close}});
        console.log(inidata2)
        const initialData = [
            { time: '2018-12-22', value: 32.51 },
            { time: '2018-12-23', value: 31.11 },
            { time: '2018-12-24', value: 27.02 },
            { time: '2018-12-25', value: 27.32 },
            { time: '2018-12-26', value: 25.17 },
            { time: '2018-12-27', value: 28.89 },
            { time: '2018-12-28', value: 25.46 },
            { time: '2018-12-29', value: 23.92 },
            { time: '2018-12-30', value: 22.68 },
            { time: '2018-12-31', value: 22.67 },
        ];
        const chart= createChart(chartContainerRef.current, {
            layout: {
                type: ColorType.Solid,
                backgroundColor: 'white',
            } ,
            width:500,
            height:300
        });
        const newSeries = chart.addBaselineSeries({ baseValue: { type: 'price', price: sum/count }, 
            topLineColor: 'rgba( 38, 166, 154, 1)', 
            topFillColor1: 'rgba( 38, 166, 154, 0.28)', 
            topFillColor2: 'rgba( 38, 166, 154, 0.05)', 
            bottomLineColor: 'rgba( 239, 83, 80, 1)', 
            bottomFillColor1: 'rgba( 239, 83, 80, 0.05)', 
            bottomFillColor2: 'rgba( 239, 83, 80, 0.28)' 
        });
        newSeries.setData(inidata2);
        
        setState(1)
    }
    },[props.past])
  return (
    <>
        
        <div ref={chartContainerRef}></div>
  
    </>
  )
}

export default Char
import React from 'react'
import "./Chart.css"
import ChartBars from './ChartBars'



function Chart(props) {
const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValue)


  return (
    <div className='chart'>
    {
        props.dataPoints.map(dataPoint => <ChartBars 
                                            key={dataPoint.label} 
                                            value={dataPoint.value} 
                                            maxValue={totalMaximum} 
                                            label={dataPoint.label} />)
    }
    </div>
  )
}

export default Chart
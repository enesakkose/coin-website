import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import './LineChart.scss'

function LineChart({ coinHistory, currentPrice, coinName }) {
    const coinPrice = [];
    const coinTimestamp = [];

  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }
    const data = {
      labels: coinTimestamp,
      datasets: [
        {
          label: 'Price In USD',
          data: coinPrice,
          fill: false,
          backgroundColor: '#0071bd',
          borderColor: '#0071bd',
        },
      ],
    };
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    
  return (
    <>
    <div className='lineChart'>
        <div className="lineChart-header">
            <h2>{coinName} Price Chart</h2>
            <div className="lineChart-header-price">
                <h4>{coinHistory?.data?.change}%</h4>
                <h4>Current {coinName} Price: $ {currentPrice}</h4>
            </div>
        </div>
    </div>
    <Line data={data} options={options} />
    </>
  )
}

export default LineChart
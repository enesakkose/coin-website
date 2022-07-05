import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import millify from 'millify'
import parse from 'html-react-parser'
import { DollarCircleOutlined, TrophyOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons'
import LineChart from '../components/LineChart'
import './CryptoDetails.scss'

function CryptoDetails() {

  const [ timePeriod, setTimePeriod ] = useState('7d')
  const { coinId } = useParams()
  const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timePeriod})
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = data?.data?.coin
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
  console.log(timePeriod)
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  if(isFetching) return ('...Loading')

  return (
    <div className='cryptoDetails'>
      <div className="cryptoDetails-header">
        <h2>{cryptoDetails?.name} Price </h2>
        <p>
          {cryptoDetails?.name} live price in US dollars. View value statistics, market cap and supply.
        </p>
      </div>
      <select 
        className='cryptoDetails-time-period'
        onChange={(e) => setTimePeriod(e.target.value)}
        >
          <option value="7d">7d</option>
          {time.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />
        <div className="cryptoDetails-stats">
          <div className="cryptoDetails-stats-header">
            <h2>
              {cryptoDetails?.name} Value Statistics
            </h2>
            <p>
              An overview showing the stats of {cryptoDetails?.name}
            </p>
          </div>
          <div className="cryptoDetails-stats-coin">
            {stats.map(({ icon, title, value }) => (
               <div className='cryptoDetails-stats-coin-stats'>
                <span className='icon'>{icon}</span>
                <span className='title'>{title}</span>
                <span className='number'>{value}</span>
            </div>
            ))}
            
          </div>
        </div>
      <div className="cryptoDetails-coin-desc">
         <h2>
          What is {cryptoDetails.name}?
         {parse(cryptoDetails.description)}
         </h2>

         <div className="cryptoDetails-coin-desc-links">
          {cryptoDetails.links.map((link, index)=> (
            <div className="link" key={index}>
            
            <a href={link.url} target="_blank">
            <h5>{(link.type).toUpperCase()}</h5>
              {link.name}
            </a>
          </div>  
          ))}
          
         </div>
      </div>
    </div>
  )
}

export default CryptoDetails

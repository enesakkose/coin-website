import React, { useState } from 'react'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
import CryptoCurrencies from './CryptoCurrencies'
import News from './News'
import './Home.scss'

function Home() {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats  
  

  


  if(isFetching) return 'Loading...'

  return (
    <div className='home'>
      <h1>Global Crypto Stats</h1>
      <div className="home-crypto-stats">
        <div className="stats">
          <h3>Total Cryptocurrencies</h3>
          <span>{globalStats.total}</span>
        </div>
        <div className="stats">
          <h3>Total Exchanges</h3>
          <span>{millify(globalStats.totalExchanges)}</span>
        </div>
        <div className="stats">
          <h3>Total Market Cap</h3>
          <span>{millify(globalStats.totalMarketCap)}</span>
        </div>
        <div className="stats">
          <h3>Total 24h Volume</h3>
          <span>{millify(globalStats.total24hVolume)}</span>
        </div>
        <div className="stats">
          <h3>Total Markets</h3>
          <span>{millify(globalStats.totalMarkets)}</span>
        </div>
      </div>

      <div className="home-redirect-router">
        <h2>Top 10 Cryptocurrencies in the world</h2>
        <h3 className="show-more">
          <Link to='/cryptocurrencies'>
            Show More
          </Link>
        </h3>
      </div>
      <CryptoCurrencies showItem={true}/>

      <div className="home-redirect-router">
        <h2>Latest crypto news</h2>
        <h3 className="show-more">
          <Link to='/news'>
            Show More
          </Link>
        </h3>
      </div>
      <News/>
    </div>
  )
}

export default Home
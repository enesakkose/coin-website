import React, { useState } from 'react'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
import './CryptoCurrencies.scss'

function CryptoCurrencies() {
  const { data: cryptoList, isFetching } = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  console.log(cryptos) 

  return (
    <div className='cryptoCurrencies'>
      {cryptos.map((crypto) => (
        <div key={crypto.id} className='cryptoCurrencies-card'>
          <Link to={`/crypto/${crypto.id}`}>
            <div className="cryptoCurrencies-card-text">
              <div className='cryptoCurrencies-card-text-header'>
                <h3>{`${crypto.rank}. ${crypto.name}`}</h3>
                <img className='cryptoCurrencies-card-text-header-img' src={crypto.iconUrl} alt="" />
              </div>
              
            </div>
            
            <div className='cryptoCurrencies-card-info'>
              <p>Price: {millify(crypto.price)}</p>
              <p>Market Cap: {millify(crypto.marketCap)}</p>
              <p>Dailychange: {millify(crypto.change)}%</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CryptoCurrencies
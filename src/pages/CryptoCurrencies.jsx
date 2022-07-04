import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
import './CryptoCurrencies.scss'

function CryptoCurrencies({showItem}) {
  const itemCount = showItem ? 10 : 100
  const { data: cryptoList, isFetching } = useGetCryptosQuery(itemCount)
  const [cryptos, setCryptos] = useState([])
  const [ search, setSearch ] = useState('')
  const coins = cryptoList?.data?.coins
  useEffect(()=> {


    const filteredCryptos = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    
    setCryptos(filteredCryptos)
  }, [search, cryptoList])



  if(isFetching) return 'Loading...'

  return (
      <>
      {!showItem && (
        <input className='search-bar' type="text" placeholder='Search Cryptocurrencies' onChange={(e) => setSearch(e.target.value)} />
      )}
    <div className='cryptoCurrencies'>
      {cryptos?.map((crypto) => (
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
    </>
  )
}

export default CryptoCurrencies
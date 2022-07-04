import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNews'
import { useGetCryptosQuery } from '../services/cryptoApi'
import moment from 'moment'
import './News.scss'


function News({showItem}) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: showItem ? 7 : 50 })
  const { data } = useGetCryptosQuery(100)

  if(!cryptoNews?.value) return 'Loading...'

  return (
    <>
      {!showItem && (
        <select
        className='category-filter'
        placeholder='Select a crypto'
        optionFilterProp="children"
        onChange={(e) => setNewsCategory(e.target.value)}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <option value="Cryptocurrency">Cryptocurrency</option>
          {data?.data?.coins.map((coin) => (
            <option value={coin.name}>{coin.name}</option>
          ))}
        </select>
      )}
      <div className='news'>
      {cryptoNews.value.map((news, index) => (
        <div key={index} className="news-card">
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className="news-card-img">
                <h4>{news.name}</h4>
                <img src={news?.image?.thumbnail?.contentUrl} alt="cryptoNews" />
            </div>
            <p>
              {news.description > 100 
                ? `${news.description.substring(0,100)}...`
                : news.description
              }
            </p>
            <div className="news-provider">
              <img src={news.provider[0]?.image?.thumbnail?.contentUrl} alt="" />

              <span className='news-provider-name'>{news.provider[0]?.name}</span>

              <span>{moment(news.datePublished).startOf('ss').fromNow()}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
    </>
  )
}

export default News
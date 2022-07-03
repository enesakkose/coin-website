import React from 'react'
import { BulbOutlined, FundOutlined, MenuOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
            <NavLink to='/'>
                CoinSite
            </NavLink>
        </div>
        <div className="navbar-menu">
            <ul>
                <li>
                    <NavLink to='/'>
                        <HomeOutlined/>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cryptocurrencies'>
                        <FundOutlined/>
                        Cryptocurrencies
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/exchanges'>
                    <MoneyCollectOutlined/>
                        Exchanges
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news'>
                        <BulbOutlined/>
                        News
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
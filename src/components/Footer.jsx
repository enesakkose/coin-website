import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        CryptoSite <br/>
        All rights reserved
        <div className="footer-links">
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
        </div>
    </footer>
  )
}

export default Footer
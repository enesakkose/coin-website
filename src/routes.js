import Home from './pages/Home'
import Exchanges from './pages/Exchanges'
import News from './pages/News'
import CryptoDetails from './pages/CryptoDetails'
import CryptoCurrencies from './pages/CryptoCurrencies'


export const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/exchanges',
        element: Exchanges
    },
    {
        path: '/cryptocurrencies',
        element: CryptoCurrencies
    },
    {
        path: '/crypto/:coinId',
        element: CryptoDetails
    },
    {
        path: '/news',
        element: News
    }
]
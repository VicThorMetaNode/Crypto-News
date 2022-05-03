import React from 'react'

//IMPORT PACKAGES
import millify from 'millify'

//IMPORT FROM ANT DESIGN
import { Typography, Row, Col, Statistic } from 'antd'

//IMPORT FROM ROUTER
import { Link } from 'react-router-dom'

//IMPORT API QUERY
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News } from '../components'

//Because we are using a numerous of TITLES we disconstruct Typography from Title
//From Typography.Title to const { Title } = Typography
const { Title } = Typography;


const Homepage = () => {
  const { data, isFetching} = useGetCryptosQuery(10);
  //FETCHING DATA FOR GLOBAL STATS which is one of the data from the api
  console.log(data);
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading...'

  return (
    <>
    <Title level={2} className="heading">Global Statistics</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" className='heading-titles' value={millify(globalStats.total)} /></Col>
      <Col span={12}><Statistic title="Total Xchanges" className='heading-titles' value={millify(globalStats.totalExchanges)}/></Col> 
      <Col span={12}><Statistic title="Total Market Cap" className='heading-titles' value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h Volume" className='heading-titles' value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" className='heading-titles' value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    {/* MAPPING CRYPTOS */}
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 Cryptos globally</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified />
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Hot News</Title>
      <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified/>
 
    </>
  )
}

export default Homepage
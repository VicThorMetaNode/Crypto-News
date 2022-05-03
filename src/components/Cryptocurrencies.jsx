import React, { useEffect, useState } from 'react'

//IMPORT PACKAGES
import millify from 'millify'

//IMPORT FROM ROUTER
import { Link } from 'react-router-dom'

//IMPORT FROM ANT DESIGN
import { Card, Row, Col, Input } from 'antd'

//IMPORT API QUERY
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {
//show only top then in simplified view otherwise 100
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  console.log(cryptos);

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

    setCryptos(filteredData);
  },[cryptosList, searchTerm]);

  if (isFetching) return 'Loading...';

  return (
    <>
{/* SHOW SEARCHBAR ONLY IF NOT SIMPLIFIED */}
    { !simplified && (
        <div className='search-crypto'>
        <Input placeholder='Search for Cryptos' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    ) }
    <Row gutter={[32, 32]} className="crypto-card-container">
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          {/* <Link to={`/crypto/${currency.id}`}> */}
            <Card 
            title={`${currency.rank}. ${currency.name}`}
            extra={<img className='crypto-img' src={currency.iconUrl} />}
           
            >
            <p>Price: {millify(currency.price)}$</p>
            <p>Market Cap: {millify(currency.marketCap)}$</p>
            <p>Daily Change: {millify(currency.change)}%</p>
            </Card>
          {/* </Link> */}
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
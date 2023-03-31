import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

//IMPORT COMPONENTS
import { Navbar, Homepage, Cryptocurrencies,  News } from './components'


const App = () => {
  return (
  <div className='app'>
    <div className='navbar'>
      <Navbar />
    </div>
     <div className='main'>
      <Layout>
        <div className='routes'>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
           
            <Route exact path='/cryptocurrencies'>
              <Cryptocurrencies />
            </Route>
          
            <Route exact path='/news'>
              <News />
            </Route>
          </Switch>
        </div>
     </Layout>
     <div className='footer'>
      <Typography.Title level={5} style={{ color: 'white', textAlign:'center' }}>
        CryptoSucks <br />
        No rights reserved
      </Typography.Title>
      <Typography.Text level={2} style={{ color: 'white', textAlign:'center' }}>
      We don't track you, collect your data, or use any other snoopy gadgets. It's just us, keeping it cool, clean, and carefree!
      </Typography.Text>
      <Space>
        <Link to='/'>Home</Link>
        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        <Link to='/news'>Latest News</Link>
      </Space>
     </div>
  </div>
</div>
);
}
export default App;

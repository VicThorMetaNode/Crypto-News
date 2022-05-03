import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

//IMPORT REDUX PROVIDER cause we import store
import { Provider } from 'react-redux'


//IMPORT REDUX STORE which implies to import PROVIDER
import store from './app/store'

//IMPORT CSS
import './App.css'

//IMPORT ANTD CSS DESIGN
import 'antd/dist/antd.css'


ReactDOM.render(
  <Router>
    <Provider store={store}>
       <App />
    </Provider>
  </Router>, 
  document.getElementById('root'));


// Imports
import React from 'react'
import { Route } from 'react-router-dom'

// Import Context
import { MyContext } from '../context'

// Import pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'

// Import components
import Header from './components/Header'

import detectBrowserLanguage from 'detect-browser-language'

// Component Implementation
const Main = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          <Header context={context} />

          <Route exact={true} path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  )
}

const helpers = {
  language: detectBrowserLanguage()
};

export { helpers }

export default Main

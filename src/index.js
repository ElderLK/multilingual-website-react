import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// Import service workers
import * as serviceWorker from './serviceWorker';
// Import context provider
import { MyProvider } from './context'
// Import Main component
import Main from './app/Main'

// Import CSS
import './app/styles/base.css'
import './app/styles/layout.css'

// Create App component
const App = () => {
    return (
      <MyProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MyProvider>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

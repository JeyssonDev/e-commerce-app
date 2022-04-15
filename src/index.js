import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
   <React.StrictMode>
      <Provider store={configureStore()}>
         <HashRouter>
            <App />
         </HashRouter>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

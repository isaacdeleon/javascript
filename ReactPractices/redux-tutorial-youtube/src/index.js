import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, combineReducers,createStore} from 'redux'; 



const allReducer = combineReducers({
    products: productsReducer,
    user: userReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducer, {
        products: [{name: 'Iphone'}],
        user: 'Michael'
    }, allStoreEnhancers
);


ReactDOM.render(<Provider store={store}><App aRandomProps="exampleProp"/></Provider>, document.getElementById('root'));
registerServiceWorker();

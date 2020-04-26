import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Routes from './routing/Route';
import Footer from './components/Footer'
import store from './store/index';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer/>
        <ToastContainer autoClose={3000}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

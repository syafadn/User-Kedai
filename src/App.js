import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Work from './components/Work';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/client'
import client from './config/apolloclient'
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

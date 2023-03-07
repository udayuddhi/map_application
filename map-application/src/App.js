import React from 'react';
import { useState } from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar';
import Home from './components/sidebar-pages/home'
import ContactUsPage from './components/sidebar-pages/contact';
import Footer from './components/footer';
import Maps from './Maps';
import SearchBox from './SearchBox';






function App() {
  
  const [selectPosition, setSelectPosition] = useState(null);
  
  
  return (
    <div className="App">
    
      <div>
          <Header />
          
          <div className="content">
             <BrowserRouter>
              <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} /> 
                    <Route exact path="/contact" element={<ContactUsPage/>} />                       
                </Routes>
             </BrowserRouter>
            <main className='map'>
                  <SearchBox  style={{ width: "20vw" }}selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
              
              
                  <Maps style={{ width: "120vw", height: "100%",  }} selectPosition={selectPosition} />
              
                
          
            

            </main>
                
            
          </div>
          <Footer />
      </div>
     
    </div>
  );
}



export default App;

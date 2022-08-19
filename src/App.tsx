import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import { getAPIData } from './service/ApiServices';
import Home from "./components/Home"
import Detail from './components/Detail';
import './App.css';
import ServiceProvider from './service/context/context';

const App: React.FunctionComponent = (props) => {
  return (                                                         // Service Provider for Wrapping the entire Application and Routes
    <>
      <ServiceProvider>
        <div className='header-container'>
          <div className='logo-container'>
            <img
              alt="logo"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"}
            />
          </div>
          <div className="link-container">
            <Link to={"/"}><h2 className='header-text'>Home</h2></Link>
          </div>
        </div>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail" element={<Detail />} />
          </Routes>
        </div>
      </ServiceProvider>
    </>
  );
}

export default App;

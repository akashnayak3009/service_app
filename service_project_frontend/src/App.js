
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ServicePage from './pages/ServicePage';
import ServiceList from './pages/ServiceList';

function App() {
  return (
      <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<ServicePage/>} />
        <Route path="/service" element={<ServiceList/>} />
       </Routes></BrowserRouter>
      </div>
  );
}

export default App;

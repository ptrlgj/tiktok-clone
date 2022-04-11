import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Header from './components/Header'
function App() {
  return (
    <BrowserRouter>
        <Header />
          <div className="body">
            <div className='container'>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/upload" element={<Upload />} />
              </Routes>
            </div>
          </div>
    </BrowserRouter>
  )
}

export default App
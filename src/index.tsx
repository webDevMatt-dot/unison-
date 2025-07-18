import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AIML from './pages/AIML';
import AntiVirus from './pages/AntiVirus';
import DataEng from './pages/DataEng';
import SAP from './pages/SAP';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AIML" element={<AIML />} />
        <Route path="/AntiVirus" element={<AntiVirus />} />
        <Route path="/DataEng" element={<DataEng />} />
        <Route path="/SAP" element={<SAP />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

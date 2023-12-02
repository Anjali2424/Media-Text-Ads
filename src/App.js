// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateAdForm from './components/CreateAdForm';
import TopNavigation from './components/TopNavigation';
import './App.css'
import FillData from './components/FillData';

const App = () => {
  return (
    <Router>
      <TopNavigation />
      <div className="app-div-css">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-ad" element={<CreateAdForm />} />
            {/* <Route path="/ads-insights" component={AdsInsights} /> */}
            <Route path="/fill-data" element={<FillData />} />
            {/* <Route path="/ads-submitted" component={AdsSubmitted} /> */}
          </Routes>
        </div> 
    </Router>
  );
};

export default App;

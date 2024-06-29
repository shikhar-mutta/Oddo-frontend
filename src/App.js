// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import UserDashboard from './Components/UserDashboard';
import ServiceProviderDashboard from './Components/ServiceProviderDashboard';
import MedicalList from './Components/MedicalList';
import PoliceList from './Components/PoliceList';
import FireList from './Components/FireList';
import FireHelp from './Components/FireHelp';
import MedicalHelp from './Components/MedicalHelp';
import PoliceHelp from './Components/PoliceHelp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/service-provider-dashboard" element={<ServiceProviderDashboard />} />
          <Route path="/medical-list" element={<MedicalList />} />
          <Route path="/police-list" element={<PoliceList />} />
          <Route path="/fire-list" element={<FireList />} />
          <Route path="/help/fire" element={<FireHelp />} />
          <Route path="/help/medical" element={<MedicalHelp />} />
          <Route path="/help/police" element={<PoliceHelp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

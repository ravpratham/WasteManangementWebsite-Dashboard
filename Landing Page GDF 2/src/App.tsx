import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DelhiNCRDashboard from './pages/delhiNCRDashboard';
import HisarDashboard from './pages/HisarDashboard';
import JajpurDashboard from './pages/JajpurDashboard';
import NotFoundPage from './pages/NotFoundPage';
import PlantationDashboard from './pages/plantationDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="dashboard" element={<DelhiNCRDashboard />} />
        <Route path="delhiNCRDashboard" element={<DelhiNCRDashboard />} />
        <Route path="HisarDashboard" element={<HisarDashboard />} />
        <Route path="JajpurDashboard" element={<JajpurDashboard />} />
        <Route path="plantationDashboard" element={<PlantationDashboard />} />
        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
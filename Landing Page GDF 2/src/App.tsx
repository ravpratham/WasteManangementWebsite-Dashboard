import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NoticeModal from './components/NoticeModal';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DelhiNCRDashboard from './pages/delhiNCRDashboard';
import HisarDashboard from './pages/HisarDashboard';
import JajpurDashboard from './pages/JajpurDashboard';
import NotFoundPage from './pages/NotFoundPage';
import PlantationDashboard from './pages/plantationDashboard';

const NOTICE_VERSION = '1';

function App() {
  const [showNotice, setShowNotice] = useState(() => {
    const acceptedVersion = localStorage.getItem('noticeVersion');

    return acceptedVersion !== NOTICE_VERSION;
  });

  const handleNoticeAccept = () => {
    localStorage.setItem('noticeVersion', NOTICE_VERSION);
    setShowNotice(false);
  };

  return (
    <>
      {showNotice && (
        <NoticeModal onAccept={handleNoticeAccept} />
      )}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="projects" element={<ProjectsPage />} />

          <Route path="about" element={<AboutPage />} />

          <Route path="contact" element={<ContactPage />} />

          <Route path="dashboard" element={<DelhiNCRDashboard />} />

          <Route
            path="delhiNCRDashboard"
            element={<DelhiNCRDashboard />}
          />

          <Route
            path="HisarDashboard"
            element={<HisarDashboard />}
          />

          <Route
            path="JajpurDashboard"
            element={<JajpurDashboard />}
          />

          <Route
            path="plantationDashboard"
            element={<PlantationDashboard />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
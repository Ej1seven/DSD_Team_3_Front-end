'use client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landing_page/page';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

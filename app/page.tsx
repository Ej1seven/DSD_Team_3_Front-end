'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import LandingPage from './pages/landing_page/page';

export default function Home() {
  return (
    <div className="relative bg-white w-full h-screen overflow-hidden text-center text-xl text-base-black font-poppins">
      <Navbar />
      <LandingPage />
    </div>
  );
}

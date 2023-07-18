'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import LandingPage from './pages/landing_page/page';

export default function Home() {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-center text-xl text-base-black font-poppins">
      <img
        className="absolute bottom-[-10rem] left-[-10rem] min-w-[675.84px] min-h-[735.89px]"
        alt=""
        src="/decore.svg"
      />
      <Navbar />
      <LandingPage />
    </div>
  );
}

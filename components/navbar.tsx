'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  
  return (
    <div className="sticky top-0 z-50 bg-[#Fdf2f4]/80 backdrop-blur-md border-b border-[#f3d9dd] py-4">
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          onClick={() => router.push('/')} 
          className="font-serif text-2xl text-[#c77b89] italic font-semibold cursor-pointer"
        >
          Aufa's Space.
        </div>
        
        {/* Navigation Menu */}
        <div className="flex space-x-8 text-[#8c6b71] font-medium font-sans">
          <div 
            onClick={() => router.push('/')} 
            className="hover:text-[#c77b89] transition-colors cursor-pointer"
          >
            Home
          </div>
          <div 
            onClick={() => router.push('/profile')} 
            className="hover:text-[#c77b89] transition-colors cursor-pointer"
          >
            Profile
          </div>
          <div 
            onClick={() => router.push('/portofolio')} 
            className="hover:text-[#c77b89] transition-colors cursor-pointer"
          >
            Portfolio
          </div>
        </div>

      </div>
    </div>
  );
}
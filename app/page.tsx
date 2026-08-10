'use client';

import { useRouter } from 'next/navigation';
import MessageBoard from '@/components/MessageBoard';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 animate-fade-in pb-24 mt-12">
      
      <div className="w-32 h-32 bg-[#fdf4f5] rounded-full border-4 border-[#ecd0d5] shadow-lg flex items-center justify-center mb-4 text-[#c77b89] font-serif italic text-sm">
         Aufa
      </div>
      
      <h1 className="text-6xl font-serif text-[#b66675] italic">
        Aufa's Space
      </h1>
      
      <div className="bg-[#fdf4f5] p-6 rounded-2xl shadow-sm border border-[#f3d9dd] max-w-lg relative mx-auto">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/60 backdrop-blur-sm rotate-2 shadow-sm"></div>
        <div className="text-[#8c6b71] leading-relaxed">
          Selamat datang. Saya Annisa Nuraufa. Halaman ini adalah tempat saya membagikan perjalanan di bidang pengembangan web, desain antarmuka, dan hal menarik lainnya.
        </div>
      </div>

      <div 
        onClick={() => router.push('/portofolio')}
        className="mt-6 px-6 py-2 bg-[#ecd0d5] text-[#8c6b71] rounded-full hover:bg-[#e0a6b1] hover:text-white transition-colors cursor-pointer font-medium shadow-sm"
      >
        Lihat Portofolio
      </div>

      <div className="w-full max-w-4xl mt-32 pt-24 border-t border-[#f3d9dd]">
        <MessageBoard />
      </div>

    </div>
  );
}
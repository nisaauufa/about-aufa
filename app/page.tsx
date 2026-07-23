'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen space-y-32 pb-24 animate-fade-in">
      
      {/* SECTION: HERO */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 mt-12 w-full">
        <div className="w-32 h-32 bg-white rounded-full border-4 border-[#ecd0d5] shadow-lg flex items-center justify-center mb-4 overflow-hidden relative">
           <Image 
             src="/foto-aufa.jpg" 
             alt="Aufa Profile" 
             fill 
             className="object-cover" 
           />
        </div>
        
        <h1 className="text-6xl font-serif text-[#b66675] italic">
          Aufa's Space
        </h1>
        
        <div className="bg-[#fdf4f5] p-6 rounded-2xl shadow-sm border border-[#f3d9dd] max-w-lg relative mx-auto">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/60 backdrop-blur-sm rotate-2 shadow-sm"></div>
          <div className="text-[#8c6b71] leading-relaxed">
            Hello! Welcome to my creative space. I'm Annisa Nuraufa, but you can call me Aufa. Here, I share a little bit about my coding journey, UI/UX design, and other fun stuff!
          </div>
        </div>

        <div 
          onClick={() => router.push('/portofolio')}
          className="mt-6 px-6 py-2 bg-[#ecd0d5] text-[#8c6b71] rounded-full hover:bg-[#e0a6b1] hover:text-white transition-colors cursor-pointer font-medium shadow-sm"
        >
          View My Works
        </div>
      </div>

      {/* SECTION: TECH & TOOLS */}
      <div className="w-full max-w-2xl mx-auto text-center space-y-6 px-6">
        <h2 className="text-3xl font-serif text-[#c77b89] italic">Tech & Tools</h2>
        <div className="text-[#8c6b71] text-sm mb-4">What I use to bring ideas to life</div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 bg-white border border-[#f3d9dd] rounded-2xl shadow-sm text-[#b66675] font-medium">Next.js</div>
          <div className="px-6 py-3 bg-white border border-[#f3d9dd] rounded-2xl shadow-sm text-[#b66675] font-medium">React</div>
          <div className="px-6 py-3 bg-white border border-[#f3d9dd] rounded-2xl shadow-sm text-[#b66675] font-medium">Tailwind CSS</div>
          <div className="px-6 py-3 bg-white border border-[#f3d9dd] rounded-2xl shadow-sm text-[#b66675] font-medium">Figma</div>
        </div>
      </div>

    </div>
  );
}
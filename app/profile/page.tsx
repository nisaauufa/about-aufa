import Image from 'next/image';

export default function Profile() {
  return (
    <div className="space-y-24 animate-fade-in pb-24">
      
      {/* SECTION: ABOUT ME */}
      <div className="space-y-10 mt-12">
        <div className="text-center">
          <h1 className="text-5xl font-serif text-[#b66675] italic mb-2">About Me</h1>
          <div className="text-[#8c6b71]">A closer look at my daily life</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#f3d9dd]">
            <h2 className="text-3xl font-serif text-[#e0a6b1] italic mb-4">Hi there</h2>
            <div className="text-[#7a6064] space-y-3 text-sm">
              <div><strong>Name:</strong> Annisa Nuraufa (Aufa)</div>
              <div><strong>Education:</strong> SDIT Nurul Fikri ➔ SMP Telkom Makassar ➔ SMK Telkom Makassar (Software Engineering)</div>
            </div>
          </div>

          <div className="bg-[#f6d7dd] p-6 rounded-3xl shadow-sm flex items-center justify-between">
            <div className="pr-4">
               <h2 className="text-3xl font-serif text-[#b66675] italic mb-2">Fun fact</h2>
               <div className="text-[#8c6b71] text-sm space-y-2">
                  <div>For fun, I really enjoy solving Rubik's cubes and playing the piano.</div>
                  <div>Currently obsessed with listening to LANY and fangirling over Seventeen (especially Jeonghan!).</div>
               </div>
            </div>
            <div className="bg-white p-2 pb-8 shadow-md rotate-3 flex-shrink-0 w-24 h-28 relative hidden sm:block">
               <Image src="/foto-aufa.jpg" alt="Fun Fact Photo" fill className="object-cover p-2 pb-8" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: LEADERSHIP & EXPERIENCE */}
      <div className="pt-16 space-y-8 border-t border-[#f3d9dd]">
        <h2 className="text-4xl font-serif text-[#b66675] italic text-center">Beyond Coding</h2>
        
        <div className="space-y-6">
          {/* Experience 1: OSIS & Stelkphoria */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#f3d9dd] flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full space-y-2">
              <h3 className="text-2xl font-serif text-[#e0a6b1] italic">Student Council & Event Management</h3>
              <div className="text-[#7a6064] text-sm leading-relaxed">
                Serving as the <strong>Vice Chair of the Student Council</strong> for the 2025/2026 period has been an incredible journey. I am deeply involved in event management and ensuring everything runs flawlessly from behind the scenes. For instance, at Stelkphoria 2026, I took hands-on charge of the Competition and Equipment divisions (PJ Lomba & Perlengkapan).
              </div>
            </div>
          </div>

          {/* Experience 2: Public Speaking */}
          <div className="bg-[#fdf4f5] p-8 rounded-3xl shadow-sm border border-[#f3d9dd] flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="w-full space-y-2">
              <h3 className="text-2xl font-serif text-[#b66675] italic">Public Speaking & MC</h3>
              <div className="text-[#8c6b71] text-sm leading-relaxed">
                I also love taking the stage! I regularly serve as the Master of Ceremonies (MC) for major school-wide events, including GAMMARA, Pesantren Kilat, and Maulid Nabi, keeping the energy high and the audience engaged.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
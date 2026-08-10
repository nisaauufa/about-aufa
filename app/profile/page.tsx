export default function Profile() {
  return (
    <div className="space-y-24 animate-fade-in pb-24 mt-12">
      
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-5xl font-serif text-[#b66675] italic mb-2">Tentang Saya</h1>
          <div className="text-[#8c6b71]">Sekilas tentang latar belakang dan ketertarikan saya.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#f3d9dd]">
            <h2 className="text-3xl font-serif text-[#e0a6b1] italic mb-4">Profil Singkat</h2>
            <div className="text-[#7a6064] space-y-3 text-sm leading-relaxed">
              <div><strong>Nama:</strong> Annisa Nuraufa (Aufa)</div>
              <div><strong>Pendidikan:</strong> SDIT Nurul Fikri ➔ SMP Telkom Makassar ➔ SMK Telkom Makassar (Rekayasa Perangkat Lunak)</div>
              <div><strong>Fokus:</strong> Pengembangan web dan desain UI/UX.</div>
            </div>
          </div>

          <div className="bg-[#f6d7dd] p-6 rounded-3xl shadow-sm flex items-center justify-between">
            <div className="pr-4">
               <h2 className="text-3xl font-serif text-[#b66675] italic mb-2">Fakta Menarik</h2>
               <div className="text-[#8c6b71] text-sm space-y-2 leading-relaxed">
                  <div>Saya gemar menyelesaikan kubus Rubik dan bermain piano.</div>
                  <div>Memiliki ketertarikan pada grup musik LANY dan SEVENTEEN.</div>
               </div>
            </div>
            
            <div className="bg-white p-2 pb-8 shadow-md rotate-3 flex-shrink-0 w-24 h-28 relative hidden sm:flex items-center justify-center border border-[#ecd0d5]">
               <span className="text-[10px] text-[#c77b89] font-serif italic text-center">Foto</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 space-y-10 border-t border-[#f3d9dd]">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-[#b66675] italic">Perjalanan & Pencapaian</h2>
          <div className="text-[#8c6b71] text-sm mt-2">Beberapa pengalaman penting dalam bidang akademik dan organisasi.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#f3d9dd] hover:-translate-y-2 transition-transform duration-300 relative">
            <div className="w-10 h-10 bg-[#fdf4f5] rounded-full flex items-center justify-center text-xl mb-4 border border-[#ecd0d5]">🥇</div>
            <h3 className="font-serif text-xl text-[#c77b89] italic">Akademik</h3>
            <div className="text-[10px] text-[#8c6b71] font-bold tracking-widest uppercase mt-1 mb-3">SDIT Nurul Fikri</div>
            <div className="text-sm text-[#7a6064] leading-relaxed">Mempertahankan predikat <strong>SMART Student</strong> sejak kelas 1 hingga 5 SD, yang membangun dasar kedisiplinan dan etos kerja.</div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#f3d9dd] hover:-translate-y-2 transition-transform duration-300 relative">
            <div className="w-10 h-10 bg-[#fdf4f5] rounded-full flex items-center justify-center text-xl mb-4 border border-[#ecd0d5]">🤝</div>
            <h3 className="font-serif text-xl text-[#c77b89] italic">Organisasi</h3>
            <div className="text-[10px] text-[#8c6b71] font-bold tracking-widest uppercase mt-1 mb-3">SMK Telkom Makassar</div>
            <div className="text-sm text-[#7a6064] leading-relaxed">Menjabat sebagai <strong>Wakil Ketua OSIS 2</strong> (Periode 2025/2026) dan aktif mengelola puluhan acara sekolah untuk memastikan kelancaran setiap program.</div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#f3d9dd] hover:-translate-y-2 transition-transform duration-300 relative">
            <div className="w-10 h-10 bg-[#fdf4f5] rounded-full flex items-center justify-center text-xl mb-4 border border-[#ecd0d5]">💻</div>
            <h3 className="font-serif text-xl text-[#c77b89] italic">Manajemen Proyek</h3>
            <div className="text-[10px] text-[#8c6b71] font-bold tracking-widest uppercase mt-1 mb-3">Go.Sigap</div>
            <div className="text-sm text-[#7a6064] leading-relaxed">Bertanggung jawab sebagai <strong>Project Manager</strong> untuk Go.Sigap, mengawasi siklus pengembangan hingga menghasilkan dasbor apotek yang fungsional.</div>
          </div>
        </div>
      </div>

      <div className="pt-16 space-y-6 border-t border-[#f3d9dd]">
         <div className="bg-[#fdf4f5] p-8 rounded-3xl shadow-sm border border-[#f3d9dd] flex flex-col md:flex-row gap-6 items-center hover:border-[#e0a6b1] transition-colors">
            <div className="w-full space-y-3">
              <h3 className="text-3xl font-serif text-[#b66675] italic">Public Speaking</h3>
              <div className="text-[#8c6b71] text-sm leading-relaxed max-w-3xl">
                Selain berfokus pada teknologi dan kepanitiaan, saya memiliki pengalaman menjadi <strong>Master of Ceremonies (MC)</strong> pada berbagai kegiatan sekolah. Pengalaman ini melatih kemampuan komunikasi dan adaptasi secara langsung di depan audiens.
              </div>
            </div>
         </div>
      </div>

    </div>
  );
}
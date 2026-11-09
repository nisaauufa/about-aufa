import ProjectCard from '@/components/ProjectCard';

export default async function Portofolio() {
  const respon = await fetch('http://localhost:3000/api/proyek', { cache: 'no-store' });
  const projects = await respon.json();

  return (
    <div className="space-y-24 animate-fade-in pb-24 mt-12">
      
      {/* --- BAGIAN KARYA/PROJECT --- */}
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-serif text-[#b66675] italic mb-2">Portofolio</h1>
          <div className="text-[#8c6b71]">Kumpulan proyek desain dan pengembangan aplikasi.</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj: any) => (
            <ProjectCard 
              key={proj.id}
              title={proj.title}
              category={proj.category}
              desc={proj.desc}
            />
          ))}
        </div>
      </div>

      {/* --- BAGIAN SERTIFIKAT (FOTO) --- */}
      <div className="pt-16 border-t border-[#f3d9dd]">
        <h2 className="text-4xl font-serif text-[#b66675] italic mb-2 text-center">Sertifikat</h2>
        <p className="text-[#8c6b71] text-center mb-12">Bukti nyata pencapaian dan kompetensi saya.</p>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#f3d9dd] hover:border-[#c77b89] hover:shadow-md transition-all group">
            
            {/* Area Foto Sertifikat */}
            <div className="w-full h-auto bg-[#fdf4f5] rounded-2xl mb-6 flex flex-col items-center justify-center border border-[#ecd0d5] overflow-hidden relative">
              <img 
                src="/sertifikat-js.jpg" 
                alt="Sertifikat JavaScript Essentials 2" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h3 className="font-bold text-[#c77b89] text-xl mb-2">JavaScript Essentials 2</h3>
            <p className="text-sm text-[#8c6b71] font-medium tracking-wide">Cisco Networking Academy</p>
            <p className="text-xs text-[#a2868a] mt-2">Diterbitkan: 11 Jun 2026</p>
          </div>
        </div>
      </div>

    </div>
  );
}
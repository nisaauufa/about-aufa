import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export default function Portofolio() {
  const projects = [
    { 
      title: "Go Sigap", 
      category: "Next.js Dashboard", 
      desc: "Sistem manajemen apotek dengan desain minimalis dan fungsional."
    },
    { 
      title: "Platemate", 
      category: "UI/UX & Mobile", 
      desc: "Aplikasi untuk menemukan resep dan memesan bahan masakan secara langsung."
    },
    { 
      title: "Quizify", 
      category: "Educational App", 
      desc: "Alat inovatif untuk menganalisis materi dan membuat kuis interaktif secara otomatis."
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in pb-24 mt-12">
      <div className="text-center">
        <h1 className="text-5xl font-serif text-[#b66675] italic mb-2">Portofolio</h1>
        <div className="text-[#8c6b71]">Kumpulan proyek desain dan pengembangan aplikasi.</div>
        
        <div className="mt-6">
          <Link href="/portofolio/blog">
            <span className="px-6 py-2 bg-[#ecd0d5] text-[#8c6b71] rounded-full hover:bg-[#e0a6b1] hover:text-white transition-colors cursor-pointer font-medium text-sm inline-block shadow-sm">
              📖 Baca Blog Artikel →
            </span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <ProjectCard 
            key={index}
            title={proj.title}
            category={proj.category}
            desc={proj.desc}
          />
        ))}
      </div>
    </div>
  );
}
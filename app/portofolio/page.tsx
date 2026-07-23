import Image from 'next/image';

export default function Portofolio() {
  const projects = [
    { 
      title: "Go Sigap", 
      category: "Next.js Dashboard", 
      desc: "A clean and functional pharmacy management system dashboard.",
      image: "/go-sigap.png" 
    },
    { 
      title: "Platemate", 
      category: "UI/UX & Mobile", 
      desc: "Discover delicious recipes and easily order the exact ingredients you need, delivered straight to your door.",
      image: "/image_d078ec.png"
    },
    { 
      title: "Quizify", 
      category: "Educational App", 
      desc: "An innovative tool that automatically analyzes uploaded materials (Text/PDF) to generate interactive quizzes in multiple formats.",
      image: "/image_d07cad.png"
    }
  ];

  return (
    <div className="space-y-24 animate-fade-in pb-24 mt-12">
      
      {/* SECTION: MY WORKS */}
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-5xl font-serif text-[#b66675] italic mb-2">My Works</h1>
          <div className="text-[#8c6b71]">A collection of projects I've built and designed</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className={`bg-white p-4 pb-10 shadow-lg hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
              
              <div className="w-full h-48 bg-[#fdf4f5] border border-[#f3d9dd] flex flex-col items-center justify-center mb-4 relative overflow-hidden">
                <Image src={proj.image} alt={proj.title} fill className="object-cover" />
              </div>
              
              <div className="text-center space-y-1">
                <h3 className="font-serif text-xl text-[#b66675] italic">{proj.title}</h3>
                <div className="text-[10px] text-[#8c6b71] tracking-widest uppercase font-semibold">{proj.category}</div>
                <div className="text-xs text-[#a2868a] mt-3 px-1 leading-relaxed">{proj.desc}</div>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: LET'S CONNECT */}
      <div className="pt-16 pb-12 border-t border-[#f3d9dd] text-center space-y-8">
        <h2 className="text-4xl font-serif text-[#b66675] italic">Let's Connect!</h2>
        <div className="text-[#8c6b71] max-w-lg mx-auto leading-relaxed">
          I'm always open to discussing new ideas, tech, web development, or even just sharing our favorite LANY tracks! Feel free to reach out.
        </div>
        
        <div className="flex justify-center gap-6 pt-4">
          <div className="px-8 py-3 bg-[#ecd0d5] text-[#8c6b71] rounded-full hover:bg-[#e0a6b1] hover:text-white transition-colors cursor-pointer font-medium shadow-sm">
            Email Me
          </div>
          <div className="px-8 py-3 bg-white border border-[#ecd0d5] text-[#8c6b71] rounded-full hover:bg-[#f6d7dd] transition-colors cursor-pointer font-medium shadow-sm">
            Instagram
          </div>
        </div>
      </div>

    </div>
  );
}
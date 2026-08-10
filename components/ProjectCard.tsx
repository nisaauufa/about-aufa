"use client"; 

import { useState } from 'react';

export default function ProjectCard({ title, category, desc }: { title: string, category: string, desc: string }) {
  // 1. State untuk Like
  const [angkaLike, setAngkaLike] = useState(0);
  const [sudahLike, setSudahLike] = useState(false);

  // 2. State untuk Komentar Khusus Karya Ini
  const [inputKomentar, setInputKomentar] = useState("");
  const [daftarKomentar, setDaftarKomentar] = useState<string[]>([]);

  const tanganiKlikLike = () => {
    if (sudahLike === false) {
      setAngkaLike(angkaLike + 1);
      setSudahLike(true);
    } else {
      setAngkaLike(angkaLike - 1);
      setSudahLike(false);
    }
  };

  const tambahKomentar = () => {
    if (inputKomentar.trim() !== "") {
      setDaftarKomentar([...daftarKomentar, inputKomentar]);
      setInputKomentar("");
    }
  };

  return (
    <div className="bg-white p-5 shadow-lg rounded-2xl border border-[#f3d9dd] flex flex-col justify-between space-y-4">
      <div>
        {/* Placeholder Cover Karya */}
        <div className="w-full h-48 bg-[#fdf4f5] flex items-center justify-center mb-4 rounded-xl border border-[#ecd0d5]">
          <span className="text-xs text-[#c77b89] font-mono">Cover: {title}</span>
        </div>
        
        <div className="text-center space-y-2">
          {angkaLike >= 5 && (
            <div className="text-xs text-orange-400 font-bold animate-pulse tracking-wide">
              🔥 Proyek Terpopuler!
            </div>
          )}
          
          <h3 className="font-serif text-xl text-[#b66675] italic">{title}</h3>
          <div className="text-[10px] text-[#8c6b71] tracking-widest uppercase font-semibold">{category}</div>
          <div className="text-xs text-[#a2868a] mt-2 leading-relaxed">{desc}</div>
        </div>

        {/* Fitur Like */}
        <div className="flex items-center justify-between pt-4 px-1 border-t border-[#f3d9dd] mt-4">
          <div className="text-xs font-semibold text-[#c77b89]">{angkaLike} Likes</div>
          
          <div 
            onClick={tanganiKlikLike}
            className={`px-4 py-1 text-xs font-bold rounded-full cursor-pointer transition-colors ${
              sudahLike ? 'bg-[#c77b89] text-white' : 'bg-[#fdf4f5] text-[#c77b89] border border-[#c77b89]'
            }`}
          >
            {sudahLike ? "Batal Suka" : "Suka"}
          </div>
        </div>
      </div>

      {/* Fitur Komentar Per Karya */}
      <div className="pt-4 border-t border-[#f3d9dd] space-y-3">
        <div className="text-xs font-semibold text-[#8c6b71]">Komentar Proyek:</div>
        
        {/* Input Komentar */}
        <div className="flex gap-2">
          <input 
            type="text" 
            value={inputKomentar}
            onChange={(e) => setInputKomentar(e.target.value)}
            placeholder="Tulis komentar..."
            className="flex-grow p-2 rounded-lg border border-[#ecd0d5] focus:outline-none focus:border-[#c77b89] text-xs text-[#7a6064] bg-[#fdf4f5]"
          />
          <div 
            onClick={tambahKomentar}
            className="px-3 py-2 bg-[#ecd0d5] text-[#8c6b71] rounded-lg hover:bg-[#e0a6b1] hover:text-white transition-colors cursor-pointer font-medium text-xs flex items-center shadow-sm"
          >
            Kirim
          </div>
        </div>

        {/* List Komentar Karya Ini */}
        <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
          {daftarKomentar.length === 0 ? (
            <div className="text-[10px] text-[#a2868a] italic">Belum ada komentar di proyek ini.</div>
          ) : (
            daftarKomentar.map((komentar, index) => (
              <div key={index} className="p-2 bg-[#fdf4f5] rounded-lg border border-[#f3d9dd] text-xs text-[#7a6064] leading-relaxed">
                💬 {komentar}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
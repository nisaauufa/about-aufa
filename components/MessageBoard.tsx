"use client";

import { useState } from 'react';

export default function MessageBoard() {
  const [inputTeks, setInputTeks] = useState("");
  const [daftarPesan, setDaftarPesan] = useState<string[]>([]);

  const tambahPesan = () => {
    if (inputTeks.trim() !== "") {
      setDaftarPesan([...daftarPesan, inputTeks]);
      setInputTeks("");
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#f3d9dd] max-w-2xl mx-auto w-full">
      <h2 className="text-3xl font-serif text-[#b66675] italic mb-2 text-center">Tinggalkan Pesan</h2>
      <div className="text-center text-sm text-[#8c6b71] mb-6">Tuliskan pesan singkat di sini.</div>
      
      <div className="flex gap-3 mb-8">
        <input 
          type="text" 
          value={inputTeks}
          onChange={(e) => setInputTeks(e.target.value)}
          placeholder="Ketik pesan Anda..."
          className="flex-grow p-4 rounded-xl border border-[#ecd0d5] focus:outline-none focus:border-[#c77b89] text-sm text-[#7a6064] bg-[#fdf4f5]"
        />
        <div 
          onClick={tambahPesan}
          className="px-8 py-4 bg-[#ecd0d5] text-[#8c6b71] rounded-xl hover:bg-[#e0a6b1] hover:text-white transition-colors cursor-pointer font-medium text-sm flex items-center shadow-sm"
        >
          Kirim
        </div>
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
        {daftarPesan.length === 0 ? (
          <div className="text-center text-xs text-[#a2868a] italic py-4">Belum ada pesan.</div>
        ) : (
          daftarPesan.map((pesan, index) => (
            <div key={index} className="p-4 bg-[#fdf4f5] rounded-xl border border-[#f3d9dd] text-sm text-[#7a6064] leading-relaxed shadow-sm">
              {pesan}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
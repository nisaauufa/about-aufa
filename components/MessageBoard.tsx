'use client';
import { useState } from 'react';

export default function MessageBoard() {
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  
  const [daftarPesan, setDaftarPesan] = useState([
    { id: 1, nama: "HRD Go Sigap", isi: "Desain antarmukanya sangat fungsional dan kodenya rapi. Kerja bagus!" },
    { id: 2, nama: "Klien Platemate", isi: "Sangat responsif dan kreatif. Hasil aplikasinya persis seperti yang saya mau." }
  ]);

  const kirimPesan = (e: React.FormEvent) => {
    e.preventDefault();
    if (nama.trim() !== '' && pesan.trim() !== '') {
      // Bikin pesan baru dan masukkan ke urutan paling atas
      const pesanBaru = { id: Date.now(), nama: nama, isi: pesan };
      setDaftarPesan([pesanBaru, ...daftarPesan]);
      
      // Kosongkan kolom input setelah terkirim
      setNama('');
      setPesan('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-12">
      
      {/* 1. Form Kirim Pesan */}
      <form onSubmit={kirimPesan} className="bg-white p-8 rounded-3xl shadow-sm border border-[#f3d9dd] space-y-4 text-left relative z-10">
        <div>
          <label className="block text-sm text-[#8c6b71] mb-1 font-bold tracking-wide uppercase">Nama Anda</label>
          <input 
            type="text" 
            value={nama} 
            onChange={(e) => setNama(e.target.value)} 
            required 
            className="w-full p-4 rounded-xl border border-[#ecd0d5] focus:outline-none focus:border-[#c77b89] focus:ring-2 focus:ring-[#fdf4f5] text-[#7a6064] bg-white transition-all" 
            placeholder="Masukkan nama..."
          />
        </div>
        <div>
          <label className="block text-sm text-[#8c6b71] mb-1 font-bold tracking-wide uppercase">Pesan</label>
          <textarea 
            value={pesan} 
            onChange={(e) => setPesan(e.target.value)} 
            required 
            rows={3} 
            className="w-full p-4 rounded-xl border border-[#ecd0d5] focus:outline-none focus:border-[#c77b89] focus:ring-2 focus:ring-[#fdf4f5] text-[#7a6064] bg-white transition-all" 
            placeholder="Tuliskan testimoni atau pesan Anda..."
          ></textarea>
        </div>
        <button type="submit" className="w-full py-4 bg-[#c77b89] text-white font-bold rounded-xl hover:bg-[#b66675] hover:shadow-md transition-all">
          Kirim Pesan
        </button>
      </form>

      {/* 2. Daftar Pesan yang Langsung Tampil */}
      <div className="space-y-6 text-left">
        <h3 className="text-2xl font-serif text-[#b66675] italic text-center mb-8">Pesan dari Pengunjung</h3>
        
        {daftarPesan.map((item) => (
          <div key={item.id} className="p-6 bg-[#fdf4f5] rounded-3xl border border-[#ecd0d5] relative shadow-sm hover:-translate-y-1 transition-transform">
            <span className="absolute top-4 left-6 text-6xl text-[#e0a6b1] opacity-40 font-serif leading-none">"</span>
            <p className="text-[#7a6064] italic mb-4 relative z-10 pt-4 text-lg leading-relaxed">{item.isi}</p>
            <p className="text-[#c77b89] font-bold text-sm text-right uppercase tracking-widest">— {item.nama}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
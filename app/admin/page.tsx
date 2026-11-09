import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in pb-24 mt-4">
      
      {/* Header Admin */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#f3d9dd] pb-6 gap-4">
        <div>
          <h1 className="text-4xl font-serif text-[#b66675] italic">Dasbor Admin</h1>
          <p className="text-[#8c6b71] text-sm mt-1">Selamat datang kembali, Annisa Nuraufa.</p>
        </div>
        <Link href="/">
          <span className="px-5 py-2 bg-white border border-[#c77b89] text-[#c77b89] rounded-full hover:bg-[#fdf4f5] transition-colors cursor-pointer font-medium text-sm shadow-sm">
            ← Kembali ke Beranda
          </span>
        </Link>
      </div>

      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#ecd0d5] shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-[#8c6b71] text-xs font-bold uppercase tracking-wider mb-2">Total Proyek</h3>
          <p className="text-5xl font-serif text-[#c77b89]">3</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-[#ecd0d5] shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-[#8c6b71] text-xs font-bold uppercase tracking-wider mb-2">Pesan Masuk</h3>
          <p className="text-5xl font-serif text-[#c77b89]">12</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-[#ecd0d5] shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-[#8c6b71] text-xs font-bold uppercase tracking-wider mb-2">Artikel Blog</h3>
          <p className="text-5xl font-serif text-[#c77b89]">100</p>
        </div>
      </div>

      {/* Tabel Pesan Terbaru */}
      <div className="bg-white p-8 rounded-3xl border border-[#f3d9dd] shadow-sm mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif text-[#b66675] italic">Pesan Terbaru</h2>
          <span className="text-xs text-[#c77b89] font-medium cursor-pointer hover:underline">Lihat Semua</span>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-[#fdf4f5] rounded-xl border border-[#ecd0d5] flex justify-between items-start md:items-center flex-col md:flex-row gap-2">
            <div>
              <p className="font-bold text-[#c77b89]">HRD Go Sigap</p>
              <p className="text-sm text-[#7a6064] mt-1">Desain antarmukanya sangat fungsional dan kodenya rapi. Kerja bagus!</p>
            </div>
            <span className="text-[10px] bg-white px-2 py-1 rounded border border-[#ecd0d5] text-[#8c6b71] whitespace-nowrap">Hari ini, 09:00</span>
          </div>
          
          <div className="p-4 bg-white rounded-xl border border-[#ecd0d5] flex justify-between items-start md:items-center flex-col md:flex-row gap-2">
            <div>
              <p className="font-bold text-[#c77b89]">Klien Platemate</p>
              <p className="text-sm text-[#7a6064] mt-1">Sangat responsif dan kreatif. Hasil aplikasinya persis seperti yang saya mau.</p>
            </div>
            <span className="text-[10px] bg-white px-2 py-1 rounded border border-[#ecd0d5] text-[#8c6b71] whitespace-nowrap">Kemarin, 14:30</span>
          </div>
        </div>
      </div>

    </div>
  );
}
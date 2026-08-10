import Link from 'next/link'; 

export default async function HalamanBlog() {
  const respon = await fetch('https://jsonplaceholder.typicode.com/posts');
  const daftarArtikel = await respon.json();

  return (
    <div className="p-8 max-w-4xl mx-auto mt-12 animate-fade-in pb-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-[#b66675] italic mb-2">Kumpulan Artikel Blog</h2>
        <p className="text-[#8c6b71] text-sm">Data di bawah ini diambil secara langsung menggunakan API.</p>
      </div>

      <div className="grid gap-6">
        {daftarArtikel.map((artikel: any) => (
          <div key={artikel.id} className="border border-[#f3d9dd] p-6 rounded-2xl bg-white shadow-sm hover:border-[#e0a6b1] transition-colors">
            
            <Link href={`/portofolio/blog/${artikel.id}`}>
              <h3 className="text-xl font-serif text-[#c77b89] capitalize hover:text-[#b66675] cursor-pointer mb-2">
                {artikel.title}
              </h3>
            </Link>

            <p className="text-[#7a6064] text-sm leading-relaxed">{artikel.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
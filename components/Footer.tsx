export default function Footer() {
  return (
    <footer className="w-full border-t border-[#f3d9dd] bg-[#fdf4f5] mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-center md:text-left">
          <h3 className="font-serif text-[#b66675] italic text-lg">Aufa's Space</h3>
          <p className="text-[#8c6b71] text-xs mt-1">
            © {new Date().getFullYear()} Annisa Nuraufa. Dibuat dengan Next.js & Tailwind CSS.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://t.me/nisaauufa" target="_blank" className="text-[#c77b89] hover:text-[#b66675] text-sm font-medium transition-colors">
            Telegram
          </a>
          <a href="https://github.com/nisaauufa" target="_blank" className="text-[#c77b89] hover:text-[#b66675] text-sm font-medium transition-colors">
            GitHub
          </a>
        </div>
        
      </div>
    </footer>
  );
}
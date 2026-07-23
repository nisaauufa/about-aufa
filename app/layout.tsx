import Navbar from '@/components/navbar';
import './globals.css';

export const metadata = {
  title: "Aufa's Space",
  description: 'Annisa Nuraufa - Personal Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f9e9ec] min-h-screen font-sans text-gray-800 flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
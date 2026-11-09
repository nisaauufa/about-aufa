import { NextResponse } from 'next/server';

export async function GET() {
  const daftarProyek = [
    {
      id: 1,
      title: "Go Sigap",
      category: "Next.js Dashboard",
      desc: "Sistem manajemen apotek dengan desain minimalis dan fungsional."
    },
    {
      id: 2,
      title: "Platemate",
      category: "UI/UX & Mobile",
      desc: "Aplikasi untuk menemukan resep dan memesan bahan masakan secara langsung."
    },
    {
      id: 3,
      title: "Quizify",
      category: "Educational App",
      desc: "Alat inovatif untuk menganalisis materi dan membuat kuis interaktif secara otomatis."
    }
  ];

  return NextResponse.json(daftarProyek);
}
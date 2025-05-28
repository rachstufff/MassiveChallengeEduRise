import React, { useState } from "react";
// import Button from "./ButtonProfile"; // Tidak diperlukan lagi jika tombol "Lihat detail" dihapus

// IMPOR SEMUA GAMBAR ARTIKEL YANG DIGUNAKAN!
import artikel2 from "/img/eduacademy/MyIC_Article140651.jpeg";
import artikel3 from "/img/eduacademy/bisanugas-59.jpg.webp";
import artikel4 from "/img/eduacademy/artikel4.jpg"; // <--- TAMBAHKAN INI
import artikel5 from "/img/eduacademy/images.jpeg"; // <--- TAMBAHKAN INI
import artikel6 from "/img/eduacademy/5-syarat-umum-yang-harus-dikuasai-pencari-beasiswa_uiiKRqIel6.jpeg"; // <--- TAMBAHKAN INI

// ====================================================================
// KOMPONEN ArticleCard (Tidak ada perubahan signifikan di sini dari sebelumnya)
// ====================================================================
const ArticleCard = ({
  author,
  title,
  source,
  hoursAgo,
  description,
  image,
  link,
}) => {
  const footerText = hoursAgo ? `${hoursAgo} hours ago • ${source}` : source;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h2 className="text-lg font-semibold mb-2 line-clamp-2">
        {title}
      </h2>

      <p className="text-sm text-gray-600 mb-2 line-clamp-3">
        {description}
      </p>

      <span className="text-xs text-gray-400">
        {footerText}
      </span>
    </a>
  );
};

const SavedArticles = () => {
  const [articles] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      title: "Enam Strategi Efektif untuk Meraih Beasiswa Secara Optimal",
      description: "Tips penting bagi mahasiswa agar bisa memperoleh beasiswa secara maksimal dan tepat sasaran.",
      hoursAgo: "17",
      source: "Zonamahasiswa.id",
      link: "https://www.idntimes.com/life/education/fida-azizah/mencari-dan-mendapatkan-beasiswa-c1c2"
    },
    {
      id: 2,
      image: artikel2,
      title: "Panduan Lengkap Beasiswa Dalam & Luar Negeri",
      description: "Langkah-langkah penting dan praktis untuk mendapatkan beasiswa di dalam maupun luar negeri.",
      source: "Beasiswakita.com",
      link: "https://www.hotcourses.co.id/study-abroad-info/student-finance/panduan-beasiswa-fully-funded-s1-s2-s3/"
    },
    {
      id: 3,
      image: artikel3,
      title: "Cara Menulis Essay Beasiswa yang Meyakinkan",
      description: "Strategi menulis essay yang menarik dan profesional untuk lolos seleksi beasiswa.",
      source: "Duniadosen.com",
      link: "https://duniadosen.com/contoh-esai-beasiswa-lengkap/"
    },
  ]);

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5">
      <h2 className="text-xl font-semibold font-poppins text-[#17355c] mb-10">
        Artikel Tersimpan
      </h2>

      {/* Grid 3 kolom yang responsif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            hoursAgo={article.hoursAgo}
            source={article.source}
            link={article.link}
          />
        ))}
      </div>

      {/* Tombol "Lihat Lebih Banyak" jika diperlukan */}
      {/* <div className="text-center mt-10">
        <button className="bg-[#3375CC] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Lihat Lebih Banyak
        </button>
      </div> */}
    </div>
  );
};

export default SavedArticles;
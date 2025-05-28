import herobeasiswa from "/img/eduacademy/Colorful Playful Career Planner Presentation 1.png";
import artikel2 from "/img/eduacademy/MyIC_Article140651.jpeg";
import artikel3 from "/img/eduacademy/bisanugas-59.jpg.webp";
import artikel4 from "/img/eduacademy/artikel4.jpg";
import artikel5 from "/img/eduacademy/images.jpeg";
import artikel6 from "/img/eduacademy/5-syarat-umum-yang-harus-dikuasai-pencari-beasiswa_uiiKRqIel6.jpeg";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

function Artikelbeasiswa() {
  return (
    <>
      <Header />
      <>
        

        {/* Hero Section */}
        <section
          className="relative text-white min-h-screen flex items-center overflow-hidden"
          style={{ background: "linear-gradient(to right, #265899, #0D1D33)" }}
        >
          {/* Gambar di kiri bawah */}
          <div className="absolute bottom-0 left-0 z-10 w-full md:w-1/2">
            <img
              src={herobeasiswa}
              alt="Students"
              className="w-full h-auto object-contain transform translate-y-[200px] scale-75"
            />
          </div>
          {/* Teks di kanan atas */}
          <div className="container mx-auto px-6 md:px-12 z-20 flex flex-col items-start md:items-end w-full">
            <div className="max-w-xl text-left mt-29 md:mt-0">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white mb-6 mt-[-90px]">
                <span className="">Beasiswa</span>
                <br />
                <span className="">dan</span>
                <br />
                <span className="text-[#DDA853]">Pendidikan</span>
                <br />
              </h1>
              <br />
              <a
                href="#artikel1"
                className="mt-4 bg-[#3375CC] hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Lengkungan putih di bawah */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
            <svg
              className="relative block w-full h-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                d="M0,64 C360,0 1080,160 1440,64 L1440,100 L0,100 Z"
              />
            </svg>
          </div>
        </section>
        {/* Section Artikel */}
        <section id="artikel1" className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Artikel 1 */}
            <a
              href="https://www.idntimes.com/life/education/fida-azizah/mencari-dan-mendapatkan-beasiswa-c1c2"
              target="_blank"
              className="block bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Strategi Beasiswa"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                Enam Strategi Efektif untuk Meraih Beasiswa Secara Optimal
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Tips penting bagi mahasiswa agar bisa memperoleh beasiswa secara
                maksimal dan tepat sasaran.
              </p>
              <span className="text-xs text-gray-400">
                17 hours ago • Zonamahasiswa.id
              </span>
            </a>
            {/* Artikel 2 */}
            <a
              href="https://www.hotcourses.co.id/study-abroad-info/student-finance/panduan-beasiswa-fully-funded-s1-s2-s3/"
              target="_blank"
              className="block bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={artikel2}
                alt="Panduan Beasiswa"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                Panduan Lengkap Beasiswa Dalam &amp; Luar Negeri
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Langkah-langkah penting dan praktis untuk mendapatkan beasiswa
                di dalam maupun luar negeri.
              </p>
              <span className="text-xs text-gray-400">
                1 day ago • Beasiswakita.com
              </span>
            </a>
            {/* Artikel 3 */}
            <a
              href="https://duniadosen.com/contoh-esai-beasiswa-lengkap/"
              target="_blank"
              className="block bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={artikel3}
                alt="Essay Beasiswa"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                Cara Menulis Essay Beasiswa yang Meyakinkan
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Strategi menulis essay yang menarik dan profesional untuk lolos
                seleksi beasiswa.
              </p>
              <span className="text-xs text-gray-400">
                2 days ago • Kalderanews.com
              </span>
            </a>
            {/* Artikel 4 */}
            <a
              href="https://ehef.id/post/tips-memilih-universitas-yang-tepat-untukmu/id"
              target="_blank"
              className="block bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={artikel4}
                alt="Memilih Universitas"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                Strategi Memilih Universitas Tujuan Beasiswa
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Memilih universitas tujuan sangat krusial dalam perencanaan
                studi dan aplikasi beasiswa luar negeri.
              </p>
              <span className="text-xs text-gray-400">
                3 days ago • Schoters.com
              </span>
            </a>
            {/* Artikel 5 */}
            <a
              href="https://glints.com/id/lowongan/tips-wawancara-beasiswa/"
              target="_blank"
              className="block bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={artikel5}
                alt="Wawancara Beasiswa"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                10 Tips Jitu Lolos Wawancara Beasiswa
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Persiapan wawancara sangat menentukan apakah kamu layak menerima
                beasiswa. Ikuti panduannya!
              </p>
              <span className="text-xs text-gray-400">
                4 days ago • Campuspedia
              </span>
            </a>
            {/* Artikel 6 */}
            <a
              href="https://www.hotcourses.co.id/study-abroad-info/university-applications/checklist-siap-dapat-beasiswa/"
              target="_blank"
              className="block bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={artikel6}
                alt="Syarat Beasiswa"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                Syarat Umum Beasiswa Luar Negeri yang Perlu Kamu Tahu
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Mulai dari dokumen hingga kemampuan bahasa Inggris, inilah
                syarat umum yang wajib kamu penuhi.
              </p>
              <span className="text-xs text-gray-400">
                5 days ago • Kitalulus.com
              </span>
            </a>
          </div>
          {/* Pagination atau Load More */}
          <div className="text-center mt-10">
            <button className="bg-[#3375CC] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Lihat Lebih Banyak
            </button>
          </div>
        </section>
      </>
      <Footer />
    </>
  );
}

export default Artikelbeasiswa;

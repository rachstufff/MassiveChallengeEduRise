import HeroArtikel from "/img/eduacademy/img.png";

function Artikel() {
  return (
    <>
      <>
        {/* Hero Section */}
        <section
          className="relative text-white min-h-screen flex items-center overflow-hidden"
          style={{ background: "linear-gradient(to right, #265899, #0D1D33)" }}
        >
          {/* Gambar di kiri bawah */}
          <div className="absolute bottom-0 left-0 z-10 w-full md:w-1/2">
            <img
              src={HeroArtikel}
              alt="Students"
              className="w-full object-cover mt-[-630px]"
            />
          </div>
          {/* Teks di kanan atas */}
          <div className="container mx-auto px-6 md:px-12 z-20 flex flex-col items-start md:items-end w-full">
            <div className="max-w-xl text-left mt-24 md:mt-0">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white mb-6 mt-[-90px]">
                <span className="">Learn</span>
                <br />
                <span className="">something</span>
                <br />
                <span className="">new, one</span>{" "}
                <span className="text-[#DDA853]">read</span>
                <br />
                <span className="">at a time.</span>
              </h1>
              <br />
              <a
                href="#more2"
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
        {/* Featured Articles */}
        <section id="more2" className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-center text-2xl font-bold mb-12">
            <span className="text-[#1F467A]">Featured</span>{" "}
            <span className="text-[#DDA853]">Articles</span>
          </h2>
          {/* Reusable Card Component */}
          <template id="card-template" />
          {/* Kategori 1: Beasiswa & Pendidikan */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-[#1F467A]">
              Beasiswa &amp; Pendidikan
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  Enam Strategi Efektif untuk Meraih Beasiswa Secara...
                </h4>
                <p className="text-sm text-gray-600">
                  Motivasi adalah salah satu faktor penting dalam meraih
                  beasiswa, terutama dalam penulisan esai...
                </p>
              </div>
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  Cara Menulis Esai yang Mengesankan
                </h4>
                <p className="text-sm text-gray-600">
                  Pelajari tips dan trik menyusun esai yang kuat dan penuh makna
                  untuk beasiswa luar negeri...
                </p>
              </div>
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  Tips Interview Beasiswa yang Sukses
                </h4>
                <p className="text-sm text-gray-600">
                  Siapkan dirimu dengan pertanyaan umum dan cara menjawab yang
                  meyakinkan panel pewawancara.
                </p>
              </div>
            </div>
            <br />
            <a
              href="/artikelbeasiswa"
              className="mt-4 bg-[#3375CC] text-white px-6 py-2 rounded-full text-sm"
            >
              Lihat Lainnya
            </a>
          </div>
          {/* Kategori 2: Pengembangan Diri & Karir */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-[#1F467A]">
              Pengembangan Diri &amp; Karir
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  Bangun Personal Branding yang Kuat
                </h4>
                <p className="text-sm text-gray-600">
                  Mulailah membangun reputasi profesionalmu secara online
                  melalui LinkedIn dan portofolio pribadi.
                </p>
              </div>
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  5 Soft Skill Penting untuk Dunia Kerja
                </h4>
                <p className="text-sm text-gray-600">
                  Komunikasi, kolaborasi, dan manajemen waktu jadi kunci sukses
                  dalam karirmu nanti.
                </p>
              </div>
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  Cara Menentukan Karier Setelah Lulus
                </h4>
                <p className="text-sm text-gray-600">
                  Kamu tidak harus langsung tahu semuanya, tapi ada cara
                  menyusun arah yang bisa kamu coba.
                </p>
              </div>
            </div>
            <button className="mt-4 bg-[#3375CC] text-white px-6 py-2 rounded-full text-sm">
              Lihat Lainnya
            </button>
          </div>
          {/* Kategori 3: Tips Belajar & Produktivitas */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-[#1F467A]">
              Tips Belajar &amp; Produktivitas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  Atur Waktu Belajar dengan Metode Pomodoro
                </h4>
                <p className="text-sm text-gray-600">
                  Teknik ini membantumu fokus dalam 25 menit dan istirahat
                  sejenak untuk jaga energi belajar.
                </p>
              </div>
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  Belajar Efektif Tanpa Lelah
                </h4>
                <p className="text-sm text-gray-600">
                  Gunakan prinsip active recall dan spaced repetition agar
                  ingatanmu lebih tahan lama.
                </p>
              </div>
              <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500"></div>
                <h4 className="font-semibold mb-2">
                  Cara Hindari Prokrastinasi
                </h4>
                <p className="text-sm text-gray-600">
                  Kenali penyebab kamu menunda-nunda dan ubahnya jadi kebiasaan
                  kecil yang konsisten.
                </p>
              </div>
            </div>
            <button className="mt-4 bg-[#3375CC] text-white px-6 py-2 rounded-full text-sm">
              Lihat Lainnya
            </button>
          </div>
        </section>
      </>
    </>
  );
}

export default Artikel;

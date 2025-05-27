import card2 from "/img/eduacademy/eab53ecb-a930-4105-a027-e728222f8a29.jpg";
import card3 from "/img/eduacademy/Link-Daftar-Beasiswa-LPDP-2025-Jadwal-Syarat-Pendaftaran.jpg";
import hero from "/img/eduacademy/Rectangle 5.png";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

function Eduacademy() {
  return (
    <>
      <Header />
      <>
        {/* Hero Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Image Side */}
            <div className="flex-1">
              <img
                src={hero}
                alt="Motivasi Pendidikan"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            {/* Text Side */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#3375CC] leading-tight">
                Jendela Dunia Pendidikan
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#DDA853] mt-3">
                Ada di sini!
              </h2>
              <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0">
                EduRise hadir sebagai platform bimbingan dan edukasi untuk
                membantu meraih beasiswa dan menggapai mimpi lewat pendidikan.
              </p>
              <a
                href="#more"
                className="mt-8 inline-block bg-[#3375CC] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                Gabung Sekarang
              </a>
            </div>
          </div>
        </section>
        {/* EduAcademy Section */}
        <section
          id="more"
          className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 md:px-10 py-16"
        >
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image Card */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <img
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="EduAcademy Avatar"
                  className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
                />
                <p className="font-medium text-gray-700 text-center text-lg">
                  EduRise: Buka Jalan ke Beasiswa
                </p>
                <span className="mt-2 text-sm text-gray-500">
                  #BelajarBareng #Mentorship
                </span>
              </div>
            </div>
            {/* Right: Text & CTA */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold text-[#3375CC] leading-snug">
                Kenal <span className="text-[#DDA853]">EduAcademy</span>?
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
                EduAcademy adalah bagian dari <strong>EduRise</strong> yang
                dirancang untuk membantu pelajar dan mahasiswa mengembangkan
                keterampilan praktis dalam persiapan beasiswa, karier, dan
                pengembangan diri.
              </p>
              {/* Highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm">
                    Live class mingguan seputar beasiswa &amp; soft skill
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm">
                    Mentoring bersama awardee &amp; expert
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm">
                    Sertifikat &amp; akses rekaman kelas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm">
                    Komunitas belajar interaktif
                  </p>
                </div>
              </div>
              {/* CTA */}
              <a
                href="#more1"
                className="mt-8 inline-block bg-[#3375CC] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                Explore Program EduAcademy
              </a>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="more1" className="px-6 py-20 bg-gray-50 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Explore <span className="text-[#DDA853]">EduAcademy</span>!
            Persiapan beasiswa jadi mudah dan terarah
          </h3>
          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left">
              <h4 className="font-semibold mb-2 text-lg">📹 Webinar</h4>
              <p className="text-gray-600 text-sm">
                Dapatkan wawasan baru, koneksi profesional, dan kesempatan untuk
                bertanya langsung.
              </p>
              <a
                href="/webinar"
                className="mt-4 inline-block bg-[#3375CC] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
              >
                Go to Page
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left">
              <h4 className="font-semibold mb-2 text-lg">💬 Forum Diskusi</h4>
              <p className="text-gray-600 text-sm">
                Tempat berbuka untuk saling bertukar ide, berdiskusi, dan
                berbagi pengalaman.
              </p>
              <a
                href="/forumdiskusi"
                className="mt-4 inline-block bg-[#3375CC] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
              >
                Go to Page
              </a>
            </div>
          </div>
        </section>
        {/* Statistik Section */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-100 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold">35+</p>
                <p>Webinar</p>
              </div>
              <div className="bg-blue-100 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold">20+</p>
                <p>Forum Diskusi</p>
              </div>
              <div className="bg-blue-100 rounded-xl p-6 text-center col-span-2">
                <p className="text-2xl font-bold">45+</p>
                <p>Artikel</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Sudahkah <span className="text-[#DDA853]">EduAcademy</span> Jadi
                Solusi Persiapan Beasiswamu?
              </h3>
              <a
                href="#articles"
                className="inline-block mt-4 bg-[#3375CC] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
              >
                Explore Now
              </a>
            </div>
          </div>
        </section>
        {/* Artikel Section */}
        <section id="articles" className="px-6 py-20 bg-gray-50 text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Biar beasiswa gak cuma wacana, baca artikel di{" "}
            <span className="text-[#DDA853]">EduAcademy</span> sekarang!
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition text-left">
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Strategi Beasiswa"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">
                  6 Strategi Efektif untuk Meraih Beasiswa
                </h4>
                <p className="text-sm text-gray-600">
                  Masuk akal adalah kunci utama dalam menyusun strategi
                  pendaftaran beasiswa.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition text-left">
              <img
                src={card2}
                alt="Time Management"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">
                  Tips Riset dan Time Management
                </h4>
                <p className="text-sm text-gray-600">
                  Cara jitu mengatur waktu, riset beasiswa, dan mengelola
                  prioritas dengan cerdas.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition text-left">
              <img
                src={card3}
                alt="Dokumen Beasiswa"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">
                  Dokumen Beasiswa Tanpa Drama
                </h4>
                <p className="text-sm text-gray-600">
                  Jangan ragu mempersiapkan dokumen jauh-jauh hari agar tidak
                  mepet deadline.
                </p>
              </div>
            </div>
          </div>
          <br />
          <a
            href="/artikel"
            target="_blank"
            className="mt-10 bg-[#3375CC] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
          >
            {" "}
            Lihat Semua
          </a>
        </section>
      </>
      <Footer />
    </>
  );
}

export default Eduacademy;

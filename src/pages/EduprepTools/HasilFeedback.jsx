import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

function HasilFeedback() {
  return (
    <>
      <Header />
        <main>
          {/* Hero Section */}
          <section
            className="text-white px-[100px] py-[40px] flex items-center justify-between min-h-[300px]"
            style={{
            backgroundImage: "linear-gradient(to left, #265899, #0d1d33)",
            }}
          >
            <div className="max-w-[600px]">
              <h1 className="text-[36px] mb-2 text-[#dda853] font-bold">Hasil Feedback Essay Kamu</h1>
              <p className="text-[16px] text-[#feffff] opacity-90">
                Lihat rangkuman skor dan detail penilaian
              </p>
            </div>
            <img
              src="/img/edupreptools/page7_gambar.png"
              alt="Essay Writing"
              className="w-[240px] h-[190px] object-cover rounded-lg"
            />
          </section>

          {/* Main Content */}
          <div className="max-w-[1100px] mx-auto my-[60px] px-4">
            {/* Score Summary */}
            <h2 className="text-center mb-5 !text-[31px] !text-[#3375cc] font-semibold">
              Ringkasan <span className="text-[#dda853]">Skor Utama</span>
            </h2>
            <div className="bg-[#feffff] !border border-[#dda853] rounded-[10px] p-3 mb-[60px] text-center">
              <p className="text-[#575858] mb-2 text-[16px] font-bold">Total Skor</p>
              <p className="text-[24px] text-[#575858]">82 / 100</p>
            </div>

            {/* Score Details */}
            <h2 className="text-center mb-5 !text-[31px] !text-[#3375cc] font-semibold">
              Hasil <span className="text-[#dda853]">Penilaian</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[80px]">
              {/* Reusable Card */}
              {[
                {
                  icon: "/img/edupreptools/icon_struktur.png",
                  title: "Struktur & Alur",
                  desc: "Alur cerita rapi, ada pembukaan & penutup",
                  score: "18/20",
                },
                {
                  icon: "/img/edupreptools/icon_kesesuaian.png",
                  title: "Kesesuaian Topik",
                  desc: "Sudah menjawab, bisa lebih fokus",
                  score: "15/20",
                },
                {
                  icon: "/img/edupreptools/icon_grammar.png",
                  title: "Bahasa & Grammar",
                  desc: "Masih ada beberapa kesalahan ejaan",
                  score: "16/20",
                },
                {
                  icon: "/img/edupreptools/icon_gayabahasa.png",
                  title: "Gaya Bahasa & Keunikan",
                  desc: "Sudah cukup personal dan menarik",
                  score: "17/20",
                },
                {
                  icon: "/img/edupreptools/icon_ketepatan.png",
                  title: "Ketepatan Panjang Esai",
                  desc: "Panjang pas, tidak terlalu bertele-tele",
                  score: "18/20",
                  full: true,
                },
              ].map(({ icon, title, desc, score, full }, index) => (
                <div
                  key={index}
                  className={`bg-[#feffff] !border border-[#dda853] rounded-[10px] p-3 flex ${
                    full ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="w-[80px] h-[80px] mr-4 flex-shrink-0 !border border-[#3375cc] rounded-[10px] p-1.5 flex items-center justify-center">
                    <img src={icon} alt={`Icon ${title}`} className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="!text-[20px] !font-bold !text-[#575858] mb-2">
                      {title}
                    </h3>
                    <p className="!text-[16px] !text-[#575858] mb-2">{desc}</p>
                    <span className="inline-block bg-[#dda853] text-[#feffff] px-2 py-1 rounded text-xs">
                      {score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      <Footer />
    </>
  );
}

export default HasilFeedback;

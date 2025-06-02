import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

const Save = () => {
  const [isBookmarked1, setIsBookmarked1] = useState(true);
  const [isBookmarked2, setIsBookmarked2] = useState(true);
  const [isBookmarked3, setIsBookmarked3] = useState(true);

  return (
    <>
      <Header />
      <section className="w-full px-4 md:px-8 lg:px-32 pb-10 flex flex-col items-center gap-10 justify-center mt-12">
        <div className="w-full flex items-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="p-3 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-600"
          >
            <i className="fas fa-arrow-left text-white"></i>
          </button>
          <h1 className="text-2xl font-semibold">Tersimpan</h1>
        </div>

        {isBookmarked1 && (
          <div className="w-full p-6 md:p-8 bg-white flex flex-col rounded-xl shadow-sm">
            <h1 className="text-xl md:text-2xl font-semibold mb-3">
              Forum Mentor
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative flex items-center justify-center p-3">
                  <div className="flex items-center justify-center overflow-hidden rounded-lg h-14 w-14 md:h-16 md:w-16">
                    <img
                      src="/img/educonnect/mentor2.png"
                      alt="User"
                      className="object-cover object-top h-full w-full"
                    />
                  </div>
                  <div className="absolute flex p-1 items-center justify-center left-0 bottom-0 bg-slate-700 rounded-lg">
                    <img
                      src="/img/educonnect/graduation.svg"
                      alt="Status"
                      className="h-4 md:h-5"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold m-0">
                    Tasya Mardiana
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 m-0">6h ago</p>
                </div>
              </div>
              <div className="flex flex-row px-3 py-2 text-xs md:text-sm bg-green-200 text-green-500 border-2 font-medium border-green-500 rounded-lg">
                Digital Marketing
              </div>
            </div>

            <p className="w-full text-sm md:text-base text-gray-500 mt-4 break-words whitespace-pre-line">
              Hi Guys! <br />
              Selamat datang di Forum Mentor ruang buat kalian yang ingin
              terhubung dengan mentor inspiratif, bertanya seputar beasiswa,
              karier, atau pengembangan diri, dan dapetin insight langsung dari
              mereka yang sudah lebih dulu melangkah. Yuk, manfaatkan kesempatan
              ini untuk belajar dari pengalaman nyata dan tumbuh bareng
              komunitas!
            </p>

            <div className="flex items-center mt-4 gap-3">
              <button
                onClick={() => setIsBookmarked1(!isBookmarked1)}
                className={`rounded-full p-4 transition ${
                  isBookmarked1
                    ? "bg-yellow-400 hover:bg-yellow-500"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <img
                  src={
                    isBookmarked1
                      ? "/img/educonnect/bookmark.svg"
                      : "/img/educonnect/bookmark-gray.svg"
                  }
                  alt="bookmark"
                  className="h-4 scale-110"
                />
              </button>

              <a
                href="https://discord.com/"
                target="_blank"
                className="no-underline flex flex-row items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 gap-2 text-white rounded-xl"
              >
                <img src="/img/educonnect/plus-circle.svg" alt="" />
                Join Forum
              </a>
            </div>
          </div>
        )}

        {/* --- Kartu Portofolio Responsive --- */}

        {isBookmarked2 && (
        <div className="w-full p-6 md:p-8 bg-white flex flex-col rounded-xl shadow-sm">
          <h1 className="text-xl md:text-2xl font-semibold mb-3">
            Bangun Portofolio UI/UX dari Nol
          </h1>
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center p-3">
                <div className="flex items-center justify-center overflow-hidden rounded-lg h-14 w-14 md:h-16 md:w-16">
                  <img
                    src="/img/educonnect/mentor8.png"
                    alt="User"
                    className="object-cover object-top h-full w-full"
                  />
                </div>
                <div className="absolute flex p-1 items-center justify-center left-0 bottom-0 bg-slate-700 rounded-lg">
                  <img
                    src="/img/educonnect/graduation.svg"
                    alt="Status"
                    className="h-4 md:h-5"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-base font-semibold m-0">
                  Alifa Nabila
                </h4>
                <p className="text-xs md:text-sm text-gray-400 m-0">
                  Mentor - UIUX Designer
                </p>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-2">
              <div className="px-3 py-2 text-xs md:text-sm bg-red-200 text-red-500 border-2 font-medium border-red-500 rounded-lg">
                Penuh
              </div>
              <div className="px-3 py-2 text-xs md:text-sm bg-blue-200 text-blue-500 border-2 font-medium border-blue-500 rounded-lg">
                Desain Produk
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-base md:text-xl mt-5">
            <img
              src="/img/educonnect/peserta.svg"
              alt=""
              className="h-5 md:h-6"
            />
            90 Peserta
          </div>

          <p className="w-full text-sm md:text-base text-gray-500 mt-3 break-words whitespace-pre-line">
            Bimbingan langkah demi langkah untuk membuat portofolio desain UI/UX
            yang menarik untuk pemula.
          </p>

          <div className="flex items-center mt-4 gap-3">
            <button
              onClick={() => setIsBookmarked2(!isBookmarked2)}
              className={`rounded-full p-4 transition ${
                isBookmarked2
                  ? "bg-yellow-400 hover:bg-yellow-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <img
                src={
                  isBookmarked2
                    ? "/img/educonnect/bookmark.svg"
                    : "/img/educonnect/bookmark-gray.svg"
                }
                alt="bookmark"
                className="h-4 scale-110"
              />
            </button>

            <a
              href="https://discord.com/"
              target="_blank"
              className="no-underline flex flex-row items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 gap-2 text-white rounded-xl"
            >
              <img src="/img/educonnect/plus-circle.svg" alt="" />
              Join Mentoring
            </a>
          </div>
        </div>
        )}

        {isBookmarked3 && (
        <div className="w-full p-5 md:p-8 bg-white flex flex-col rounded-xl shadow-sm">
          <h1 className="text-xl md:text-2xl font-semibold mb-3">
            Diskusi Anak-anak Overthinking Masa Depan
          </h1>

          <div className="w-full flex flex-wrap justify-between items-center gap-3">
            {/* Avatar + Nama */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center p-2">
                <div className="overflow-hidden rounded-lg h-12 w-12 md:h-16 md:w-16">
                  <img
                    src="/img/educonnect/mentor3.png"
                    alt="User"
                    className="object-cover object-top h-full w-full"
                  />
                </div>
                <div className="absolute flex p-1 items-center justify-center left-0 bottom-0 bg-slate-700 rounded-lg">
                  <img
                    src="/img/educonnect/graduation.svg"
                    alt="Status"
                    className="h-4 md:h-5"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-base font-semibold m-0">
                  Dimas Prasetyo
                </h4>
                <p className="text-xs md:text-sm text-gray-400 m-0">6h ago</p>
              </div>
            </div>

            {/* Kategori */}
            <div className="px-3 py-2 text-xs md:text-sm bg-yellow-100 text-yellow-400 border-2 border-yellow-400 rounded-lg whitespace-nowrap">
              Overthinking
            </div>
          </div>

          <p className="w-full text-sm md:text-base text-gray-500 mt-6 whitespace-pre-line break-words">
            Kepikiran masa depan terus? Tenang, kamu nggak sendirian!{"\n"}
            Forum ini jadi tempat curhat, tukar pikiran, dan cari solusi bareng
            soal:{"\n"}- Pilihan kuliah & karier yang bikin galau{"\n"}-
            Beasiswa yang kayaknya susah tapi pengin dicoba{"\n"}- Kegelisahan
            quarter life crisis yang relatable banget{"\n"}
            Bareng-bareng kita ngobrol, saling support, dan pelan-pelan bikin
            rencana tanpa panik.{"\n"}
            Karena overthinking itu wajar asal jangan sendirian. Yuk mulai
            diskusi sekarang! 💬
          </p>

          <div className="flex flex-row items-center mt-4 gap-3">
            <button
              onClick={() => setIsBookmarked3(!isBookmarked3)}
              className={`rounded-full p-4 transition ${
                isBookmarked3
                  ? "bg-yellow-400 hover:bg-yellow-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <img
                src={
                  isBookmarked3
                    ? "/img/educonnect/bookmark.svg"
                    : "/img/educonnect/bookmark-gray.svg"
                }
                alt="bookmark"
                className="h-4 scale-110"
              />
            </button>

            <a
              href="https://discord.com/"
              target="_blank"
              className="no-underline flex flex-row items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 gap-2 text-white rounded-xl"
            >
              <img src="/img/educonnect/plus-circle.svg" alt="" />
              Join Diskusi
            </a>
          </div>
        </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Save;

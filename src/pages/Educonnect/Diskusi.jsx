import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

const Diskusi = () => {
  const [showTambahModal, setShowTambahModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showHapusModal, setShowHapusModal] = useState(false);

  return (
    <>
      <Header />
        <div className="bg-[#F9F9F9] text-black">
        <section className="w-full px-32 pb-10 flex justify-center">
          {/* Sidebar */}
          <div className="flex flex-col gap-4 w-[20%] mt-16">
            <div className="flex justify-center items-center pr-5 ml-[2.8px]">
              <Link
                to="/forum"
                className="w-full bg-white flex flex-row items-center gap-3 p-4 rounded-xl shadow-sm no-underline"
              >
                <img src="/img/educonnect/calendar.svg" alt="Forum" />
                <h2 className="text-gray-600 font-medium text-base m-0">Forum</h2>
              </Link>
            </div>

            <div className="flex w-full justify-center items-center pr-5 border-r-blue-400 border-r-[3px] ml-[2.8px] z-20">
              <Link
                to="/diskusi"
                className="w-full bg-white flex flex-row items-center gap-3 p-4 rounded-xl shadow-sm no-underline"
              >
                <img src="/img/educonnect/message-circle-blue.svg" alt="Discuss" />
                <h2 className="text-blue-400 font-medium text-base m-0">
                  Discuss Group
                </h2>
              </Link>
            </div>

            <div className="flex justify-center items-center pr-5 ml-[2.8px]">
              <Link
                to="/mentoring"
                className="w-full bg-white flex flex-row items-center gap-3 p-4 rounded-xl shadow-sm no-underline"
              >
                <img src="/img/educonnect/briefcase.svg" alt="Mentoring" />
                <h2 className="text-gray-600 font-medium text-base m-0">Mentoring</h2>
              </Link>
            </div>
          </div>

          {/* Konten Diskusi */}
          <div className="flex flex-col pl-5 gap-4 w-[80%] border-l-[3px] h-full">
            <div className="mt-20 w-full flex-col justify-center">
              <div className="flex flex-row w-full justify-center items-center gap-3">
                <button
                  onClick={() => setShowTambahModal(true)}
                  className="flex justify-center items-center w-full bg-white rounded-xl pr-2 py-2 pl-5 shadow-sm"
                >
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className="text-base m-0">Tambah Forum baru</p>
                    <div className="flex items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 rounded-xl h-full">
                      <img src="/img/educonnect/plus.svg" alt="Tambah" />
                    </div>
                  </div>
                </button>
                <button className="flex justify-center items-center bg-white rounded-xl p-2 shadow-sm">
                  <div className="flex items-center justify-center p-3.5 bg-yellow-400 hover:bg-yellow-500 rounded-xl">
                    <img src="/img/educonnect/bookmark.svg" alt="Bookmark" className="h-[24px] px-0.5"/>
                  </div>
                </button>
              </div>
            </div>

            {/* List Diskusi (Dummy Data Dulu) */}
            <div className="flex flex-col gap-4">
              {/* Forum Card */}
              <div className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
                <h1 className="text-2xl font-semibold mb-3">Diskusi Masa Depan Gemilang</h1>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center p-[12px]">
                      <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
                        <img
                          src="/img/educonnect/mentor5.png"
                          alt="User"
                          className="object-cover object-top h-full w-full"
                        />
                      </div>
                      <div className="absolute flex p-1 items-center justify-center left-0 bottom-0 bg-slate-700 rounded-lg">
                        <img
                          src="/img/educonnect/graduation.svg"
                          alt="Status"
                          className="h-5"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold m-0">Nadia Aulia</h4>
                      <p className="text-sm text-gray-400 m-0">6h ago</p>
                    </div>
                  </div>
                  <div className="px-3 py-2 text-sm bg-yellow-100 text-yellow-400 border-2 border-yellow-400 rounded-lg">
                    Masa Depan
                  </div>
                </div>

                <p className="w-full text-base text-gray-500 mt-10 break-words">
                  Hi, Guys! Selamat Datang di Forum “Masa Depan Gemilang” ✨<br/>
                  Tempat di mana ide-ide besar bertemu, semangat belajar menyatu, dan masa depan dibentuk bersama. <br/>
                  Di sini, kamu bisa: <br/>
                  - Bertukar pikiran soal rencana studi, beasiswa, dan karier impian <br/>
                  - Diskusi terbuka seputar pengembangan diri dan peluang masa depan <br/>
                  - Dapat dukungan dari komunitas yang punya visi sejalan <br/>
                  Jangan ragu untuk memperkenalkan diri, bertanya, atau berbagi pengalamanmu.Ayo mulai perjalanan menuju masa depan yang lebih cerah bareng komunitas EduConnect!
                </p>

                <div className="flex items-center mt-4 gap-3">
                  <form action="" method="POST">
                    <button
                      type="submit"
                      className="rounded-full bg-yellow-400 hover:bg-yellow-500 p-4"
                    >
                      <img
                        src="/img/educonnect/bookmark.svg"
                        alt=""
                        className="h-4 scale-110"
                      />
                    </button>
                  </form>
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="flex items-center gap-2 p-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl"
                  >
                    <img
                      src="/img/educonnect/edit.svg"
                      alt="Edit"
                      className="h-4"
                    />
                    Edit Diskusi
                  </button>
                  <button
                    onClick={() => setShowHapusModal(true)}
                    className="p-4 bg-red-500 hover:bg-red-600 rounded-lg text-white flex items-center justify-center"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  <div className="flex items-center gap-2 text-gray-500">
                    <img src="/img/educonnect/check.svg" alt="Created" />
                    <span className="text-sm">You created this Forum</span>
                  </div>
                </div>
              </div>

              <div className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
                <h1 className="text-2xl font-semibold mb-3">Diskusi Anak Muda Berjaya</h1>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center p-[12px]">
                      <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
                        <img
                          src="/img/educonnect/mentor6.png"
                          alt="User"
                          className="object-cover object-top h-full w-full"
                        />
                      </div>
                      <div className="absolute flex p-1 items-center justify-center left-0 bottom-0 bg-slate-700 rounded-lg">
                        <img
                          src="/img/educonnect/graduation.svg"
                          alt="Status"
                          className="h-5"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold m-0">Intan Permata</h4>
                      <p className="text-sm text-gray-400 m-0">6h ago</p>
                    </div>
                  </div>
                  <div className="px-3 py-2 text-sm bg-yellow-100 text-yellow-400 border-2 border-yellow-400 rounded-lg">
                    Anak Muda
                  </div>
                </div>

                <p className="w-full text-base text-gray-500 mt-10 break-words">
                  Selamat datang di ruang diskusi para pemuda penuh mimpi dan aksi! <br/>
                  Di sini, kamu bisa: <br/>
                  - Bertukar ide seputar pendidikan, karier, dan pengembangan diri <br/>
                  - Dapat insight dari sesama pejuang beasiswa dan pembelajar aktif <br/>
                  - Bangun koneksi yang positif dan saling mendukung <br/>
                  Karena masa depan ada di tangan kita yuk, buktikan anak muda bisa berjaya! Mulai diskusimu sekarang 💬
                </p>

                <div className="flex flex-row items-center mt-4 gap-3">
                <form action="" method="POST">
                  <button
                    type="submit"
                    className="rounded-full bg-gray-200 hover:bg-gray-300 p-4"
                  >
                    <img src="/img/educonnect/bookmark-gray.svg" alt="" className="scale-110"/>
                  </button>
                </form>

                <a
                  href="#"
                  target="_blank"
                  className="no-underline flex flex-row items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 gap-2 text-white rounded-xl"
                >
                  <img src="/img/educonnect/plus-circle.svg" alt="" />
                  Join Diskusi
                </a>
              </div>
              </div>

              <div className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
                <h1 className="text-2xl font-semibold mb-3">Diskusi Anak - anak Overthinking Masa Depan</h1>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center p-[12px]">
                      <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
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
                          className="h-5"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold m-0">Dimas Prasetyo</h4>
                      <p className="text-sm text-gray-400 m-0">6h ago</p>
                    </div>
                  </div>
                  <div className="px-3 py-2 text-sm bg-yellow-100 text-yellow-400 border-2 border-yellow-400 rounded-lg">
                    Overthinking
                  </div>
                </div>

                <p className="w-full text-base text-gray-500 mt-10 break-words">
                  Kepikiran masa depan terus? Tenang, kamu nggak sendirian!<br/>
                  Forum ini jadi tempat curhat, tukar pikiran, dan cari solusi bareng soal: <br/>
                  - Pilihan kuliah & karier yang bikin galau <br/>
                  - Beasiswa yang kayaknya susah tapi pengin dicoba <br/>
                  - Kegelisahan quarter life crisis yang relatable banget <br/>
                  Bareng-bareng kita ngobrol, saling support, dan pelan-pelan bikin rencana tanpa panik. <br/>
                  Karena overthinking itu wajar asal jangan sendirian. Yuk mulai diskusi sekarang! 💬
                </p>

                <div className="flex flex-row items-center mt-4 gap-3">
                <form action="" method="POST">
                  <button
                    type="submit"
                    className="rounded-full bg-gray-200 hover:bg-gray-300 p-4"
                  >
                    <img src="/img/educonnect/bookmark-gray.svg" alt="" className="scale-110"/>
                  </button>
                </form>

                <a
                  href="#"
                  target="_blank"
                  className="no-underline flex flex-row items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 gap-2 text-white rounded-xl"
                >
                  <img src="/img/educonnect/plus-circle.svg" alt="" />
                  Join Diskusi
                </a>
              </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modal Tambah */}
        {showTambahModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl py-6 px-8 w-full max-w-lg">
              <h1 className="text-2xl font-semibold text-center text-black">
                Tambah Diskusi
              </h1>
              <form className="mt-4 flex flex-col gap-2">
                <label className="text-sm">Judul Diskusi</label>
                <input
                  type="text"
                  placeholder="Judul Diskusi"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                />

                <label className="text-sm">Kategori Diskusi</label>
                <input
                  type="text"
                  placeholder="Kategori Diskusi"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                />

                <label className="text-sm">Link</label>
                <input
                  type="text"
                  placeholder="Link"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                />

                <label htmlFor="deskripsi" className="text-sm">
                  Deskripsi
                </label>
                <textarea
                  placeholder="Masukkan Deskripsi Diskusi"
                  className="px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                />

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-3 p-[13px]"
                >
                  Tambah Diskusi
                </button>
                <button
                  type="button"
                  onClick={() => setShowTambahModal(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg mt-1 p-[13px]"
                >
                  Batal
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Modal Edit */}
        {showEditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl py-6 px-8 w-full max-w-lg">
              <h1 className="text-2xl font-semibold text-center text-black">
                Edit Diskusi
              </h1>
              <form className="mt-4 flex flex-col gap-2">
                <label className="text-sm">Judul Diskusi</label>
                <input
                  type="text"
                  placeholder="Judul Diskusi"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                />
                <label className="text-sm">Kategori Diskusi</label>
                <input
                  type="text"
                  placeholder="Kategori Diskusi"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                />
                <label className="text-sm">Link</label>
                <input
                  type="text"
                  placeholder="Link"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                />
                <label htmlFor="deskripsi" className="text-sm">
                  Deskripsi
                </label>
                <textarea
                  placeholder="Deskripsi"
                  className="px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-3 p-[13px]"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg mt-1 p-[13px]"
                >
                  Batal
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Modal Hapus */}
        {showHapusModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
              <h1 className="text-xl font-semibold text-center text-black">
                Konfirmasi Hapus Diskusi
              </h1>
              <p className="text-center text-gray-600 mb-4">
                Apakah Anda yakin ingin menghapus {" "}
                <strong>Diskusi Anak Muda Berjaya</strong>?
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md">
                  Hapus
                </button>
                <button
                  onClick={() => setShowHapusModal(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-md"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Diskusi;

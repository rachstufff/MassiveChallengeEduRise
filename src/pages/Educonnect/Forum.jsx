import { useState } from "react";
import { Link } from "react-router-dom";

const Forum = () => {
  const [showTambahModal, setShowTambahModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showHapusModal, setShowHapusModal] = useState(false);

  return (
    <div className="bg-[#F9F9F9] text-black">
      <section className="w-full px-32 py-10 flex justify-center">
        {/* Sidebar */}
        <div className="flex flex-col gap-5 w-[20%] mt-20">
          <div className="flex w-full justify-center items-center pr-5 border-r-blue-400 border-r-[3px] ml-[2.8px] z-20">
            <Link
              to="/forum"
              className="w-full bg-white flex flex-row items-center gap-3 p-5 rounded-xl shadow-sm"
            >
              <img src="/assets/calendar-blue.svg" alt="Forum" />
              <h2 className="text-blue-400 font-medium text-base">Forum</h2>
            </Link>
          </div>

          <div className="flex justify-center items-center pr-5 ml-[2.8px]">
            <Link
              to="/diskusi"
              className="w-full bg-white flex flex-row items-center gap-3 p-5 rounded-xl shadow-sm"
            >
              <img src="/assets/message-circle.svg" alt="Discuss" />
              <h2 className="text-gray-600 font-medium text-base">
                Discuss Group
              </h2>
            </Link>
          </div>

          <div className="flex justify-center items-center pr-5 ml-[2.8px]">
            <Link
              to="/mentoring"
              className="w-full bg-white flex flex-row items-center gap-3 p-5 rounded-xl shadow-sm"
            >
              <img src="/assets/briefcase.svg" alt="Mentoring" />
              <h2 className="text-gray-600 font-medium text-base">Mentoring</h2>
            </Link>
          </div>
        </div>

        {/* Konten Forum */}
        <div className="flex flex-col pl-5 gap-5 w-[80%] border-l-[3px] h-full">
          <div className="mt-24 w-full flex-col justify-center">
            <div className="flex flex-row w-full justify-center items-center gap-5">
              <button
                onClick={() => setShowTambahModal(true)}
                className="flex justify-center items-center w-full bg-white rounded-xl pr-2 py-2 pl-5 shadow-sm"
              >
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="text-base">Tambah Forum baru</p>
                  <div className="flex items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 rounded-xl h-full">
                    <img src="/assets/plus.svg" alt="Tambah" />
                  </div>
                </div>
              </button>
              <button className="flex justify-center items-center bg-white rounded-xl p-2 shadow-sm">
                <div className="flex items-center justify-center p-3.5 bg-yellow-400 hover:bg-yellow-500 rounded-xl">
                  <img src="/assets/bookmark.svg" alt="Bookmark" />
                </div>
              </button>
            </div>
          </div>

          {/* List Forum (Dummy Data Dulu) */}
          <div className="flex flex-col gap-5">
            {/* Forum Card */}
            <div className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
              <h1 className="text-2xl font-semibold mb-4">Judul Forum</h1>
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="overflow-hidden rounded-lg h-16 w-16">
                      <img
                        src="/assets/user_regis.svg"
                        alt="User"
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 bg-slate-700 p-1 rounded-md">
                      <img
                        src="/assets/graduation.svg"
                        alt="Status"
                        className="h-5"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">Nama Pengguna</h4>
                    <p className="text-sm text-gray-400">4 minutes ago</p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-base text-gray-500">
                Ini adalah deskripsi singkat Forum...
              </p>

              <div className="flex items-center mt-5 gap-5">
                <form action="" method="POST">
                  <button
                    type="submit"
                    className="rounded-full bg-yellow-400 hover:bg-yellow-500 p-4"
                  >
                    <img src="assets/bookmark.svg" alt="" className="h-4" />
                  </button>
                </form>
                <button
                  onClick={() => setShowEditModal(true)}
                  className="flex items-center gap-2 p-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl"
                >
                  <img src="/assets/edit.svg" alt="Edit" className="h-4" />
                  Edit Forum
                </button>
                <button
                  onClick={() => setShowHapusModal(true)}
                  className="p-4 bg-red-500 hover:bg-red-600 rounded-lg text-white flex items-center justify-center"
                >
                  <i className="fas fa-trash"></i>
                </button>
                <div className="flex items-center gap-2 text-gray-500">
                  <img src="/assets/check.svg" alt="Created" />
                  <span className="text-sm">You created this Forum</span>
                </div>
              </div>
            </div>
            <div className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
              <h1 className="text-2xl font-semibold mb-4">Judul Forum</h1>
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="overflow-hidden rounded-lg h-16 w-16">
                      <img
                        src="/assets/user_regis.svg"
                        alt="User"
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 bg-slate-700 p-1 rounded-md">
                      <img
                        src="/assets/graduation.svg"
                        alt="Status"
                        className="h-5"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">Nama Pengguna</h4>
                    <p className="text-sm text-gray-400">4 minutes ago</p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-base text-gray-500">
                Ini adalah deskripsi singkat Forum...
              </p>

              <div className="flex flex-row items-center mt-5 gap-5">
                <form action="" method="POST">
                  <button
                    type="submit"
                    className="rounded-full bg-gray-200 hover:bg-gray-300 p-4"
                  >
                    <img src="assets/bookmark-gray.svg" alt="" />
                  </button>
                </form>

                <a
                  href="#"
                  target="_blank"
                  className="flex flex-row items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 gap-2 text-white rounded-xl"
                >
                  <img src="assets/plus-circle.svg" alt="" />
                  Join Forum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Tambah */}
      {showTambahModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl py-6 px-10 w-full max-w-lg">
            <h1 className="text-2xl font-semibold text-center text-black">
              Tambah Forum
            </h1>
            <form className="mt-4 flex flex-col gap-2">
              <label className="text-sm">Judul Forum</label>
              <input
                type="text"
                placeholder="Judul Forum"
                className="mt-1 px-5 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
              />

              <label className="text-sm">Kategori Forum</label>
              <input
                type="text"
                placeholder="Kategori Forum"
                className="mt-1 px-5 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
              />

              <label className="text-sm">Link</label>
              <input
                type="text"
                placeholder="Link"
                className="mt-1 px-5 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
              />

              <label htmlFor="deskripsi" className="text-sm">
                Deskripsi
              </label>
              <textarea
                placeholder="Masukkan Deskripsi Forum"
                className="px-5 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg sm:text-sm focus:ring-1"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-3 p-3"
              >
                Tambah Forum
              </button>
              <button
                type="button"
                onClick={() => setShowTambahModal(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg mt-1 p-3"
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
          <div className="bg-white rounded-2xl py-6 px-10 w-full max-w-lg">
            <h1 className="text-2xl font-semibold text-center text-black">
              Edit Forum
            </h1>
            <form className="mt-4 flex flex-col gap-2">
              <label className="text-sm">Judul Forum</label>
              <input
                type="text"
                placeholder="Judul Forum"
                className="mt-1 px-5 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
              />
              <label className="text-sm">Kategori Forum</label>
              <input
                type="text"
                placeholder="Kategori Forum"
                className="mt-1 px-5 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
              />
              <label className="text-sm">Link</label>
              <input
                type="text"
                placeholder="Link"
                className="mt-1 px-5 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
              />
              <label htmlFor="deskripsi" className="text-sm">
                Deskripsi
              </label>
              <textarea
                placeholder="Deskripsi"
                className="px-5 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg sm:text-sm focus:ring-1"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-3 p-3"
              >
                Simpan
              </button>
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg mt-1 p-3"
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
              Konfirmasi Hapus Forum
            </h1>
            <p className="text-center text-gray-600 mb-4">
              Apakah Anda yakin ingin menghapus Forum{" "}
              <strong>Judul Forum</strong>?
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
  );
};

export default Forum;

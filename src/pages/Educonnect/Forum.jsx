import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

const Forum = () => {
  const [showTambahModal, setShowTambahModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showHapusModal, setShowHapusModal] = useState(false);

  const [isBookmarked1, setIsBookmarked1] = useState(false);
  const [isBookmarked2, setIsBookmarked2] = useState(false);
  const [isBookmarked3, setIsBookmarked3] = useState(false);

  const [forums, setForums] = useState([]);
  const [formInput, setFormInput] = useState({
    judul: "",
    kategori: "",
    link: "",
    deskripsi: "",
  });

  const [editIndex, setEditIndex] = useState(null);
  const [formEdit, setFormEdit] = useState({
    judul: "",
    kategori: "",
    link: "",
    deskripsi: "",
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormEdit(forums[index]);
    setShowEditModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedForums = [...forums];
    updatedForums[editIndex] = formEdit;
    setForums(updatedForums);
    setEditIndex(null);
    setShowEditModal(false);
  };

  const [hapusIndex, setHapusIndex] = useState(null);

  const handleDelete = () => {
    const updatedForums = [...forums];
    updatedForums.splice(hapusIndex, 1);
    setForums(updatedForums);
    setShowHapusModal(false);
    setHapusIndex(null);
  };

  return (
    <>
      <Header />
      <div className="bg-[#F9F9F9] text-black">
        <section className="w-full px-32 pb-10 flex justify-center">
          {/* Sidebar */}
          <div className="flex flex-col gap-4 w-[20%] mt-16">
            <div className="flex w-full justify-center items-center pr-5 border-r-blue-400 border-r-[3px] ml-[2.8px] z-20">
              <Link
                to="/forum"
                className="w-full bg-white flex flex-row items-center gap-3 p-4 rounded-xl shadow-sm no-underline"
              >
                <img src="/img/educonnect/calendar-blue.svg" alt="Forum" />
                <h2 className="text-blue-400 font-medium text-base m-0">
                  Forum
                </h2>
              </Link>
            </div>

            <div className="flex justify-center items-center pr-5 ml-[2.8px]">
              <Link
                to="/diskusi"
                className="w-full bg-white flex flex-row items-center gap-3 p-4 rounded-xl shadow-sm no-underline"
              >
                <img src="/img/educonnect/message-circle.svg" alt="Discuss" />
                <h2 className="text-gray-600 font-medium text-base m-0">
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
                <h2 className="text-gray-600 font-medium text-base m-0">
                  Mentoring
                </h2>
              </Link>
            </div>
          </div>

          {/* Konten Forum */}
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
                <a href="/save" className="flex justify-center items-center bg-white rounded-xl p-2 shadow-sm">
                  <div className="flex items-center justify-center p-3.5 bg-yellow-400 hover:bg-yellow-500 rounded-xl">
                    <img
                      src="/img/educonnect/bookmark.svg"
                      alt="Bookmark"
                      className="h-[24px] px-0.5"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* List Forum (Dummy Data Dulu) */}
            <div className="flex flex-col gap-4">
              {/* Forum Card */}
              {forums.map((forum, index) => (
              <div key={index} className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
                <h1 className="text-2xl font-semibold mb-3">
                  {forum.judul}
                </h1>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center p-[12px]">
                      <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
                        <img
                          src="/img/educonnect/modell.png"
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
                      <h4 className="text-base font-semibold m-0">
                        Rangga Wolf
                      </h4>
                      <p className="text-sm text-gray-400 m-0">6h ago</p>
                    </div>
                  </div>
                  <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-green-200 text-green-500 border-2 font-medium border-green-500 rounded-lg">
                    {forum.kategori}
                  </div>
                </div>

                <p className="w-full text-base text-gray-500 mt-3 break-words whitespace-pre-line">
                  {forum.deskripsi}
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
                      alt="bookmark 1"
                      className="h-4 scale-110"
                    />
                  </button>

                  <button
                    onClick={() => handleEdit(index)}
                    className="flex items-center gap-2 p-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl"
                  >
                    <img
                      src="/img/educonnect/edit.svg"
                      alt="Edit"
                      className="h-4"
                    />
                    Edit Forum
                  </button>
                  <button
                    onClick={() => {
                      setHapusIndex(index);
                      setShowHapusModal(true);
                    }}
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
              ))}

              <div className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
                <h1 className="text-2xl font-semibold mb-3">Forum Mentor</h1>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center p-[12px]">
                      <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
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
                          className="h-5"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold m-0">
                        Tasya Mardiana
                      </h4>
                      <p className="text-sm text-gray-400 m-0">6h ago</p>
                    </div>
                  </div>
                  <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-green-200 text-green-500 border-2 font-medium border-green-500 rounded-lg">
                    Digital Marketing
                  </div>
                </div>

                <p className="w-full text-base text-gray-500 mt-3 break-words whitespace-pre-line">
                  Hi Guys! <br />
                  Selamat datang di Forum Mentor ruang buat kalian yang ingin
                  terhubung dengan mentor inspiratif, bertanya seputar beasiswa,
                  karier, atau pengembangan diri, dan dapetin insight langsung
                  dari mereka yang sudah lebih dulu melangkah. Yuk, manfaatkan
                  kesempatan ini untuk belajar dari pengalaman nyata dan tumbuh
                  bareng komunitas!
                </p>

                <div className="flex flex-row items-center mt-4 gap-3">
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
                      alt="bookmark 1"
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

              <div className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
                <h1 className="text-2xl font-semibold mb-3">
                  Forum Pencarian Peluang
                </h1>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center p-[12px]">
                      <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
                        <img
                          src="/img/educonnect/mentor4.png"
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
                      <h4 className="text-base font-semibold m-0">
                        Rani Oktaviani
                      </h4>
                      <p className="text-sm text-gray-400 m-0">6h ago</p>
                    </div>
                  </div>
                  <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-green-200 text-green-500 border-2 font-medium border-green-500 rounded-lg">
                    Data Science
                  </div>
                </div>

                <p className="w-full text-base text-gray-500 mt-3 break-words whitespace-pre-line">
                  Hi Guys! <br />
                  Selamat datang di Forum Pencarian Peluang tempat kamu bisa
                  berbagi dan menemukan info terbaru seputar beasiswa, magang,
                  pelatihan, hingga program pengembangan diri. Di sini, kita
                  saling bantu buka jalan menuju masa depan yang lebih cerah.
                  Yuk, jangan lewatkan peluang emas yang mungkin sedang dicari
                  orang lain juga!
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
                      alt="bookmark 1"
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
            </div>
          </div>
        </section>

        {/* Modal Tambah */}
        {showTambahModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl py-6 px-8 w-full max-w-lg">
              <h1 className="text-2xl font-semibold text-center text-black">
                Tambah Forum
              </h1>
              <form
                className="mt-4 flex flex-col gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (editIndex !== null) {
                    const updated = [...forums];
                    updated[editIndex] = formInput;
                    setForums(updated);
                    setEditIndex(null);
                  } else {
                    setForums([...forums, formInput]);
                  }
                  setFormInput({ judul: "", kategori: "", link: "", deskripsi: "" });
                  setShowTambahModal(false);
                }}>

                <label className="text-sm">Judul Forum</label>
                <input
                  type="text"
                  placeholder="Judul Forum"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1" required
                  value={formInput.judul}
                  onChange={(e) => setFormInput({ ...formInput, judul: e.target.value })}
                />

                <label className="text-sm">Kategori Forum</label>
                <input
                  type="text"
                  placeholder="Kategori Forum"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1" required
                  value={formInput.kategori}
                  onChange={(e) => setFormInput({ ...formInput, kategori: e.target.value })}
                />

                <label className="text-sm">Link</label>
                <input
                  type="text"
                  placeholder="Link"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1" required
                  value={formInput.link}
                  onChange={(e) => setFormInput({ ...formInput, link: e.target.value })}
                />

                <label htmlFor="deskripsi" className="text-sm">
                  Deskripsi
                </label>
                <textarea
                  placeholder="Masukkan Deskripsi Forum"
                  className="px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg sm:text-sm focus:ring-1" required
                  value={formInput.deskripsi}
                  onChange={(e) => setFormInput({ ...formInput, deskripsi: e.target.value })}
                />

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-3 p-[13px]"
                >
                  Tambah Forum
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
                Edit Forum
              </h1>
              <form onSubmit={handleUpdate} className="mt-4 flex flex-col gap-2">
                <label className="text-sm">Judul Forum</label>
                <input
                  type="text"
                  placeholder="Judul Forum"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                  value={formEdit.judul}
                  onChange={(e) => setFormEdit({...formEdit, judul: e.target.value})}
                />
                <label className="text-sm">Kategori Forum</label>
                <input
                  type="text"
                  placeholder="Kategori Forum"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                  value={formEdit.kategori}
                  onChange={(e) => setFormEdit({...formEdit, kategori: e.target.value})}
                />
                <label className="text-sm">Link</label>
                <input
                  type="text"
                  placeholder="Link"
                  className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                  value={formEdit.link}
                  onChange={(e) => setFormEdit({...formEdit, link: e.target.value})}
                />
                <label htmlFor="deskripsi" className="text-sm">
                  Deskripsi
                </label>
                <textarea
                  placeholder="Deskripsi"
                  className="px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                  value={formEdit.deskripsi}
                  onChange={(e) => setFormEdit({...formEdit, deskripsi: e.target.value})}
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
                Konfirmasi Hapus Forum
              </h1>
              <p className="text-center text-gray-600 mb-4">
                Apakah Anda yakin ingin menghapus{" "}
                <strong>{forums[hapusIndex]?.judul || 'Forum'}</strong>?
              </p>
              <div className="flex justify-center gap-4">
                <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md">
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

export default Forum;

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

const Mentoring = () => {
  const [showTambahModal, setShowTambahModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showHapusModal, setShowHapusModal] = useState(false);

  const [isBookmarked1, setIsBookmarked1] = useState(false);
  const [isBookmarked2, setIsBookmarked2] = useState(false);
  const [isBookmarked3, setIsBookmarked3] = useState(false);

  const [mentorings, setMentorings] = useState([]);
    const [formInput, setFormInput] = useState({
      judul: "",
      keahlian: "",
      status: "",
      link: "",
      deskripsi: "",
    });
  
    const [editIndex, setEditIndex] = useState(null);
    const [formEdit, setFormEdit] = useState({
      judul: "",
      keahlian: "",
      status: "",
      link: "",
      deskripsi: "",
    });
  
    const handleEdit = (index) => {
      setEditIndex(index);
      setFormEdit(mentorings[index]);
      setShowEditModal(true);
    };
  
    const handleUpdate = (e) => {
      e.preventDefault();
      const updatedMentorings = [...mentorings];
      updatedMentorings[editIndex] = formEdit;
      setMentorings(updatedMentorings);
      setEditIndex(null);
      setShowEditModal(false);
    };
  
    const [hapusIndex, setHapusIndex] = useState(null);
  
    const handleDelete = () => {
      const updatedMentorings = [...mentorings];
      updatedMentorings.splice(hapusIndex, 1);
      setMentorings(updatedMentorings);
      setShowHapusModal(false);
      setHapusIndex(null);
    };

  return (
    <>
    <Header/>
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
    
              <div className="flex w-full justify-center items-center pr-5 border-r-blue-400 border-r-[3px] ml-[2.8px] z-20">
                <Link
                  to="/mentoring"
                  className="w-full bg-white flex flex-row items-center gap-3 p-4 rounded-xl shadow-sm no-underline"
                >
                  <img src="/img/educonnect/briefcase-blue.svg" alt="Mentoring" />
                  <h2 className="text-blue-400 font-medium text-base m-0">Mentoring</h2>
                </Link>
              </div>
            </div>

        {/* Konten Diskusi */}
        <div className="flex flex-col pl-5 gap-4 w-[80%] border-l-[3px] border-gray-200 h-full">
          <div className="mt-20 w-full flex-col justify-center">
            <div className="flex flex-row w-full justify-center items-center gap-3">
              <button
                onClick={() => setShowTambahModal(true)}
                className="flex justify-center items-center w-full bg-white rounded-xl pr-2 py-2 pl-5 shadow-sm"
              >
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="text-base m-0">Tambah Mentoring baru</p>
                  <div className="flex items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 rounded-xl h-full">
                    <img src="/img/educonnect/plus.svg" alt="Tambah" />
                  </div>
                </div>
              </button>
              <a href="/save" className="flex justify-center items-center bg-white rounded-xl p-2 shadow-sm">
                <div className="flex items-center justify-center p-3.5 bg-yellow-400 hover:bg-yellow-500 rounded-xl">
                  <img src="/img/educonnect/bookmark.svg" alt="Bookmark" className="h-[24px] px-0.5"/>
                </div>
              </a>
            </div>
          </div>

          {/* List Mentoring (Dummy Data Dulu) */}
          <div className="flex flex-col gap-4">
            {/* Forum Card */}
            {mentorings.map((mentoring, index) => (
            <div key={index} className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
              <h1 className="text-2xl font-semibold mb-3">{mentoring.judul}</h1>
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center items-center">
                  <div className="relative flex items-center justify-center p-[12px]">
                    <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
                      <img
                        src="/img/educonnect/mentor7.png"
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
                    <h4 className="text-base font-semibold m-0">Gema Ramadhan</h4>
                    <p className="text-sm text-gray-400 m-0">Mentor - Product Designer</p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-3">
                  {mentoring.status === "penuh" ? (
                    <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-red-200 text-red-500 border-2 font-medium border-red-500 rounded-lg">
                      Penuh
                    </div>
                  ) : (
                    <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-green-200 text-green-500 border-2 font-medium border-green-500 rounded-lg">
                      Tersedia
                    </div>
                  )}

                  <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-blue-200 text-blue-500 border-2 font-medium border-blue-500 rounded-lg">
                    {mentoring.keahlian}
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-row gap-3 text-xl mt-7">
                <img src="/img/educonnect/peserta.svg" alt="" className="h-6" />
                86 Peserta
              </div>

              <p className="w-full text-base text-gray-500 mt-3 break-words whitespace-pre-line">
                {mentoring.deskripsi}
              </p>

              <div className="flex flex-row items-center mt-4 gap-3">
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
                  Edit Mentoring
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
              <h1 className="text-2xl font-semibold mb-3">Bangun Portofolio UI/UX dari Nol</h1>
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center items-center">
                  <div className="relative flex items-center justify-center p-[12px]">
                    <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
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
                        className="h-5"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold m-0">Alifa Nabila</h4>
                    <p className="text-sm text-gray-400 m-0">Mentor - UIUX Designer</p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-3">
                  <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-red-200 text-red-500 border-2 font-medium border-red-500 rounded-lg">
                    Penuh
                  </div>

                  <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-blue-200 text-blue-500 border-2 font-medium border-blue-500 rounded-lg">
                    Desain Produk
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-row gap-3 text-xl mt-7">
                <img src="/img/educonnect/peserta.svg" alt="" className="h-6" />
                90 Peserta
              </div>

              <p className="w-full text-base text-gray-500 mt-3 break-words whitespace-pre-line">
                Bimbingan langkah demi langkah untuk membuat portofolio desain UI/UX yang menarik untuk pemula.
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
                  Join Mentoring
                </a>
              </div>
            </div>

            <div className="w-full p-8 bg-white flex flex-col rounded-xl shadow-sm">
              <h1 className="text-2xl font-semibold mb-3">Lolos Beasiswa LPDP</h1>
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center items-center">
                  <div className="relative flex items-center justify-center p-[12px]">
                    <div className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16">
                      <img
                        src="/img/educonnect/mentor9.png"
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
                    <h4 className="text-base font-semibold m-0">Rizky Aulia</h4>
                    <p className="text-sm text-gray-400 m-0">Mentor - Digital Marketing</p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-3">
                  <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-green-200 text-green-500 border-2 font-medium border-green-500 rounded-lg">
                    Tersedia
                  </div>

                  <div className="flex flex-row px-3 py-2 h-fit justify-center text-sm items-center bg-blue-200 text-blue-500 border-2 font-medium border-blue-500 rounded-lg">
                    Beasiswa Luar Negeri
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-row gap-3 text-xl mt-7">
                <img src="/img/educonnect/peserta.svg" alt="" className="h-6" />
                120 Peserta
              </div>

              <p className="w-full text-base text-gray-500 mt-4 break-words whitespace-pre-line">
                Program intensif selama 4 minggu untuk mempersiapkan esai, wawancara, dan berkas LPDP dengan bimbingan langsung dari alumni.
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
                  Join Mentoring
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
              Tambah Mentoring
            </h1>
            <form
            className="mt-4 flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (editIndex !== null) {
                const updated = [...mentorings];
                updated[editIndex] = formInput;
                setMentorings(updated);
                setEditIndex(null);
              } else {
                setMentorings([...mentorings, formInput]);
              }
              setFormInput({ judul: "", keahlian: "", status:"", link: "", deskripsi: "" });
              setShowTambahModal(false);
            }}>
              <label className="text-sm">Judul Mentoring</label>
              <input
                type="text"
                placeholder="Judul Mentoring"
                className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                value={formInput.judul}
                onChange={(e) => setFormInput({ ...formInput, judul: e.target.value })}
              />

              <label className="text-sm">Keahlian</label>
              <input
                type="text"
                placeholder="Keahlian"
                className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                value={formInput.keahlian}
                onChange={(e) => setFormInput({ ...formInput, keahlian: e.target.value })}
              />

              <label className="text-sm">Status</label>
              <select
                name="status"
                value={formInput.status}
                onChange={(e) =>
                  setFormInput({ ...formInput, status: e.target.value })
                }
                className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
              >
                <option value="tersedia">Tersedia</option>
                <option value="penuh">Penuh</option>
              </select>

              <label className="text-sm">Link</label>
              <input
                type="text"
                placeholder="Link"
                className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                value={formInput.link}
                onChange={(e) => setFormInput({ ...formInput, link: e.target.value })}
              />

              <label htmlFor="deskripsi" className="text-sm">
                Deskripsi
              </label>
              <textarea
                placeholder="Masukkan Deskripsi Mentoring"
                className="px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                value={formInput.deskripsi}
                onChange={(e) => setFormInput({ ...formInput, deskripsi: e.target.value })}
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-3 p-[13px]"
              >
                Tambah Mentoring
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
              Edit Mentoring
            </h1>
            <form onSubmit={handleUpdate} className="mt-4 flex flex-col gap-2">
              <label className="text-sm">Judul Mentoring</label>
              <input
                type="text"
                placeholder="Judul Mentoring"
                className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                value={formEdit.judul}
                onChange={(e) => setFormEdit({...formEdit, judul: e.target.value})}
              />
              <label className="text-sm">Keahlian</label>
              <input
                type="text"
                placeholder="Keahlian"
                className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                value={formEdit.keahlian}
                onChange={(e) => setFormEdit({...formEdit, keahlian: e.target.value})}
              />
              <label className="text-sm">Status</label>
              <select
                name="status"
                className="mt-1 px-4 py-3 border shadow-sm bg-blue-50 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-1"
                value={formEdit.status}
                onChange={(e) => setFormEdit({...formEdit, status: e.target.value})}
              >
                <option value="tersedia">Tersedia</option>
                <option value="penuh">Penuh</option>
              </select>
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
              Konfirmasi Hapus Mentoring
            </h1>
            <p className="text-center text-gray-600 mb-4">
              Apakah Anda yakin ingin menghapus Mentoring{" "}
              <strong>{mentorings[hapusIndex]?.judul || "Mentoring"}</strong>?
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
    <Footer/>
  </>
  );
};

export default Mentoring;
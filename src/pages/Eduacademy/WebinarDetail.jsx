import { useEffect, useState } from "react";
import toga from "/img/eduacademy/toga.png";
import posterWeb from "/img/eduacademy/posterweb.png";
import profile from "/img/eduacademy/profile.png";
import rekaman from "/img/eduacademy/nah.mp4";
import sertif from "/img/eduacademy/sertip.png";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

function WebinarDetail() {
  const [activeTab, setActiveTab] = useState("#Desc");
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showRekamanPopup, setShowRekamanPopup] = useState(false);
  const [showSertifikatPopup, setShowSertifikatPopup] = useState(false);
  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showDownloadButtons, setShowDownloadButtons] = useState(false); // New state
  const [formData, setFormData] = useState({
    nama: "",
    jenjang: "",
    instansi: "",
    jurusan: "",
    email: "",
    alasan: "",
  });
  const [errors, setErrors] = useState({});

  const handleJoinNow = () => {
    setShowJoinPopup(false);
    setShowDownloadButtons(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#Desc", "#ins", "#cara", "#syarat"];
      let current = "";

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });

      if (current) {
        setActiveTab(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const element = document.querySelector(tab);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nama.trim()) newErrors.nama = "Nama tidak boleh kosong";
    if (!formData.jenjang) newErrors.jenjang = "Pilih jenjang pendidikan";
    if (!formData.instansi) newErrors.instansi = "Pilih instansi pendidikan";
    if (!formData.jurusan) newErrors.jurusan = "Pilih jurusan";

    if (!formData.email.trim()) {
      newErrors.email = "Email tidak boleh kosong";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.alasan.trim()) newErrors.alasan = "Alasan tidak boleh kosong";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      setShowRegistrationPopup(false);
      setTimeout(() => {
        setShowSuccessPopup(true);
        setIsRegistered(true);
      }, 500);
    }
  };

  const closePopup = () => {
    setShowRegistrationPopup(false);
    setShowSuccessPopup(false);
    setShowRekamanPopup(false);
    setShowSertifikatPopup(false);
    setShowJoinPopup(false);
  };

  return (
    <>
      <Header />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section
          className="relative text-white min-h-screen flex items-center overflow-hidden"
          style={{ background: "linear-gradient(to right, #265899, #0D1D33)" }}
        >
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
            <div className="z-20 w-full md:w-1/2 order-1 md:order-1">
              <div className="max-w-xl text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  <span className="text-[#DDA853]">AI at Work : Menjadi</span>
                  <br />
                  <span className="text-[#DDA853]">Profesional</span>{" "}
                  <span className="text-white">Adaptif di Era</span>
                  <br />
                  <span className="text-white">Cerdas</span>
                </h1>
                <p className="flex items-center text-sm mb-4">
                  <span className="w-2 h-2 bg-[#DDA853] rounded-full inline-block mr-2"></span>
                  Rabu 02 June 2025 |{" "}
                  <span className="w-2 h-2 mx-2 bg-red-500 rounded-full inline-block mr-2"></span>{" "}
                  09.00-11.00 WIB
                </p>
                <p className="text-gray-300 mb-8">
                  Di era transformasi digital yang dipacu oleh kecerdasan buatan
                  (AI), menjadi profesional yang adaptif bukan lagi pilihan,
                  melainkan kebutuhan. Bersama Kurt Cobains, acara ini akan
                  mengupas tuntas bagaimana individu dan profesional dapat
                  memanfaatkan teknologi secara strategis, serta tetap relevan
                  di tengah perubahan industri yang cepat.
                </p>
                <button
                  onClick={() =>
                    isRegistered
                      ? setShowJoinPopup(true)
                      : setShowRegistrationPopup(true)
                  }
                  className={`inline-block ${
                    isRegistered
                      ? "bg-[#0BAB5E]"
                      : "bg-[#3375CC] hover:bg-blue-500"
                  } text-white px-6 py-3 rounded-lg font-semibold transition`}
                >
                  {isRegistered ? "Terdaftar" : "Daftar Sekarang"}
                </button>
              </div>
            </div>

            <div className="z-10 w-full md:w-1/2 order-2 md:order-2 flex justify-center md:justify-end">
              <img
                src={posterWeb}
                alt="AI at Work Poster"
                className="w-full max-w-[500px] object-contain mb-0 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <br />
        <br />

        {/* Tab Navigation */}
        <section id="#detail" className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap border-b" id="tabs">
              <button
                onClick={() => handleTabClick("#Desc")}
                className={`group relative pb-4 px-4 mr-8 ${
                  activeTab === "#Desc"
                    ? "text-blue-900"
                    : "text-gray-500 hover:text-blue-900"
                } font-medium cursor-pointer`}
              >
                Deskripsi
                <span
                  className={`underline-indicator absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform ${
                    activeTab === "#Desc"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } transition-transform duration-300`}
                ></span>
              </button>
              <button
                onClick={() => handleTabClick("#ins")}
                className={`group relative pb-4 px-4 mr-8 ${
                  activeTab === "#ins"
                    ? "text-blue-900"
                    : "text-gray-500 hover:text-blue-900"
                } font-medium cursor-pointer`}
              >
                Instruktur
                <span
                  className={`underline-indicator absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform ${
                    activeTab === "#ins"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } transition-transform duration-300`}
                ></span>
              </button>
              <button
                onClick={() => handleTabClick("#cara")}
                className={`group relative pb-4 px-4 mr-8 ${
                  activeTab === "#cara"
                    ? "text-blue-900"
                    : "text-gray-500 hover:text-blue-900"
                } font-medium cursor-pointer`}
              >
                Cara Gabung
                <span
                  className={`underline-indicator absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform ${
                    activeTab === "#cara"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } transition-transform duration-300`}
                ></span>
              </button>
              <button
                onClick={() => handleTabClick("#syarat")}
                className={`group relative pb-4 px-4 ${
                  activeTab === "#syarat"
                    ? "text-blue-900"
                    : "text-gray-500 hover:text-blue-900"
                } font-medium cursor-pointer`}
              >
                Syarat & Kondisi
                <span
                  className={`underline-indicator absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform ${
                    activeTab === "#syarat"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } transition-transform duration-300`}
                ></span>
              </button>
            </div>
          </div>
        </section>

        {/* Content Section with Sidebar */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
              {/* Main Content Area */}
              <div className="lg:w-2/3 pr-0 lg:pr-8">
                {/* Deskripsi Section */}
                <div id="Desc" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Tentang Webinar Ini
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Apakah kamu merasa pekerjaan makin cepat berubah? Tuntutan
                    skill makin tinggi? Dan teknologi, terutama AI makin
                    mengepita di dunia kerja? Mari kita lihat visi masa depan!
                    WAJIB kamu ikuti! Saat ini, teknologi tidak hanya mengubah
                    cara kita bekerja tapi juga para profesional harus siap
                    untuk lebih adaptif, inovatif, dan juga siap dalam
                    menghadapi segala tantangan yang akan ada di masa depan.
                    Kamu sudah siap mengambil segala peluang baru yang
                    ditawarkan oleh AI? Yuk, ikuti webinar eksklusif ini dan
                    temukan strategi, pengetahuan, dan skill yang kamu butuhkan
                    untuk berkembang di era cerdas!
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Sasaran utama pada fase pertama di tahun ini akan fokus pada
                    lingkup Mahasiswa dan para Profesional di seluruh Indonesia.
                    Program diselenggarakan secara hybrid, menggabungkan
                    pembelajaran Asynchronous (Kursus Online) dan Synchronous
                    (Webinar). Peserta dapat mengikuti Kursus Online "Microsoft
                    elevatAe Program: Artificial Intelligence (AI) Fluency" dan
                    sesi Webinar bersama para ahli secara gratis.
                  </p>
                </div>

                {/* Instruktur Section */}
                <div id="ins" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Instruktur
                  </h2>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={profile}
                        alt="Kurt Cobains"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">Kurt Cobains</h3>
                      <p className="text-gray-600">Data Analyst</p>
                    </div>
                  </div>
                </div>

                {/* Cara Gabung Section */}
                <div id="cara" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Cara Gabung Webinar Ini
                  </h2>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li>
                      Anda dapat daftar webinar ini dengan mengklik tombol
                      "Daftar Sekarang".
                    </li>
                    <li>
                      15 menit sebelum acara dimulai, Anda dapat bergabung.
                    </li>
                    <li>Caranya Webinar Zoom.</li>
                    <li>Pergi kelaman webinar terdaftar.</li>
                    <li>Pastikan Anda sudah login.</li>
                    <li>setelah itu klik tombol "Mulai Sekarang".</li>
                    <li>
                      Dengan lupa untuk mengisi ulasan setelah sesi webinar
                      berakhir dengan mengklik tombol "Beri Ulasan".
                    </li>
                    <li>
                      Anda bisa mendapatkan sertifikat kehadiran webinar 1x24
                      jam setelah memberikan ulasan.*
                    </li>
                  </ol>
                  <div className="mt-6">
                    <p className="text-gray-700 mb-2">
                      Video dapat diunduh saat acara selesai.**
                    </p>
                    <p className="text-gray-700 mb-4">
                      Catatan: Tautan unduhan akan dikirim melalui email,
                      halaman riwayat webinar, atau halaman ini.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Centang tanda sertifikat dalam manfaat untuk
                        ketersediaan sertifikat.
                      </li>
                      <li>
                        Centang tanda materi dalam manfaat untuk ketersediaan
                        materi.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Syarat & Ketentuan Section */}
                <div id="syarat" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Syarat & Ketentuan
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Semua pemberitahuan mengenai informasi dan perubahan kelas
                    akan disampaikan langsung oleh sistem kami melalui email,
                    mohon cek email Anda secara berkala. Untuk informasi lebih
                    lanjut, silahkan hubungi kami di Komunitas Discord Kami.
                  </p>
                </div>
              </div>

              {/* Sidebar - Daftar Sekarang Card */}
              <div className="lg:w-1/3 mt-8 lg:mt-0">
                <div className="sticky top-8">
                  {/* Card 1 */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto w-full transition-transform hover:scale-105">
                    {/* Event image */}
                    <div className="aspect-square rounded-t-lg">
                      <img
                        src={posterWeb}
                        alt="Event poster"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Bottom info section */}
                    <div className="p-3">
                      <div className="flex justify-between mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          Rabu, 02 June 2025
                        </span>
                        <span className="bg-yellow-50 text-yellow-800 px-2 py-1 rounded-full text-xs">
                          09:00 - 10:30 AM
                        </span>
                      </div>
                      <h3 className="font-bold text-base mb-1">
                        AI at Work: Menjadi Profesional Adaptif di Era Cerdas
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Kurt Cobains</p>

                      {/* Conditional rendering based on showDownloadButtons state */}
                      {showDownloadButtons ? (
                        <div className="flex space-x-3 w-full justify-center">
                          <button
                            onClick={() => setShowSertifikatPopup(true)}
                            className="inline-block w-1/2 bg-[#DDA853] text-white text-center py-1.5 px-3 rounded-lg text-xs font-medium transition-colors duration-300"
                          >
                            Akses Sertifikat
                          </button>
                          <button
                            onClick={() => setShowRekamanPopup(true)}
                            className="inline-block w-1/2 bg-[#3375CC] text-white text-center py-1.5 px-3 rounded-lg text-xs font-medium transition-colors duration-300"
                          >
                            Akses Rekaman
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            isRegistered
                              ? setShowJoinPopup(true)
                              : setShowRegistrationPopup(true)
                          }
                          className={`inline-block w-1/2 ${
                            isRegistered ? "bg-[#0BAB5E]" : "bg-[#3375CC]"
                          } text-white text-center py-1.5 px-3 rounded-lg text-xs font-medium transition-colors duration-300 mx-auto`}
                        >
                          {isRegistered ? "Terdaftar" : "Daftar Sekarang"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Popup */}
        {showRegistrationPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-stone-50 rounded-lg max-w-md w-full mx-4 relative">
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Form header */}
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-sky-900">
                  Data Diri
                </h2>
              </div>

              {/* Form content */}
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  {/* Nama */}
                  <div className="mb-4">
                    <label
                      htmlFor="nama"
                      className="block text-sm font-regular text-sky-900 mb-1"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      value={formData.nama}
                      onChange={handleInputChange}
                      placeholder="Masukkan Nama Anda"
                      className={`w-full px-3 py-2 border ${
                        errors.nama ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:font-normal`}
                    />
                    {errors.nama && (
                      <div className="error-message text-red-500 text-xs mt-1">
                        {errors.nama}
                      </div>
                    )}
                  </div>

                  {/* Jenjang Pendidikan */}
                  <div className="mb-4">
                    <label
                      htmlFor="jenjang"
                      className="block text-sm font-regular text-sky-900 mb-1"
                    >
                      Jenjang Pendidikan
                    </label>
                    <div className="relative">
                      <select
                        id="jenjang"
                        name="jenjang"
                        value={formData.jenjang}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border ${
                          errors.jenjang ? "border-red-500" : "border-gray-300"
                        } rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                          formData.jenjang ? "text-gray-800" : "text-gray-500"
                        }`}
                      >
                        <option value="" disabled selected>
                          Pilih Jenjang Pendidikan Anda
                        </option>
                        <option value="SMA/SMK">SMA/SMK</option>
                        <option value="D3">D3</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.jenjang && (
                      <div className="error-message text-red-500 text-xs mt-1">
                        {errors.jenjang}
                      </div>
                    )}
                  </div>

                  {/* Instansi dan Jurusan in one row */}
                  <div className="flex flex-col sm:flex-row mb-4 gap-4">
                    <div className="w-full sm:w-1/2">
                      <label
                        htmlFor="instansi"
                        className="block text-sm font-regular text-sky-900 mb-1"
                      >
                        Instansi Pendidikan
                      </label>
                      <div className="relative">
                        <select
                          id="instansi"
                          name="instansi"
                          value={formData.instansi}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border ${
                            errors.instansi
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                            formData.instansi
                              ? "text-gray-800"
                              : "text-gray-500"
                          }`}
                        >
                          <option value="" disabled selected>
                            Instansi Pendidikan
                          </option>
                          <option value="Universitas Indonesia">
                            Universitas Indonesia
                          </option>
                          <option value="Institut Teknologi Bandung">
                            Institut Teknologi Bandung
                          </option>
                          <option value="Universitas Gadjah Mada">
                            Universitas Gadjah Mada
                          </option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.instansi && (
                        <div className="error-message text-red-500 text-xs mt-1">
                          {errors.instansi}
                        </div>
                      )}
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        htmlFor="jurusan"
                        className="block text-sm font-regular text-sky-900 mb-1"
                      >
                        Jurusan
                      </label>
                      <div className="relative">
                        <select
                          id="jurusan"
                          name="jurusan"
                          value={formData.jurusan}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border ${
                            errors.jurusan
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                            formData.jurusan ? "text-gray-800" : "text-gray-500"
                          }`}
                        >
                          <option value="" disabled selected>
                            Jurusan
                          </option>
                          <option value="Teknik Informatika">
                            Teknik Informatika
                          </option>
                          <option value="Sistem Informasi">
                            Sistem Informasi
                          </option>
                          <option value="Ilmu Komputer">Ilmu Komputer</option>
                          <option value="Manajemen">Manajemen</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.jurusan && (
                        <div className="error-message text-red-500 text-xs mt-1">
                          {errors.jurusan}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-regular text-sky-900 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Masukkan Email Anda"
                      className={`w-full px-3 py-2 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:font-normal`}
                    />
                    {errors.email && (
                      <div className="error-message text-red-500 text-xs mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Alasan */}
                  <div className="mb-6">
                    <label
                      htmlFor="alasan"
                      className="block text-sm font-regular text-sky-900 mb-1"
                    >
                      Alasan Mengikuti Webinar
                    </label>
                    <textarea
                      id="alasan"
                      name="alasan"
                      rows="3"
                      value={formData.alasan}
                      onChange={handleInputChange}
                      placeholder="Masukkan Alasan Anda"
                      className={`w-full px-3 py-2 border ${
                        errors.alasan ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:font-normal`}
                    ></textarea>
                    {errors.alasan && (
                      <div className="error-message text-red-500 text-xs mt-1">
                        {errors.alasan}
                      </div>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="block mx-auto bg-sky-800 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded-lg transition duration-300"
                  >
                    Kirim Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg max-w-md w-full mx-4 relative p-8 text-center">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img src={toga} alt="Graduation Cap" className="h-36" />
              </div>

              {/* Success message */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">
                  <span className="text-sky-600">Pendaftaran sukses!</span>
                  <span className="text-sky-900">cek email anda</span>
                  <span className="text-amber-400">
                    {" "}
                    untuk informasi selanjutnya
                  </span>
                </h2>
              </div>

              {/* Close button */}
              <button
                onClick={closePopup}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-12 rounded-lg transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Join Popup */}
        {showJoinPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#F5F7FA] rounded-lg p-10 flex w-[900px] h-[500px] max-w-full shadow-lg relative items-center justify-between">
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                &times;
              </button>

              {/* Text */}
              <div className="flex-1 pr-6 flex flex-col justify-center">
                <p className="text-sm font-bold text-[#E5A426] mb-8 tracking-[0.1em]">
                  WELCOME BACK
                </p>
                <h2 className="text-4xl font-bold text-[#1F467A] mb-7">
                  Thank you for joining <br /> our webinars
                </h2>
                <p className="text-sm text-[#667085] mb-6 leading-relaxed">
                  Terima kasih sudah ikut belajar bersama kami!
                  <br />
                  Kami harap sesi ini bermanfaat dan menginspirasi.
                  <br />
                  Sampai jumpa di webinar Edurise
                </p>
                <button
                  onClick={() => {
                    setShowJoinPopup(false);
                    setShowDownloadButtons(true);
                  }}
                  className="bg-[#3375CC] hover:bg-sky-800 text-white font-semibold px-5 py-4 rounded-md text-sm transition w-1/2"
                >
                  Join now
                </button>
              </div>

              {/* Image */}
              <div className="w-[400px] h-[400px] rounded-xl overflow-hidden">
                <img
                  src={posterWeb}
                  alt="Webinar Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Rekaman Popup */}
        {showRekamanPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#F5F7FA] rounded-lg p-10 w-[90%] max-w-4xl shadow-lg relative flex flex-col items-center">
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                &times;
              </button>

              {/* Video */}
              <div className="overflow-hidden mb-6">
                <video
                  className="w-[400px] mx-auto object-cover"
                  controls
                  playsInline
                >
                  <source src={rekaman} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Text */}
              <div className="text-center">
                <p className="text-lg font-semibold text-[#E5A426] mb-4 tracking-[0.1em]">
                  <span className="text-[#3375CC]">
                    Terima kasih telah bergabung dalam webinar
                  </span>
                  <span className="text-[#E5A426]"> Eduacademy! </span>
                  <span className="text-[#1F467A]">
                    Semoga <br />
                    sesi ini bermanfaat untuk pengembangan dirimu.
                  </span>
                </p>

                {/* Download Button */}
                <a
                  href={rekaman}
                  download
                  className="bg-[#3375CC] hover:bg-sky-800 text-white font-semibold px-6 py-3 rounded-md text-sm transition inline-block text-center"
                >
                  Download Rekaman
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Sertifikat Popup */}
        {showSertifikatPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#F5F7FA] rounded-lg p-10 w-[90%] max-w-4xl shadow-lg relative flex flex-col items-center">
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                &times;
              </button>

              {/* Image */}
              <div className="overflow-hidden mb-6">
                <img
                  className="w-[400px] mx-auto object-cover"
                  src={sertif}
                  alt="Sertifikat"
                />
              </div>

              {/* Text */}
              <div className="text-center">
                <p className="text-lg font-semibold text-[#E5A426] mb-4 tracking-[0.1em]">
                  <span className="text-[#3375CC]">
                    Terima kasih telah bergabung dalam webinar
                  </span>
                  <span className="text-[#E5A426]"> Eduacademy! </span>
                  <span className="text-[#1F467A]">
                    Semoga <br />
                    sesi ini bermanfaat untuk pengembangan dirimu.
                  </span>
                </p>

                {/* Download Button */}
                <a
                  href={sertif}
                  download
                  className="bg-[#3375CC] hover:bg-sky-800 text-white font-semibold px-6 py-3 rounded-md text-sm transition inline-block text-center"
                >
                  Download Sertifikat
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default WebinarDetail;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailCardCompetiton = () => {
  const { id } = useParams();
  const [competitionDetail, setCompetitionDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- DATA FASILITAS DAN HADIAH UMUM ---
  const commonPrizes = [
    { icon: '/img/eduevent/Symbol1.png', text: 'Medali Juara, Honorable Mention, dan Finalis', subtext: 'Untuk Peserta di Babak Final' },
    { icon: '/img/eduevent/Symbol2.png', text: 'Beasiswa', subtext: 'Beasiswa untuk juara dengan tingkat yang dikategorikan' },
    { icon: '/img/eduevent/Symbol3.png', text: 'E-Plagam dan E-Sertifikat', subtext: 'Untuk Peserta dan Juara' },
    { icon: '/img/eduevent/Symbol4.png', text: 'Piala Juara', subtext: 'Untuk Juara Terbaik setiap Bidang' },
  ];

  // --- DATA KETENTUAN BEASISWA UMUM ---
  const commonScholarshipCriteria = [
    'Peserta merupakan juara 1, 2, atau 3 dari kompetisi yang diikuti.',
    'Memiliki rapor dengan nilai rata-rata minimal 85 (skala 100) atau setara, pada mata pelajaran terkait bidang kompetisi.',
    'Aktif dalam kegiatan ekstrakurikuler atau organisasi di sekolah.',
    'Memiliki surat rekomendasi dari kepala sekolah atau guru pembimbing.',
    'Bersedia mengikuti program pembinaan yang diadakan oleh penyelenggara beasiswa.',
  ];

  // --- DATA BANTUAN YANG DIDAPATKAN UMUM ---
  const commonBenefits = [
    { desc: 'Uang Tunai', amount: 'Rp 1.000.000,-' },
    { desc: 'Sertifikat penghargaan', amount: 'sebagai bentuk pengakuan atas prestasi.' },
    { desc: 'Paket bimbingan belajar eksklusif', amount: 'senilai Rp 500.000,-' },
    { desc: 'Akses gratis ke platform pembelajaran premium', amount: 'selama 6 bulan.' },
    { desc: 'Kesempatan mengikuti seminar/workshop', amount: 'dengan pakar di bidang sains.' },
  ];

  // --- DATA SYARAT & KETENTUAN UMUM ---
  const commonTerms = [
    'Peserta adalah siswa/i aktif SMP/MTs, SMA/MA, atau sederajat.',
    'Peserta mendaftar secara individu atau kelompok (maksimal 3 orang) dengan mengisi formulir pendaftaran yang tersedia.',
    'Peserta wajib memiliki akun di platform kompetisi Infinibee.',
    'Peserta diwajibkan membaca dan memahami semua peraturan serta ketentuan yang berlaku dalam kompetisi ini.',
    'Peserta harus menggunakan perangkat yang memadai (komputer/laptop dengan koneksi internet stabil) selama berlangsungnya kompetisi.',
    'Peserta yang terbukti melakukan kecurangan akan didiskualifikasi.',
  ];

  // --- DATA TENTANG KOMPETISI UMUM ---
  const commonAbout = `OSPN (Olimpiade Sains Plus Nasional) merupakan salah satu ajang kompetisi sains nasional tingkat SMP dan SMA yang bertujuan untuk menjaring bibit-bibit unggul di bidang sains, serta mempersiapkan mereka untuk ajang kompetisi yang lebih tinggi.
        \nKompetisi ini diselenggarakan secara daring (online) dengan cakupan materi meliputi:
        \n  - Matematika
        \n  - Fisika
        \n  - Kimia
        \n  - Biologi
        \nOSPN diselenggarakan setiap tahun dan telah menjadi barometer penting bagi siswa-siswi yang ingin mengukur kemampuan dan potensi mereka di bidang sains.`;

  const allCompetitions = [
    {
      id: 1,
      image: '/img/eduevent/img_infinibee60600x800.png',
      title: 'OSPN - Advance Level',
      date: '04 Mei 2025',
      isFree: true,
      level: 'nasional',
      scholarshipSectionTitle: 'Fasilitas dan Hadiah',
      scholarshipSubTitle: 'Dapatkan Beasiswa Dari kompetisi yang kategori!',
      prizes: commonPrizes,
      about: commonAbout,
      terms: commonTerms,
      scholarshipCriteria: commonScholarshipCriteria,
      benefits: commonBenefits,
    },
    {
      id: 2,
      image: '/img/eduevent/img_infinibee60600x800_248x203.png',
      title: 'OSPN - Advance Level (Apr-Jun 2025)',
      date: '15 April 2025',
      isFree: true,
      level: 'nasional',
      scholarshipSectionTitle: 'Fasilitas dan Hadiah',
      scholarshipSubTitle: 'Dapatkan Beasiswa Dari kompetisi yang kategori!',
      prizes: commonPrizes,
      about: commonAbout,
      terms: commonTerms,
      scholarshipCriteria: commonScholarshipCriteria,
      benefits: commonBenefits,
    },
    {
      id: 3,
      image: '/img/eduevent/img_infinibee60600x800_248x209.png',
      title: 'OSPN - Advance Level (Jul-Sep 2025)',
      date: '20 July 2025',
      isFree: true,
      level: 'nasional',
      scholarshipSectionTitle: 'Fasilitas dan Hadiah',
      scholarshipSubTitle: 'Dapatkan Beasiswa Dari kompetisi yang kategori!',
      prizes: commonPrizes,
      about: commonAbout,
      terms: commonTerms,
      scholarshipCriteria: commonScholarshipCriteria,
      benefits: commonBenefits,
    },
    {
      id: 4,
      image: '/img/eduevent/img_infinibee60600x800.png',
      title: 'OSPN - Advance Level (Okt-Des 2025)',
      date: '10 November 2025',
      isFree: true,
      level: 'nasional',
      scholarshipSectionTitle: 'Fasilitas dan Hadiah', scholarshipSubTitle: 'Dapatkan Beasiswa Dari kompetisi yang kategori!',
      prizes: commonPrizes,
      about: commonAbout,
      terms: commonTerms,
      scholarshipCriteria: commonScholarshipCriteria,
      benefits: commonBenefits,
    },
    {
      id: 5,
      image: '/img/eduevent/img_infinibee60600x800_248x203.png',
      title: 'Kompetisi Matematika (Jan-Mar 2026)',
      date: '01 February 2026',
      isFree: true,
      level: 'provinsi',
      scholarshipSectionTitle: 'Fasilitas dan Hadiah', scholarshipSubTitle: 'Dapatkan Beasiswa Dari kompetisi yang kategori!',
      prizes: commonPrizes,
      about: commonAbout,
      terms: commonTerms,
      scholarshipCriteria: commonScholarshipCriteria,
      benefits: commonBenefits,
    },
    {
      id: 6,
      image: '/img/eduevent/img_infinibee60600x800_248x209.png',
      title: 'Lomba Olimpiade Sains (Jan-Mar 2025)',
      date: '05 March 2025',
      isFree: true,
      level: 'provinsi',
      scholarshipSectionTitle: 'Fasilitas dan Hadiah', scholarshipSubTitle: 'Dapatkan Beasiswa Dari kompetisi yang kategori!',
      prizes: commonPrizes,
      about: commonAbout,
      terms: commonTerms,
      scholarshipCriteria: commonScholarshipCriteria,
      benefits: commonBenefits,
    },
    {
      id: 7,
      image: '/img/eduevent/img_infinibee60600x800.png',
      title: 'OSPN - Lomba Catur (Apr-Jun 2025)',
      date: '22 May 2025',
      isFree: true,
      level: 'kota',
      scholarshipSectionTitle: 'Fasilitas dan Hadiah', scholarshipSubTitle: 'Dapatkan Beasiswa Dari kompetisi yang kategori!',
      prizes: commonPrizes,
      about: commonAbout,
      terms: commonTerms,
      scholarshipCriteria: commonScholarshipCriteria,
      benefits: commonBenefits,
    },
    {
      id: 8,
      image: '/img/eduevent/img_infinibee60600x800_248x203.png',
      title: 'Kompetisi Coding (Jul-Sep 2024)',
      date: '10 August 2024',
      isFree: true,
      level: 'nasional',
      scholarshipSectionTitle: 'Fasilitas dan Hadiah', scholarshipSubTitle: 'Dapatkan Beasiswa Dari kompetisi yang kategori!',
      prizes: commonPrizes,
      about: commonAbout,
      terms: commonTerms,
      scholarshipCriteria: commonScholarshipCriteria,
      benefits: commonBenefits,
    },
  ];

  useEffect(() => {
    setLoading(true);
    const competitionId = parseInt(id);
    const foundCompetition = allCompetitions.find(comp => comp.id === competitionId);

    if (foundCompetition) {
      setCompetitionDetail(foundCompetition);
    } else {
      setCompetitionDetail(null);
      console.warn(`Kompetisi dengan ID ${id} tidak ditemukan.`);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-xl font-semibold">Memuat detail kompetisi...</div>;
  }

  if (!competitionDetail) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-600 text-lg">
        <p>Mohon maaf, detail kompetisi tidak ditemukan.</p>
        <Link to="/competitions/all" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Kembali ke Daftar Kompetisi
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-12 font-poppins text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-stretch">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center relative min-h-[250px] lg:min-h-[400px]">
              <img
                src="/img/eduevent/tropy.png"
                alt="Trophy Podium"
                className="w-full max-w-[350px] h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">{competitionDetail.scholarshipSectionTitle}</h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        {competitionDetail.scholarshipSubTitle}
                    </h2>
                    <div className="space-y-5">
                        {competitionDetail.prizes && competitionDetail.prizes.map((prize, index) => (
                            <div key={index} className="flex items-start">
                                <img src={prize.icon} alt={prize.text} className="w-7 h-7 mr-4 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg">{prize.text}</p>
                                    <p className="text-gray-600 text-sm">{prize.subtext}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-lg relative overflow-hidden flex-grow flex justify-center items-center p-4">
              <img
                src={competitionDetail.image}
                alt={competitionDetail.title}
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>

            {/* OSPN - Advance Level Section (Kotak di bawah Pamflet) - PENYESUAIAN DI SINI */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex-grow flex flex-col justify-between">
                <div>
                    {/* Judul Kompetisi */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{competitionDetail.title}</h2>
                    {/* Detail Kompetisi (Tanggal, Status, Level) */}
                    <div className="space-y-2 text-gray-700 text-sm"> {/* text-sm dan space-y-2 diterapkan di sini */}
                        <div className="flex items-center">
                            <img src="/img/eduevent/img_calendar.svg" alt="Calendar" className="w-[1rem] h-[1rem] mr-2 flex-shrink-0 relative -top-[8px]" />
                            <p className="leading-tight">{competitionDetail.date}</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/img/eduevent/img_usercheck.svg" alt="Status" className="w-[1rem] h-[1rem] mr-2 flex-shrink-0 relative -top-[8px]" />
                            <p className="leading-tight">{competitionDetail.isFree ? 'Gratis tanpa syarat bayar' : 'Berbayar'}</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/img/eduevent/img_circle.svg" alt="Level" className="w-[1rem] h-[1rem] mr-2 flex-shrink-0 relative -top-[8px]" />
                            <p className="leading-tight">tingkat {competitionDetail.level.charAt(0).toUpperCase() + competitionDetail.level.slice(1)}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <Link
                        to={`/eduevents/${competitionDetail.id}/registration`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md inline-block text-center"
                    >
                        Daftar Sekarang
                    </Link>
                </div>
            </div>
            {/* AKHIR PENYESUAIAN */}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
              <a href="#about" className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">Tentang Kompetisi</a>
              <a href="#terms" className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">Syarat & Ketentuan</a>
              {competitionDetail.scholarshipCriteria && competitionDetail.scholarshipCriteria.length > 0 && (
                <a href="#scholarshipCriteria" className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">Ketentuan Beasiswa</a>
              )}
              {competitionDetail.benefits && competitionDetail.benefits.length > 0 && (
                <a href="#benefits" className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">Bantuan Yang Didapatkan</a>
              )}
            </nav>
          </div>

          <div className="space-y-8">
            <div id="about" className="p-4 rounded-lg border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Tentang Kompetisi</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {competitionDetail.about || 'Deskripsi tentang kompetisi ini belum tersedia.'}
              </p>
            </div>
            <div id="terms" className="p-4 rounded-lg border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Syarat & Ketentuan</h2>
              <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
                {competitionDetail.terms && competitionDetail.terms.length > 0 ? (
                  competitionDetail.terms.map((term, index) => (
                    <li key={index}>{term}</li>
                  ))
                ) : (
                  <li>Syarat & ketentuan belum tersedia.</li>
                )}
              </ul>
            </div>
            {competitionDetail.scholarshipCriteria && competitionDetail.scholarshipCriteria.length > 0 && (
              <div id="scholarshipCriteria" className="p-4 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Ketentuan Beasiswa</h2>
                <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
                  {competitionDetail.scholarshipCriteria.map((criteria, index) => (
                    <li key={index}>{criteria}</li>
                  ))}
                </ul>
              </div>
            )}
            {competitionDetail.benefits && competitionDetail.benefits.length > 0 && (
              <div id="benefits" className="p-4 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Bantuan Yang Didapatkan</h2>
                <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
                  {competitionDetail.benefits.map((benefit, index) => (
                    <li key={index}>
                      {benefit.desc} {benefit.amount ? `(${benefit.amount})` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 text-center">
            <Link to="/eduevents/all" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Kembali ke Daftar Kompetisi
            </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailCardCompetiton;
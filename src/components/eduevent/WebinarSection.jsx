import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import EdueventCard from "../eduevent/EdueventCard"; // Pastikan path benar
import EdueventButton from "../eduevent/EdueventBtn"; // Pastikan path benar

const WebminarSection = () => {
  const [activeYear, setActiveYear] = useState('all');
  const [activePeriod, setActivePeriod] = useState('all');

  const Webminars = [
    { id: 1, image: '/img/eduevent/img_rectangle_8732.png', title: 'Strategi Jitu Mendapatkan Beasiswa Impian', date: '20 March 2025', year: '2025', description: 'Dapatkan kiat-kiat terbaik untuk meraih beasiswa impian Anda. Sesi ini akan membahas strategi pendaftaran, penulisan esai, dan tips wawancara yang efektif.' },
    { id: 2, image: '/img/eduevent/img_final_prensent_1_1.png', title: 'Workshop Desain Grafis Dasar untuk Pemula', date: '15 April 2025', year: '2025', description: 'Pelajari fundamental desain grafis menggunakan tool populer. Cocok untuk Anda yang ingin memulai karier di bidang kreatif.' },
    { id: 3, image: '/img/eduevent/img_final_prensent_1_1_261x199.png', title: 'Membuat Aplikasi dengan React Native', date: '10 July 2025', year: '2025', description: 'Panduan lengkap membuat aplikasi mobile lintas platform. Dari nol hingga deploy, semua akan dibahas di Webminar ini.' },
    { id: 4, image: '/img/eduevent/img_final_prensent_1_1_1.png', title: 'Strategi Pemasaran Digital untuk UMKM', date: '05 November 2025', year: '2025', description: 'Tingkatkan omset bisnis Anda dengan strategi pemasaran digital yang tepat. Temukan rahasia di balik kampanye sukses.' },
    { id: 5, image: '/img/eduevent/img_final_prensent_1_1_1.png', title: 'Memulai Karir di Bidang Data Science', date: '01 October 2024', year: '2024', description: 'Panduan awal bagi Anda yang tertarik dengan dunia data science. Pelajari roadmap dan skill yang dibutuhkan.' },
    { id: 6, image: '/img/eduevent/img_rectangle_8732.png', title: 'Sukses Wawancara Kerja', date: '22 January 2026', year: '2026', description: 'Persiapkan diri Anda untuk wawancara kerja impian. Dapatkan tips & trik agar diterima di perusahaan favorit.' },
    { id: 7, image: '/img/eduevent/img_final_prensent_1_1.png', title: 'Workshop AI untuk Pemula', date: '10 Feb 2026', year: '2026', description: 'Pengantar kecerdasan buatan dan aplikasinya dalam kehidupan sehari-hari. Cocok untuk semua tingkatan.' },
  ];

  const allYears = useMemo(() => {
    const years = new Set(Webminars.map(Webminar => Webminar.year));
    return ['all', ...Array.from(years)].sort((a, b) => {
      if (a === 'all') return -1;
      if (b === 'all') return 1;
      return parseInt(b) - parseInt(a);
    });
  }, [Webminars]);

  const periods = [
    { id: 'all', label: 'Semua Event' },
    { id: 'jan-mar', label: 'Jan-Mar' },
    { id: 'apr-jun', label: 'Apr-Jun' },
    { id: 'jul-sep', label: 'Jul-Sep' },
    { id: 'oct-dec', label: 'Okt-Des' },
  ];

  const getPeriodFromDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Invalid date format:", dateString);
      return '';
    }
    const month = date.getMonth() + 1;

    if (month >= 1 && month <= 3) return 'jan-mar';
    if (month >= 4 && month <= 6) return 'apr-jun';
    if (month >= 7 && month <= 9) return 'jul-sep';
    if (month >= 10 && month <= 12) return 'oct-dec';
    return '';
  };

  const filteredWebminars = useMemo(() => {
    return Webminars.filter((Webminar) => {
      const WebminarYear = Webminar.year;
      const WebminarPeriod = getPeriodFromDate(Webminar.date);

      const yearMatches = activeYear === 'all' || WebminarYear === activeYear;
      const periodMatches = activePeriod === 'all' || WebminarPeriod === activePeriod;

      return yearMatches && periodMatches;
    });
  }, [activeYear, activePeriod, Webminars]);

  const periodsWithCount = useMemo(() => {
    return periods.map(period => {
      const count = Webminars.filter(Webminar => {
        const WebminarYear = Webminar.year;
        const WebminarPeriod = getPeriodFromDate(Webminar.date);

        const yearFilterApplies = activeYear === 'all' || WebminarYear === activeYear;
        const periodFilterApplies = period.id === 'all' || WebminarPeriod === period.id;

        return yearFilterApplies && periodFilterApplies;
      }).length;
      return { ...period, count };
    });
  }, [activeYear, periods, Webminars]);

  const allYearsTotalCount = useMemo(() => {
    return Webminars.length;
  }, [Webminars]);

  return (
    <section className="bg-[#ebf1fa] py-12">
      <div className="container mx-auto px-4">
        {/* Header Bagian Webminar */}
        <div className="flex items-center mb-8">
          <img
            src="/img/eduevent/img_ellipse_1.png"
            alt="Webminar Icon"
            className="w-[50px] h-[50px] rounded-full mr-4"
          />
          <h2 className="font-poppins font-bold text-[24px] text-black">
            Webminar
          </h2>
        </div>

        {/* Bagian Filter (Tahun & Periode) */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Filter Tahun (Dropdown) */}
          <div className="relative">
            <select
              value={activeYear}
              onChange={(e) => {
                setActiveYear(e.target.value);
                setActivePeriod('all');
              }}
              className="bg-white rounded-lg px-4 py-2 font-poppins font-bold text-[16px] text-black appearance-none pr-8 cursor-pointer w-fit h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Tahun ({allYearsTotalCount} Rekaman)</option>
              {allYears.filter(year => year !== 'all').map((year) => (
                <option key={year} value={year}>
                  {year} ({Webminars.filter(web => web.year === year).length} Rekaman)
                </option>
              ))}
            </select>
            <img
              src="/img/eduevent/img_chevronright.svg"
              alt="Dropdown arrow"
              className="w-[21px] h-[24px] absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>

          {/* Filter Periode - Hanya tampilkan jika tahun spesifik dipilih */}
          {activeYear !== 'all' && (
            <div className="flex flex-wrap gap-4">
              {periodsWithCount.map((period) => (
                <div
                  key={period.id}
                  onClick={() => setActivePeriod(period.id)}
                  className={`
                    bg-white rounded-lg px-6 py-2 flex items-center h-[40px]
                    ${activePeriod === period.id ? 'border-2 border-black' : 'border border-gray-200'}
                    cursor-pointer transition-all duration-200
                    hover:border-black
                    min-w-fit max-w-xs justify-between
                  `}
                >
                  <span className="font-poppins text-[18px] text-[#575858] mr-2 whitespace-nowrap">
                    {period.label}
                  </span>
                  <div className="h-[25px] w-[1px] bg-gray-300 mx-2 flex-shrink-0"></div>
                  <span className="font-poppins text-[12px] text-black whitespace-nowrap">
                    {period.count} Rekaman
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bagian Kartu Webinar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredWebminars.length > 0 ? (
            filteredWebminars.map((Webminar) => (
              <EdueventCard
                key={Webminar.id}
                id={Webminar.id}
                type="Webminar" // Ini yang akan membuat link ke /webinardetail
                image={Webminar.image}
                title={Webminar.title}
                date={Webminar.date}
                description={Webminar.description}
                // Hapus buttonText dan buttonVariant
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 py-8">
              Tidak ada Webminar ditemukan untuk filter yang dipilih.
            </p>
          )}
        </div>

        {/* Tombol "Selengkapnya" */}
        <div className="flex justify-end mt-12">
          <Link to="/webinar">
            <EdueventButton
              variant="primary"
              className="w-[295px] h-[40px] flex items-center justify-center"
            >
              Selengkapnya
            </EdueventButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebminarSection;
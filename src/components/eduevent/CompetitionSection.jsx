// src/components/eduevent/CompetitionSection.jsx

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import EdueventCard from "./EdueventCard";    // <--- TETAP INI
import EdueventButton from "./EdueventBtn";  // <--- TETAP INI

const CompetitionSection = () => {
  // Menggunakan logika filter 'all' dari kode patokan Anda
  const [activeYear, setActiveYear] = useState('all');
  const [activePeriod, setActivePeriod] = useState('all');

  // availableYears dari kode patokan yang lebih lengkap
  const [availableYears] = useState(['2024', '2025', '2026'].sort().reverse());

  const periods = [
    { id: 'all', label: 'Semua Event' }, // Opsi 'Semua Event' untuk filter periode
    { id: 'jan-mar', label: 'Jan-Mar' },
    { id: 'apr-jun', label: 'Apr-Jun' },
    { id: 'jul-sep', label: 'Jul-Sep' },
    { id: 'oct-dec', label: 'Okt-Des' }, // Mengubah 'nov-des' menjadi 'oct-dec' agar sesuai dengan range tanggal standar
  ];

  // Data kompetisi dari kode patokan (dengan tambahan 'year' untuk filter)
  const competitions = [
    {
      id: 1,
      image: '/img/eduevent/img_infinibee60600x800.png', // <-- Path Diperbaiki
      title: 'OSPN - Advance Level (Jan-Mar 2025)',
      date: '04 January 2025',
      year: '2025',
      isFree: true,
      level: 'nasional',
    },
    {
      id: 2,
      image: '/img/eduevent/img_infinibee60600x800_248x203.png', // <-- Path Diperbaiki
      title: 'OSPN - Advance Level (Apr-Jun 2025)',
      date: '15 April 2025',
      year: '2025',
      isFree: true,
      level: 'nasional',
    },
    {
      id: 3,
      image: '/img/eduevent/img_infinibee60600x800_248x209.png', // <-- Path Diperbaiki
      title: 'OSPN - Advance Level (Jul-Sep 2025)',
      date: '20 July 2025',
      year: '2025',
      isFree: true,
      level: 'nasional',
    },
    {
      id: 4,
      image: '/img/eduevent/img_infinibee60600x800_248x209.png', // <-- Path Diperbaiki
      title: 'OSPN - Advance Level (Okt-Des 2025)',
      date: '10 November 2025',
      year: '2025',
      isFree: true,
      level: 'nasional',
    },
    {
      id: 5,
      image: '/img/eduevent/img_infinibee60600x800_248x209.png', // <-- Path Diperbaiki (ini sudah benar di input Anda)
      title: 'Kompetisi Matematika (Jan-Mar 2026)',
      date: '01 February 2026',
      year: '2026',
      isFree: true,
      level: 'provinsi',
    },
    {
      id: 6,
      image: '/img/eduevent/img_infinibee60600x800.png', // <-- Path Diperbaiki
      title: 'Lomba Olimpiade Sains (Jan-Mar 2025)',
      date: '05 March 2025',
      year: '2025',
      isFree: true,
      level: 'provinsi',
    },
    {
      id: 7,
      image: '/img/eduevent/img_infinibee60600x800.png', // <-- Path Diperbaiki
      title: 'OSPN - Lomba Catur (Apr-Jun 2025)',
      date: '22 May 2025',
      year: '2025',
      isFree: true,
      level: 'kota',
    },
    {
      id: 8,
      image: '/img/eduevent/img_infinibee60600x800.png', // <-- Path Diperbaiki
      title: 'OSPN - Kompetisi Coding (Jul-Sep 2024)',
      date: '10 August 2024',
      year: '2024',
      isFree: true,
      level: 'nasional',
    },
  ];

  // Fungsi untuk mendapatkan periode dari tanggal (dari kode patokan)
  const getPeriodFromDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Invalid date format:", dateString);
      return '';
    }
    const month = date.getMonth() + 1; // getMonth() returns 0-11

    if (month >= 1 && month <= 3) return 'jan-mar';
    if (month >= 4 && month <= 6) return 'apr-jun';
    if (month >= 7 && month <= 9) return 'jul-sep';
    if (month >= 10 && month <= 12) return 'oct-dec'; // Mengubah 'nov-des'
    return '';
  };

  // Memfilter kompetisi berdasarkan tahun dan periode yang aktif (dari kode patokan)
  const filteredCompetitions = useMemo(() => {
    return competitions.filter((comp) => {
      const compYear = comp.year;
      const compPeriod = getPeriodFromDate(comp.date);

      const yearMatches = activeYear === 'all' || compYear === activeYear;
      const periodMatches = activePeriod === 'all' || compPeriod === activePeriod;

      return yearMatches && periodMatches;
    });
  }, [activeYear, activePeriod, competitions]);

  // Menghitung jumlah kompetisi untuk setiap periode berdasarkan tahun aktif (dari kode patokan)
  const periodsWithCount = useMemo(() => {
    return periods.map(period => {
      const count = competitions.filter(comp => {
        const compYear = comp.year;
        const compPeriod = getPeriodFromDate(comp.date);

        const yearFilterApplies = activeYear === 'all' || compYear === activeYear;
        const periodFilterApplies = period.id === 'all' || compPeriod === period.id;

        return yearFilterApplies && periodFilterApplies;
      }).length;
      return { ...period, count };
    });
  }, [activeYear, periods, competitions]);

  // Menghitung total rekaman untuk opsi "Semua Tahun" (dari kode patokan)
  const allYearsTotalCount = useMemo(() => {
    return competitions.length;
  }, [competitions]);

  return (
    <section className="bg-[#ebf1fa] py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center mb-8">
          <img
            src="/img/eduevent/img_ellipse_1.png" // <-- Path Diperbaiki
            alt="Competition Icon"
            className="w-[50px] h-[50px] rounded-full mr-4"
          />
          <h2 className="font-poppins font-bold text-[24px] text-black">
            Daftar Kompetisi
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Year Filter (Dropdown - dari kode patokan) */}
          <div className="relative">
            <select
              value={activeYear}
              onChange={(e) => {
                setActiveYear(e.target.value);
                setActivePeriod('all'); // Selalu reset periode ke 'all' saat tahun berubah
              }}
              className="bg-white rounded-lg px-4 py-2 font-poppins font-bold text-[16px] text-black appearance-none pr-8 cursor-pointer w-fit h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Tahun ({allYearsTotalCount} Rekaman)</option>
              {availableYears.filter(year => year !== 'all').map((year) => (
                <option key={year} value={year}>
                  {year} ({competitions.filter(comp => comp.year === year).length} Rekaman)
                </option>
              ))}
            </select>
            <img
              src="/img/eduevent/img_chevronright.svg" // <-- Path Diperbaiki
              alt="Dropdown arrow"
              className="w-[21px] h-[24px] absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>

          {/* Period Filters - Hanya tampilkan jika tahun spesifik dipilih (dari kode patokan) */}
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

        {/* Competition Cards - Menggunakan EdueventCard dan filteredCompetitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredCompetitions.length > 0 ? (
            filteredCompetitions.map((competition) => (
              <EdueventCard
                key={competition.id}
                id={competition.id}
                type="competition"
                image={competition.image}
                title={competition.title}
                date={competition.date}
                isFree={competition.isFree}
                level={competition.level}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 py-8">
              Tidak ada kompetisi ditemukan untuk filter yang dipilih.
            </p>
          )}
        </div>

        {/* View More Button */}
        <div className="flex justify-end mt-12">
          <Link to="/eduevents/all">
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

export default CompetitionSection;
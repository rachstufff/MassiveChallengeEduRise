import { useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; 
import EdueventCard from "../../components/eduevent/EdueventCard";
import EdueventButton from "../../components/eduevent/EdueventBtn";

const CompetitionDetailPage = () => {
  const competitions = [
    {
      id: 1,
      image: '/img/eduevent/img_infinibee60600x800.png',
      title: 'OSPN - Advance Level (Jan-Mar 2025)',
      date: '04 January 2025',
      year: '2025',
      isFree: true,
      level: 'nasional',
    },
    {
      id: 2,
      image: '/img/eduevent/img_infinibee60600x800_248x203.png',
      title: 'OSPN - Advance Level (Apr-Jun 2025)',
      date: '15 April 2025',
      year: '2025',
      isFree: true,
      level: 'nasional',
    },
    {
      id: 3,
      image: '/img/eduevent/img_infinibee60600x800_248x209.png',
      title: 'OSPN - Advance Level (Jul-Sep 2025)',
      date: '20 July 2025',
      year: '2025',
      isFree: true,
      level: 'nasional',
    },
    {
      id: 4,
      image: '/img/eduevent/img_infinibee60600x800_248x209.png',
      title: 'OSPN - Advance Level (Okt-Des 2025)',
      date: '10 November 2025',
      year: '2025',
      isFree: true,
      level: 'nasional',
    },
    {
      id: 5,
      image: '/img/eduevent/img_infinibee60600x800_248x209.png',
      title: 'Kompetisi Matematika (Jan-Mar 2026)',
      date: '01 February 2026',
      year: '2026',
      isFree: true,
      level: 'provinsi',
    },
    {
      id: 6,
      image: '/img/eduevent/img_infinibee60600x800.png',
      title: 'Lomba Olimpiade Sains (Jan-Mar 2025)',
      date: '05 March 2025',
      year: '2025',
      isFree: true,
      level: 'provinsi',
    },
    {
      id: 7,
      image: '/img/eduevent/img_infinibee60600x800.png',
      title: 'OSPN - Lomba Catur (Apr-Jun 2025)',
      date: '22 May 2025',
      year: '2025',
      isFree: true,
      level: 'kota',
    },
    {
      id: 8,
      image: '/img/eduevent/img_infinibee60600x800.png',
      title: 'Kompetisi Coding (Jul-Sep 2024)',
      date: '10 August 2024',
      year: '2024',
      isFree: true,
      level: 'nasional',
    },
  ];

  const [activeMonthFilter, setActiveMonthFilter] = useState('all');
  const [activeYearFilter, setActiveYearFilter] = useState('2025');

  const months = [
    { id: 'januari', label: 'Januari', monthNum: 0 },
    { id: 'februari', label: 'Februari', monthNum: 1 },
    { id: 'maret', label: 'Maret', monthNum: 2 },
    { id: 'april', label: 'April', monthNum: 3 },
    { id: 'mei', label: 'Mei', monthNum: 4 },
    { id: 'juni', label: 'Juni', monthNum: 5 },
    { id: 'juli', label: 'Juli', monthNum: 6 },
    { id: 'agustus', label: 'Agustus', monthNum: 7 },
    { id: 'september', label: 'September', monthNum: 8 },
    { id: 'oktober', label: 'Oktober', monthNum: 9 },
    { id: 'november', label: 'November', monthNum: 10 },
    { id: 'desember', label: 'Desember', monthNum: 11 },
  ];

  const getMonthAndYearFromDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Invalid date format:", dateString);
      return { month: '', year: '', monthIndex: -1 };
    }
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString();
    return { month, year, monthIndex: date.getMonth() };
  };

  const filteredCompetitionsByMonth = useMemo(() => {
    return competitions.filter(comp => {
      const { year, monthIndex } = getMonthAndYearFromDate(comp.date);
      const yearMatches = comp.year === activeYearFilter;
      const monthMatches = activeMonthFilter === 'all' || monthIndex === months.find(m => m.id === activeMonthFilter)?.monthNum;

      return yearMatches && (activeMonthFilter === 'all' || monthMatches);
    });
  }, [activeMonthFilter, activeYearFilter, competitions, months]);

  const groupedCompetitionsForDisplay = useMemo(() => {
    const groups = {};
    filteredCompetitionsByMonth.forEach(comp => {
      const { month, year } = getMonthAndYearFromDate(comp.date);
      const key = `${month} | ${year}`;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(comp);
    });
    return groups;
  }, [filteredCompetitionsByMonth]);

  const allAvailableYears = useMemo(() => {
    const years = new Set(competitions.map(comp => comp.year));
    return Array.from(years).sort((a,b) => parseInt(b) - parseInt(a));
  }, [competitions]);


  return (
    <div className="bg-[#ebf1fa] min-h-screen flex flex-col">
      {/* Menambahkan Navbar di sini */}
      <Navbar />

      {/* Hero Section dengan Gambar Latar Belakang dan Filter Bulan */}
      <div
        className="relative py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/img/eduevent/bg_detail.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="font-poppins font-bold text-4xl leading-tight mb-2">
              Yuk Ikuti Kompetisi <br />
              Online Di EDURISE
            </h1>
          </div>

          <div
            className="rounded-lg p-6 shadow-lg text-black w-full max-w-md md:ml-auto"
            style={{
                background: 'linear-gradient(to bottom right, rgba(0, 0, 255, 0.4), rgba(255, 165, 0, 0.4))',
                backdropFilter: 'blur(5px)'
            }}
          >
            <h2 className="font-poppins font-bold text-2xl text-white mb-4 text-center">
              Pilih Bulan Kompetisi
            </h2>
            <div className="mb-4">
              <select
                value={activeYearFilter}
                onChange={(e) => {
                  setActiveYearFilter(e.target.value);
                  setActiveMonthFilter('all');
                }}
                className="w-full bg-white rounded-lg px-4 py-2 font-poppins font-bold text-[16px] text-black appearance-none pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {allAvailableYears.map((year) => (
                  <option key={year} value={year}>
                    Tahun {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {months.map((month) => {
                const countForMonth = competitions.filter(comp => {
                  const { monthIndex, year } = getMonthAndYearFromDate(comp.date);
                  return year === activeYearFilter && monthIndex === month.monthNum;
                }).length;

                return (
                  <button
                    key={month.id}
                    className={`
                      w-full py-2 px-1 rounded-lg text-center font-poppins text-sm md:text-base
                      ${activeMonthFilter === month.id
                          ? 'bg-blue-600 text-white border-2 border-blue-600'
                          : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'}
                      transition-all duration-200 flex items-center justify-between
                      ${countForMonth === 0 && activeMonthFilter !== month.id ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                    onClick={() => setActiveMonthFilter(month.id)}
                    disabled={countForMonth === 0 && activeMonthFilter !== month.id}
                  >
                    <span className="flex-grow">{month.label}</span>
                    <span className="ml-1 text-xs text-right opacity-75">({countForMonth})</span>
                    <img
                      src="/img/eduevent/img_chevronright.svg"
                      alt="Arrow"
                      className="w-[15px] h-[15px] ml-1 filter brightness-0 invert"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bagian DAFTAR KOMPETISI - Ini adalah bar biru yang terpisah dari hero section */}
      <div className="bg-[#1f467a] py-4 text-white text-center flex items-center justify-center min-h-[120px]">
        <h2 className="font-poppins font-bold text-3xl leading-tight">
          DAFTAR KOMPETISI
        </h2>
      </div>

      {/* Bagian konten kompetisi yang sebenarnya (background putih di gambar) */}
      <div className="bg-[#ebf1fa] py-12 flex-grow">
        <div className="container mx-auto px-4">
            {Object.keys(groupedCompetitionsForDisplay).length > 0 ? (
                months.map(monthData => {
                    const monthKey = `${monthData.label} | ${activeYearFilter}`;
                    const competitionsInMonth = groupedCompetitionsForDisplay[monthKey];

                    if (competitionsInMonth && competitionsInMonth.length > 0) {
                        return (
                            <div key={monthKey} className="mb-8 p-4 bg-white rounded-lg shadow-md">
                                <h3 className="font-poppins font-bold text-xl text-black mb-4">
                                    {monthKey}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                    {competitionsInMonth.map((competition) => (
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
                                    ))}
                                </div>
                            </div>
                        );
                    } else if (activeMonthFilter === 'all' || activeMonthFilter === monthData.id) {
                        return (
                            <div key={monthKey} className="mb-8 p-4 bg-white rounded-lg shadow-md">
                                <h3 className="font-poppins font-bold text-xl text-black mb-4">
                                    {monthKey}
                                </h3>
                                <p className="col-span-full text-center text-gray-600 py-4">
                                    Mohon maaf, tidak ada kompetisi tersedia untuk bulan {monthData.label} {activeYearFilter}.
                                </p>
                            </div>
                        );
                    }
                    return null;
                })
            ) : (
                <p className="text-center text-gray-600 py-8">
                    Tidak ada kompetisi ditemukan untuk tahun {activeYearFilter} dengan filter bulan yang dipilih.
                </p>
            )}
        </div>
      </div>

      {/* Menambahkan Footer di sini */}
      <Footer />
    </div>
  );
};

export default CompetitionDetailPage;

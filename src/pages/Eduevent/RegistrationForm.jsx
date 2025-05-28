import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const RegistrationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [competitionTitle, setCompetitionTitle] = useState('');
  const [hasRegistered, setHasRegistered] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    jenjangPendidikan: '',
    instansiPendidikan: '',
    jurusan: '',
    phoneNumber: '',
    email: '',
    alasanIkutKompetisi: '',
    competitionId: id,
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const allCompetitions = [
    { id: 1, title: 'OSPN - Advance Level', image: '/img/eduevent/img_infinibee60600x800.png', date: '04 Mei 2025', isFree: true, level: 'nasional' },
    { id: 2, title: 'OSPN - Advance Level (Apr-Jun 2025)', image: '/img/eduevent/img_infinibee60600x800_248x203.png', date: '15 April 2025', isFree: true, level: 'nasional' },
    { id: 3, title: 'OSPN - Advance Level (Jul-Sep 2025)', image: '/img/eduevent/img_infinibee60600x800_248x209.png', date: '20 July 2025', isFree: true, level: 'nasional' },
    { id: 4, title: 'OSPN - Advance Level (Okt-Des 2025)', image: '/img/eduevent/img_infinibee60600x800.png', date: '10 November 2025', isFree: true, level: 'nasional' },
    { id: 5, title: 'Kompetisi Matematika (Jan-Mar 2026)', image: '/img/eduevent/img_infinibee60600x800_248x203.png', date: '01 February 2026', isFree: false, level: 'provinsi' },
    { id: 6, title: 'Lomba Olimpiade Sains (Jan-Mar 2025)', image: '/img/eduevent/img_infinibee60600x800_248x209.png', date: '05 March 2025', isFree: false, level: 'provinsi' },
    { id: 7, title: 'OSPN - Lomba Catur (Apr-Jun 2025)', image: '/img/eduevent/img_infinibee60600x800.png', date: '22 May 2025', isFree: true, level: 'kota' },
    { id: 8, title: 'Kompetisi Coding (Jul-Sep 2024)', image: '/img/eduevent/img_infinibee60600x800_248x203.png', date: '10 August 2024', isFree: true, level: 'nasional' },
  ];

  const [currentCompetition, setCurrentCompetition] = useState(null);

  useEffect(() => {
    const competitionId = parseInt(id);
    const foundCompetition = allCompetitions.find(comp => comp.id === competitionId);

    if (foundCompetition) {
      setCompetitionTitle(foundCompetition.title);
      setCurrentCompetition(foundCompetition);
      const registeredCompetitions = JSON.parse(localStorage.getItem('registeredCompetitions')) || {};
      if (registeredCompetitions[id]) {
        setHasRegistered(true);
      }
    } else {
      setCompetitionTitle('Kompetisi Tidak Ditemukan');
      navigate('/eduevents/all');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    console.log('Data pendaftaran:', formData);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const success = true;

      if (success) {
        setSubmissionStatus('success');
        const registeredCompetitions = JSON.parse(localStorage.getItem('registeredCompetitions')) || {};
        registeredCompetitions[id] = competitionTitle;
        localStorage.setItem('registeredCompetitions', JSON.stringify(registeredCompetitions));
        setHasRegistered(true);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setSubmissionStatus('error');
    }
  };

  if (!currentCompetition) {
    return <div className="text-center py-10 text-xl font-semibold">Memuat atau mencari kompetisi...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-12 font-poppins text-gray-800 flex justify-center items-start lg:items-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3 w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <img
              src={currentCompetition.image}
              alt={currentCompetition.title}
              className="w-full h-auto object-cover rounded-xl mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentCompetition.title}</h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="/img/eduevent/img_calendar.svg" alt="Calendar" className="w-[1rem] h-[1rem] mr-2 flex-shrink-0 relative -top-[8px]" />
                <p className="leading-tight">{currentCompetition.date}</p>
              </div>
              <div className="flex items-center">
                <img src="/img/eduevent/img_usercheck.svg" alt="Status" className="w-[1rem] h-[1rem] mr-2 flex-shrink-0 relative -top-[8px]" />
                <p className="leading-tight">{currentCompetition.isFree ? 'Gratis tanpa syarat bayar' : 'Berbayar'}</p>
              </div>
              <div className="flex items-center">
                <img src="/img/eduevent/img_circle.svg" alt="Level" className="w-[1rem] h-[1rem] mr-2 flex-shrink-0 relative -top-[8px]" />
                <p className="leading-tight">tingkat {currentCompetition.level.charAt(0).toUpperCase() + currentCompetition.level.slice(1)}</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Form Pendaftaran Kompetisi</h1>

            {hasRegistered ? (
              <div className="text-center py-10">
                <p className="text-xl text-green-600 font-semibold mb-4">
                  Anda sudah terdaftar untuk "{competitionTitle}"!
                </p>
                <Link
                  to="/my-registrations"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md mr-4"
                >
                  Cek Status Kompetisi
                </Link>
                <Link
                  to={`/eduevents/all`}
                  className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Kembali
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap :</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="jenjangPendidikan" className="block text-sm font-medium text-gray-700 mb-1">Jenjang Pendidikan :</label>
                  <input
                    type="text"
                    id="jenjangPendidikan"
                    name="jenjangPendidikan"
                    value={formData.jenjangPendidikan}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="instansiPendidikan" className="block text-sm font-medium text-gray-700 mb-1">Instansi Pendidikan :</label>
                  <input
                    type="text"
                    id="instansiPendidikan"
                    name="instansiPendidikan"
                    value={formData.instansiPendidikan}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="jurusan" className="block text-sm font-medium text-gray-700 mb-1">Jurusan :</label>
                  <input
                    type="text"
                    id="jurusan"
                    name="jurusan"
                    value={formData.jurusan}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">No.Telp/HP :</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email :</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="alasanIkutKompetisi" className="block text-sm font-medium text-gray-700 mb-1">Alasan Mengikuti Kompetisi :</label>
                  <textarea
                    id="alasanIkutKompetisi"
                    name="alasanIkutKompetisi"
                    value={formData.alasanIkutKompetisi}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                  ></textarea>
                </div>

                {submissionStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    Pendaftaran berhasil! Mengalihkan...
                  </div>
                )}

                {submissionStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    Terjadi kesalahan saat pendaftaran. Silakan coba lagi.
                  </div>
                )}

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
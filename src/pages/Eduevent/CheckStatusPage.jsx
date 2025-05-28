// src/pages/competition/CheckStatusPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import StatusModal from '../../components/profile/StatusModal'; // Pastikan path ini benar!

const CheckStatusPage = () => {
  // Mengambil ID kompetisi dari URL
  const { id } = useParams();

  // Mengambil data kompetisi yang terdaftar dari localStorage
  // Menggunakan objek kosong sebagai default jika tidak ada data di localStorage
  const registeredCompetitions = JSON.parse(localStorage.getItem('registeredCompetitions')) || {};

  // Ambil judul kompetisi berdasarkan ID, atau default jika tidak ditemukan
  const competitionTitle = registeredCompetitions[id] || 'Kompetisi ini';

  // State untuk mengontrol visibilitas modal
  // Pastikan nama variabel state adalah 'showStatusModal'
  const [showStatusModal, setShowStatusModal] = useState(false);

  // Fungsi untuk membuka modal
  const handleOpenStatusModal = () => {
    setShowStatusModal(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseStatusModal = () => {
    setShowStatusModal(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-12 font-poppins text-gray-800 flex justify-center items-center">
      <div className="container mx-auto px-4 max-w-2xl bg-white rounded-2xl shadow-lg p-8 my-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Status Pendaftaran Kompetisi</h1>
        <p className="text-lg text-gray-700 mb-6">
          Anda sudah terdaftar untuk **"{competitionTitle}"**.
        </p>
        <p className="text-gray-600 mb-8">
          Silakan cek status pendaftaran Anda di halaman berikut untuk informasi lebih lanjut.
        </p>
        {/* Tombol yang akan membuka modal */}
        <button
          onClick={handleOpenStatusModal} // Panggil fungsi untuk membuka modal
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
        >
          Cek Status Pendaftaran Saya
        </button>
        <Link
          to={`/eduevents/all`}
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors duration-300 ml-4"
        >
          Kembali
        </Link>
      </div>

      {/* Conditional Rendering StatusModal sebagai overlay */}
      {/* PERBAIKAN DI SINI: Gunakan 'showStatusModal' dan hilangkan kurung kurawal ganda */}
      {showStatusModal && (
        <StatusModal onClose={handleCloseStatusModal} />
      )}
    </div>
  );
};

export default CheckStatusPage;
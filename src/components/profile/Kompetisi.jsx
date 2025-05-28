import { useState } from "react";
import StatusModal from "./StatusModal";

const CompetitionCard = ({
  image,
  title,
  date,
  feeInfo,
  level,
  onCheckStatus,
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col shadow-md h-full">
      <div className="w-full aspect-[4/3] mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      <h3 className="text-base font-bold text-[#17355c] mb-2">{title}</h3>

      {/* ICON 1: Untuk Tanggal - Menggunakan Gambar */}
      <div className="flex items-center text-sm text-[#5e5a5a] mb-1">
        <img
          src="/img/eduevent/img_calendar.svg" // Ganti dengan path ke aset gambar ikon kalender Anda
          alt="Tanggal"
          className="w-4 h-4 mr-2" // Sesuaikan ukuran dan margin sesuai kebutuhan
        />
        <span>{date}</span>
      </div>

      {/* ICON 2: Untuk Informasi Biaya - Menggunakan Gambar */}
      <div className="flex items-center text-sm text-[#5e5a5a] mb-1">
        <img
          src="/img/eduevent/img_usercheck.svg" // Ganti dengan path ke aset gambar ikon centang Anda
          alt="Biaya"
          className="w-4 h-4 mr-2" // Sesuaikan ukuran dan margin sesuai kebutuhan
        />
        <span>{feeInfo}</span>
      </div>

      {/* ICON 3: Untuk Level - Menggunakan Gambar */}
      <div className="flex items-center text-sm text-[#5e5a5a] mb-4">
        <img
          src="/img/eduevent/img_circle.svg" // Ganti dengan path ke aset gambar ikon piala Anda
          alt="Level"
          className="w-4 h-4 mr-2" // Sesuaikan ukuran dan margin sesuai kebutuhan
        />
        <span>{level}</span>
      </div>

      <button
        onClick={onCheckStatus}
        className="mt-auto bg-[#3375cc] text-white text-sm font-semibold py-2 px-4 rounded-lg self-center"
      >
        Cek Status
      </button>
    </div>
  );
};

const SavedCompetitions = () => {
  const [competitions] = useState([
    {
      id: 1,
      image: "/img/profile/kompetisi.png",
      title: "OSPN - Advance Level",
      date: "04 Mei 2025",
      feeInfo: "Gratis tanpa syarat bayar",
      level: "Tingkat Nasional",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleCheckStatus = (id) => {
    console.log(`Checking status for competition ${id}`);
    setShowModal(true);
  };

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5 relative">
      <h2 className="text-2xl font-semibold text-[#17355c] mb-6">
        Kompetisi Tersimpan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {competitions.map((item) => (
          <CompetitionCard
            key={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            feeInfo={item.feeInfo}
            level={item.level}
            onCheckStatus={() => handleCheckStatus(item.id)}
          />
        ))}
      </div>

      {showModal && <StatusModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SavedCompetitions;
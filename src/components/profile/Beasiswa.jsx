import { useState } from "react";

const ScholarshipCard = ({ image, title, description, onViewDetail }) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col shadow-md h-full">
      <div className="h-32 w-full mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-base font-bold text-[#17355c] mb-2">{title}</h3>
      <p className="text-sm text-[#5e5a5a] flex-grow">{description}</p>
      <button
        onClick={onViewDetail}
        className="mt-4 bg-[#3375cc] text-white text-sm font-semibold py-2 px-4 rounded-lg self-center"
      >
        Lihat detail
      </button>
    </div>
  );
};

const SavedScholarships = () => {
  const [scholarships] = useState([
    {
      id: 1,
      title: "Beasiswa Unggulan Kemendikbud",
      description:
        "Beasiswa prestisius dari Kementerian Pendidikan dan Kebudayaan untuk putra-putri terbaik bangsa. Menawarkan pembiayaan penuh bagi mahasiswa S1 hingga S3 yang memiliki prestasi akademik maupun non-akademik.",
      image: "/img/profile/b_ungulan.jpg",
    },
    {
      id: 2,
      title: "Beasiswa LPDP Reguler Dalam Negeri",
      description:
        "Program beasiswa dari Kementerian Keuangan yang membiayai kuliah S2 atau S3 di universitas unggulan Indonesia. Dilengkapi dengan pembinaan kepemimpinan, pengembangan diri, dan jejaring nasional. Ideal untuk kamu yang ingin jadi agen perubahan Indonesia dari dalam negeri.",
      image: "/img/profile/b_LPDP.jpg",
    },
    {
      id: 3,
      title: "Beasiswa Djarum Plus",
      description:
        "Lebih dari sekadar bantuan dana pendidikan! Beasiswa ini memberikan pelatihan soft skill eksklusif seperti public speaking, leadership, dan project management. Dibuka untuk mahasiswa S1 semester 4 dari seluruh perguruan tinggi di Indonesia.",
      image: "/img/profile/b_djarum.jpg",
    },
  ]);

  const handleViewDetail = (id) => {
    console.log(`Viewing details for scholarship ${id}`);
    // Tempatkan navigasi ke detail beasiswa jika diperlukan
  };

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5">
      <h2 className="text-2xl font-semibold text-[#17355c] mb-6">
        Beasiswa Tersimpan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {scholarships.map((item) => (
          <ScholarshipCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            onViewDetail={() => handleViewDetail(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedScholarships;

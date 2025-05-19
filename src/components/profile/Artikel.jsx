import React, { useState } from "react";
import Button from "./ButtonProfile";

const ArticleCard = ({
  author,
  title,
  hoursAgo,
  description,
  image,
  onViewDetail,
}) => {
  return (
    <div className="bg-white rounded-xl p-3 w-[280px] shadow-md flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className="flex-1 pr-2">
          <h3 className="text-sm font-bold font-poppins text-[#333] leading-snug">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            By {author} • {hoursAgo} jam lalu
          </p>
        </div>
        <img
          src={image}
          alt={title}
          className="w-[70px] h-[60px] object-cover rounded-md"
        />
      </div>
      <p className="text-xs text-[#5e5a5a] mt-2">{description}</p>
      <button
        onClick={onViewDetail}
        className="mt-4 bg-[#3375cc] text-white text-sm font-semibold py-2 px-4 rounded-lg self-center"
      >
        Lihat detail
      </button>
    </div>
  );
};

const SavedArticles = () => {
  const [articles] = useState([
    {
      id: 1,
      author: "Khofifah Wulandari",
      title: "Desain UI untuk Aplikasi Edukasi",
      hoursAgo: 2,
      description:
        "Proses dan prinsip desain UI yang ramah pengguna untuk aplikasi edukatif.",
      image: "/img/profile/img_image.png",
    },
    {
      id: 2,
      author: "Budi Santoso",
      title: "Membangun Website dengan HTML & CSS",
      hoursAgo: 5,
      description:
        "Langkah membangun tampilan website yang responsif hanya dengan HTML & CSS.",
      image: "/img/profile/img_image_124x220.png",
    },
    {
      id: 3,
      author: "Sari Anindya",
      title: "Tips Fotografi Outdoor",
      hoursAgo: 8,
      description: "Teknik dasar untuk hasil foto terbaik di luar ruangan.",
      image: "/img/profile/img_image_1.png",
    },
    {
      id: 4,
      author: "Andi Prasetyo",
      title: "Belajar React Dasar",
      hoursAgo: 12,
      description: "Penjelasan dasar tentang component dan state di React.",
      image: "/img/profile/img_image.png",
    },
  ]);

  const handleViewDetail = (id) => {
    console.log(`Viewing details for article ${id}`);
  };

  const handleAddArticle = () => {
    console.log("Menambah artikel baru");
  };

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5">
      <h2 className="text-2xl font-semibold font-poppins text-[#17355c] mb-6">
        Artikel Tersimpan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            author={article.author}
            title={article.title}
            hoursAgo={article.hoursAgo}
            description={article.description}
            image={article.image}
            onViewDetail={() => handleViewDetail(article.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedArticles;

import { useState } from "react";
import { FiUsers, FiBookmark } from "react-icons/fi";
import { BsBookmarkFill } from "react-icons/bs";

const SavedCard = ({
  title,
  name,
  timeAgo,
  categories,
  participants,
  description,
  profileImage,
}) => {
  const [isSaved, setIsSaved] = useState(true);

  const toggleSaved = () => {
    setIsSaved((prev) => !prev);
    console.log(`Status saved untuk "${title}": ${!isSaved}`);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
      {/* Title */}
      <h3 className="text-base font-bold text-[#17355c] mb-3">{title}</h3>

      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Profile section */}
        <div className="flex items-start">
          <img
            src={profileImage}
            alt={name}
            className="w-10 h-10 object-cover rounded-md mr-3"
          />
          <div>
            <p className="text-sm font-semibold text-[#17355c]">{name}</p>
            <p className="text-xs text-gray-500">{timeAgo} yang lalu</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Participants & Description */}
      <div className="mt-2 ml-[0px]">
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <FiUsers className="mr-1" />
          {participants} peserta
        </div>
        <p className="text-sm text-[#5e5a5a] mb-3">{description}</p>

        {/* Saved Icon */}
        <div className="flex justify-start">
          <button
            onClick={toggleSaved}
            className="bg-orange-100 p-2 rounded-full hover:bg-orange-200 transition-colors"
            aria-label="Toggle Save"
          >
            {isSaved ? (
              <BsBookmarkFill className="text-orange-500 text-lg" />
            ) : (
              <FiBookmark className="text-orange-500 text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const SavedCommunity = () => {
  const savedData = [
    {
      id: 2,
      title: "Forum Teman Belajar",
      name: "Rangga Wolf",
      timeAgo: "6 jam",
      categories: ["Computer", "Finance"],
      participants: 100,
      description:
        "Hi Guys! Selamat datang di Forum Teman Belajar — tempat buat kalian yang mau belajar bareng, saling bantu ngerti materi, tukar tips produktif, dan cari teman seperjuangan biar perjalanan akademik jadi lebih seru dan nggak sendirian!",
      profileImage: "/img/profile/k_rangga.png",
    },
  ];

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5">
      <h2 className="text-2xl font-semibold text-[#17355c] mb-6">
        Komunitas Tersimpan
      </h2>

      <div>
        {savedData.map((item) => (
          <SavedCard
            key={item.id}
            name={item.name}
            timeAgo={item.timeAgo}
            title={item.title}
            categories={item.categories}
            participants={item.participants}
            description={item.description}
            profileImage={item.profileImage}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedCommunity;

import { FiUsers } from "react-icons/fi";

const ForumCard = ({
  title,
  name,
  timeAgo,
  categories,
  participants,
  description,
  profileImage,
}) => {
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
      <div className="mt-2 pl-13 sm:pl-[0px]">
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <FiUsers className="mr-1" />
          {participants} peserta
        </div>
        <p className="text-sm text-[#5e5a5a]">{description}</p>
      </div>
    </div>
  );
};

const ForumCommunity = () => {
  const forumData = [
    {
      id: 1,
      title: "Forum Pencarian Peluang",
      name: "Rani Oktaviani",
      timeAgo: "6 jam",
      categories: ["Data Science", "Accounting"],
      participants: 86,
      description:
        "Hi guys! Selamat datang di Forum Pencarian Peluang — tempat kamu bisa berbagi dan menemukan info terbaru seputar beasiswa, magang, pelatihan, hingga program pengembangan diri. Di sini, kita saling bantu buka jalan menuju masa depan yang lebih cerah. Yuk, jangan lewatkan peluang emas yang mungkin sedang dicari orang lain juga!",
      profileImage: "/img/profile/k_rani.png",
    },
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
        Komunitas Ditambahkan
      </h2>

      <div>
        {forumData.map((item) => (
          <ForumCard
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

export default ForumCommunity;

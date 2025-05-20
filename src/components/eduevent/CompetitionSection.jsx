import { useState } from "react";
import EdueventCard from "./EdueventCard";
import EdueventButton from "./EdueventBtn";

const CompetitionSection = () => {
  const [activeYear, setActiveYear] = useState("2025");
  const [activePeriod, setActivePeriod] = useState("jan-mar");

  const periods = [
    { id: "jan-mar", label: "Jan-Mar", count: 0 },
    { id: "apr-jun", label: "apr-jun", count: 0 },
    { id: "jul-sep", label: "jul-sep", count: 0 },
    { id: "nov-des", label: "Nov-Des", count: 0 },
  ];

  const competitions = [
    {
      id: 1,
      image: "/img/eduevent/img_infinibee60600x800.png",
      title: "OSPN - Advance Level",
      date: "04 mei 2025",
      isFree: true,
      level: "nasional",
    },
    {
      id: 2,
      image: "/img/eduevent/img_infinibee60600x800_248x203.png",
      title: "OSPN - Advance Level",
      date: "04 mei 2025",
      isFree: true,
      level: "nasional",
    },
    {
      id: 3,
      image: "/img/eduevent/img_infinibee60600x800_248x209.png",
      title: "OSPN - Advance Level",
      date: "04 mei 2025",
      isFree: true,
      level: "nasional",
    },
    {
      id: 4,
      image: "/img/eduevent/img_infinibee60600x800_248x209.png",
      title: "OSPN - Advance Level",
      date: "04 mei 2025",
      isFree: true,
      level: "nasional",
    },
    {
      id: 5,
      image: "/img/eduevent/img_infinibee60600x800_248x209.png",
      title: "OSPN - Advance Level",
      date: "04 mei 2025",
      isFree: true,
      level: "nasional",
    },
  ];

  return (
    <section className="bg-[#ebf1fa] py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center mb-8">
          <img
            src="/img/eduevent/img_ellipse_1.png"
            alt="Competition Icon"
            className="w-[50px] h-[50px] rounded-full mr-4"
          />
          <h2 className="font-poppins font-bold text-[24px] text-black">
            Daftar Kompetisi
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Year Filter */}
          <div className="bg-white rounded-lg px-4 py-2 flex items-center justify-between w-[93px] h-[40px]">
            <span className="font-poppins font-bold text-[16px] text-black">
              {activeYear}
            </span>
            <img
              src="/img/eduevent/img_chevronright.svg"
              alt="Dropdown"
              className="w-[21px] h-[24px]"
            />
          </div>

          {/* Period Filters */}
          <div className="flex flex-wrap gap-4">
            {periods.map((period) => (
              <div
                key={period.id}
                onClick={() => setActivePeriod(period.id)}
                className={`
                  bg-white rounded-lg px-6 py-2 flex items-center h-[40px] w-[273px]
                  ${activePeriod === period.id ? "border border-black" : ""}
                  cursor-pointer
                `}
              >
                <span className="font-poppins text-[18px] text-[#575858] mr-4">
                  {period.label}
                </span>
                <div className="h-[25px] w-[1px] bg-black mx-4"></div>
                <span className="font-poppins text-[12px] text-black">
                  {period.count} Rekaman
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitions.map((competition) => (
            <EdueventCard
              key={competition.id}
              type="competition"
              image={competition.image}
              title={competition.title}
              date={competition.date}
              isFree={competition.isFree}
              level={competition.level}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-end mt-12">
          <EdueventButton
            variant="primary"
            className="w-[295px] h-[40px] flex items-center justify-center"
          >
            Selengkapnya
          </EdueventButton>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;

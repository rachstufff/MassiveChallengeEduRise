import { useState } from "react";
import Card from "../eduevent/EdueventCard";
import Button from "../eduevent/EdueventBtn";
import EdueventButton from "../eduevent/EdueventBtn";

const WebinarSection = () => {
  const [activeYear, setActiveYear] = useState("2025");
  const [activePeriod, setActivePeriod] = useState("jan-mar");

  const periods = [
    { id: "jan-mar", label: "Jan-Mar", count: 0 },
    { id: "apr-jun", label: "apr-jun", count: 0 },
    { id: "jul-sep", label: "jul-sep", count: 0 },
    { id: "nov-des", label: "Nov-Des", count: 0 },
  ];

  const webinars = [
    {
      id: 1,
      image: "/img/eduevent/img_rectangle_8732.png",
      title: "Rahasia mendapatkan beasiswa impian",
      date: "20 Maret 2025",
    },
    {
      id: 2,
      image: "/img/eduevent/img_final_prensent_1_1.png",
      title: "Rahasia mendapatkan beasiswa impian",
      date: "20 Maret 2025",
    },
    {
      id: 3,
      image: "/img/eduevent/img_final_prensent_1_1_261x199.png",
      title: "Rahasia mendapatkan beasiswa impian",
      date: "20 Maret 2025",
    },
    {
      id: 4,
      image: "/img/eduevent/img_final_prensent_1_1_1.png",
      title: "Rahasia mendapatkan beasiswa impian",
      date: "20 Maret 2025",
    },
    {
      id: 5,
      image: "/img/eduevent/img_final_prensent_1_1_1.png",
      title: "Rahasia mendapatkan beasiswa impian",
      date: "20 Maret 2025",
    },
  ];

  return (
    <section className="bg-[#ebf1fa] py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center mb-8">
          <img
            src="/img/eduevent/img_ellipse_1.png"
            alt="Webinar Icon"
            className="w-[50px] h-[50px] rounded-full mr-4"
          />
          <h2 className="font-poppins font-bold text-[24px] text-black">
            Web Binar
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

        {/* Webinar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webinars.map((webinar) => (
            <Card
              key={webinar.id}
              type="webinar"
              image={webinar.image}
              title={webinar.title}
              date={webinar.date}
              buttonText="Daftar Sekarang"
              buttonVariant="secondary"
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

export default WebinarSection;

import posterWeb from "/img/eduacademy/posterweb.png";
import WebinarCard from "./WebinarCard";

const FeaturedWebinar = () => {
  const webinars = [
    {
      id: 1,
      image: posterWeb,
      date: "Rabu, 02 June 2025",
      time: "09:00 - 10:30 AM",
      title: "AI at Work: Menjadi Profesional Adaptif di Era Cerdas",
      speaker: "Kurt Cobains",
    },
    {
      id: 2,
      image: posterWeb,
      date: "Rabu, 02 June 2025",
      time: "09:00 - 10:30 AM",
      title: "AI at Work: Menjadi Profesional Adaptif di Era Cerdas",
      speaker: "Kurt Cobains",
    },
    {
      id: 3,
      image: posterWeb,
      date: "Rabu, 02 June 2025",
      time: "09:00 - 10:30 AM",
      title: "AI at Work: Menjadi Profesional Adaptif di Era Cerdas",
      speaker: "Kurt Cobains",
    },
    {
      id: 4,
      image: posterWeb,
      date: "Rabu, 02 June 2025",
      time: "09:00 - 10:30 AM",
      title: "AI at Work: Menjadi Profesional Adaptif di Era Cerdas",
      speaker: "Kurt Cobains",
    },
  ];

  return (
    <section id="more2" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-2">
        <span class="text-[#1F467A]">Featured</span>{" "}
        <span className="text-[#DDA853]">webinar</span>
      </h2>
      <p className="text-center text-lg text-gray-500 font-semiregular mb-3">
        Belajar langsung dari para ahli dan alumni penerima <br />{" "}
        <span>beasiswa!</span>
      </p>
      <br /> <br /> <br />
      {/* Grid start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
        {webinars.map((webinar) => (
          <WebinarCard key={webinar.id} webinar={webinar} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWebinar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/scholarshiphub/Card";
import PopupDetail from "../../components/scholarshiphub/PopupDetail";
import PopupFilter from "../../components/scholarshiphub/PopupFilter";
import PopupSaved from "../../components/scholarshiphub/PopupSaved";
import cards from "../../data/cards";

const ScholarshipHub = () => {
  const [filter, setFilter] = useState({
    kategori: "",
    jenjang: "",
    lokasi: "",
    deadline: "",
  });
  const [popupOpen, setPopupOpen] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [saved, setSaved] = useState(false);

  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setPopupOpen(true);
    setSaved(false);
  };

  const filteredData = cards.filter((item) => {
    return (
      (!filter.kategori || item.kategori === filter.kategori) &&
      (!filter.jenjang || item.jenjang === filter.jenjang) &&
      (!filter.lokasi || item.lokasi === filter.lokasi) &&
      (!filter.deadline || item.deadline === filter.deadline)
    );
  });

  return (
    <>
      <Header />
      <main className="px-6 py-10">
        {/* Banner */}
        <section className="mb-10">
          <img
            src="/img/scholarshiphub/MainBanner.png"
            alt="Banner Beasiswa"
            className="w-full object-cover"
          />
        </section>

        {/* Daftar Beasiswa */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-screen-xl mx-auto items-stretch">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Card key={index} {...item} onClick={handleCardClick} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Tidak ada beasiswa yang cocok dengan filter.
            </p>
          )}
        </section>

        {/* Rekomendasi CTA */}
        <section className="text-center mt-12">
          <h1 className="text-2xl font-bold mb-4">Kamu Masih Bingung?</h1>
          <button
            className="px-6 py-3 bg-[#3375CC] hover:bg-[#295ea3] text-white font-semibold rounded transition-colors"
            onClick={() => setShowFilterPopup(true)}
          >
            Cari Rekomendasi
          </button>
        </section>

        <PopupDetail
          show={popupOpen}
          onClose={() => setPopupOpen(false)}
          data={selectedCard}
          saved={false}
          onSave={() => {
            setSaved(true);
            setPopupOpen(false);
          }}
        />

        <PopupSaved show={saved} onClose={() => setSaved(false)} />

        <PopupFilter
          show={showFilterPopup}
          onClose={() => setShowFilterPopup(false)}
          onFilter={(data) => {
            setShowFilterPopup(false);
            navigate("/scholarshiphub/rekomendasi", { state: data });
          }}
        />
      </main>
      <Footer />
    </>
  );
};

export default ScholarshipHub;

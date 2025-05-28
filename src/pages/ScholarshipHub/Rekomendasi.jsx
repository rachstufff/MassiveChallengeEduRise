import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/scholarshiphub/Card";
import PopupDetail from "../../components/scholarshiphub/PopupDetail";
import PopupSaved from "../../components/scholarshiphub/PopupSaved";
import cards from "../../data/cards";

const Rekomendasi = () => {
  const location = useLocation();
  const incomingFilters = location.state || {
    kategori: "",
    jenjang: "",
    lokasi: "",
    deadline: "",
  };

  const [filters, setFilters] = useState(incomingFilters);
  const [selectedCard, setSelectedCard] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setPopupOpen(true);
  };

  const handleSave = () => {
    setPopupOpen(false);
    setSaved(true);
  };

  const filteredCards = cards.filter((card) => {
    return (
      (!filters.kategori || card.kategori === filters.kategori) &&
      (!filters.jenjang || card.jenjang === filters.jenjang) &&
      (!filters.lokasi || card.lokasi === filters.lokasi) &&
      (!filters.deadline || card.deadline === filters.deadline)
    );
  });

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [saved]);

  return (
    <>
      <Header />
      <main className="px-6 py-10">
        <section className="mb-6">
          <img
            src="/img/scholarshiphub/Banner.png"
            alt="Banner Beasiswa"
            className="w-full object-cover"
          />
        </section>

        <section className="mb-6">
          <a
            href="/scholarshiphub"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3375CC] hover:bg-[#295ea3] text-white text-sm font-semibold rounded"
          >
            <i className="fa-solid fa-arrow-left"></i> Kembali
          </a>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
          {filteredCards.length > 0 ? (
            filteredCards.map((item, i) => (
              <Card key={i} {...item} onClick={handleCardClick} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Tidak ada program yang sesuai dengan filter.
            </p>
          )}
        </section>

        <PopupDetail
          show={popupOpen}
          onClose={() => setPopupOpen(false)}
          data={selectedCard}
          saved={false}
          onSave={handleSave}
        />
        <PopupSaved show={saved} onClose={() => setSaved(false)} />
      </main>
      <Footer />
    </>
  );
};

export default Rekomendasi;

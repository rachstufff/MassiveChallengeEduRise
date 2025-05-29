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
      <main>
        <section
          className="h-[450px] flex items-stretch"
          style={{ background: "linear-gradient(to right, #0d1d33, #265899)" }}
        >
          <div className="max-w-6xl mx-auto px-4 w-full flex items-stretch">
            {/* Teks kiri */}
            <div className="flex-1 flex flex-col justify-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Rekomendasi{" "}
                <span className="text-[#dda853] italic">Beasiswa</span>
                <br />
                Untuk Anda!
              </h1>
            </div>

            {/* Gambar kanan */}
            <div className="flex-1 flex items-end justify-center md:justify-end">
              <img
                src="/img/scholarshiphub/Banner.png"
                alt="Rekomendasi Beasiswa"
                className="max-h-full object-contain self-end w-full max-w-sm"
              />
            </div>
          </div>
        </section>

        <section className="mt-12 mb-12 ml-8">
          <a
            href="/scholarshiphub"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3375CC] hover:bg-[#295ea3] text-white text-sm font-semibold rounded"
          >
            <i className="fa-solid fa-arrow-left"></i> Kembali
          </a>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full px-8 mb-20">
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

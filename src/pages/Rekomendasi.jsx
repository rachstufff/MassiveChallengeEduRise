import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/scholarshiphub/Card";
import PopupDetail from "../components/scholarshiphub/PopupDetail";
import PopupSaved from "../components/scholarshiphub/PopupSaved";
import cards from "../data/cards";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

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

  // Auto-close popup tersimpan
  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [saved]);

  return (
    <main>
      {/* Banner Header */}
      <section className="banner">
        <img src="/img/scholarshiphub/Banner.png" alt="Banner Beasiswa" />
      </section>

      {/* Tombol kembali */}
      <section className="back-btn">
        <a href="/scholarshiphub" className="back-button">
          <i className="fa-solid fa-arrow-left"></i> Kembali
        </a>
      </section>

      {/* Hasil Rekomendasi */}
      <section className="content" style={{ marginTop: "40px" }}>
        {filteredCards.length > 0 ? (
          filteredCards.map((item, i) => (
            <Card
              key={i}
              img={item.img}
              title={item.title}
              description={item.summary}
              detail={item.detail}
              jenjang={item.jenjang}
              lokasi={item.lokasi}
              deadline={item.deadline}
              onClick={handleCardClick}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
            Tidak ada program yang sesuai dengan filter.
          </p>
        )}
      </section>

      {/* Popup Detail */}
      <PopupDetail
        show={popupOpen}
        onClose={() => setPopupOpen(false)}
        data={selectedCard}
        saved={false}
        onSave={handleSave}
      />

      {/* Popup Tersimpan */}
      <PopupSaved show={saved} onClose={() => setSaved(false)} />
    </main>
  );
};

export default Rekomendasi;

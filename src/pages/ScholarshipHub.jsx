import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import PopupDetail from "../components/PopupDetail";
import PopupFilter from "../components/PopupFilter";
import PopupSaved from "../components/PopupSaved";
import cards from "../data/cards";

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

  const handleSave = () => {
    setSaved(true);
  };

  const filteredData = cards.filter((item) => {
    const matchKategori = filter.kategori
      ? item.kategori === filter.kategori
      : true;
    const matchJenjang = filter.jenjang
      ? item.jenjang === filter.jenjang
      : true;
    const matchLokasi = filter.lokasi ? item.lokasi === filter.lokasi : true;
    const matchDeadline = filter.deadline
      ? item.deadline === filter.deadline
      : true;
    return matchKategori && matchJenjang && matchLokasi && matchDeadline;
  });

  return (
    <main>
      {/* Banner Header */}
      <section className="banner">
        <img src="/img/MainBanner.png" alt="Banner Beasiswa" />
      </section>

      {/* Daftar Beasiswa */}
      <section className="content" style={{ marginTop: "48px" }}>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
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
            Tidak ada beasiswa yang cocok dengan filter.
          </p>
        )}
      </section>

      {/* CTA Rekomendasi */}
      <section className="recommended">
        <div className="recommended-title">
          <h1>Kamu Masih Bingung?</h1>
        </div>
        <button className="btn" onClick={() => setShowFilterPopup(true)}>
          Cari Rekomendasi
        </button>
      </section>

      {/* Popup Detail */}
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

      {/* Popup Tersimpan */}
      <PopupSaved show={saved} onClose={() => setSaved(false)} />

      {/* Popup Filter → langsung navigasi ke halaman rekomendasi */}
      <PopupFilter
        show={showFilterPopup}
        onClose={() => setShowFilterPopup(false)}
        onFilter={(data) => {
          setShowFilterPopup(false);
          navigate("/scholarshiphub/rekomendasi", { state: data });
        }}
      />
    </main>
  );
};

export default ScholarshipHub;

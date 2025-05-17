import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card"; 
import PopupDetail from "../components/PopupDetail";
import PopupSaved from "../components/PopupSaved";
import cards from "../data/cards";

const Rekomendasi = () => {
  const location = useLocation();
  const incomingFilters = location.state || {
    kategori: "",
    jenjang: "",
    lokasi: "",
    deadline: ""
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
      {/* Tombol kembali */}
      <section className="back-btn">
        <a href="/" className="back-button">
          <i className="fa-solid fa-arrow-left"></i> Kembali
        </a>
      </section>

      {/* Header */}
      <section className="recommended" style={{ marginTop: "-24px" }}>
        <div className="recommended-title">
          <h1>Rekomendasi Beasiswa Untuk Anda!</h1>
          <p style={{ color: "#666", maxWidth: "640px", margin: "0 auto" }}>
            Hasil beasiswa yang cocok dengan kriteria Anda akan muncul di bawah ini. Anda dapat menyesuaikan filter untuk hasil yang lebih spesifik.
          </p>
        </div>
      </section>

      {/* Form Filter */}
      <div className="filter-card" style={{ margin: "40px auto", background: "#fff", boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}>
        <h2>Filter Rekomendasi</h2>

        <label>Kategori</label>
        <select name="kategori" onChange={handleChange} className="form-input" value={filters.kategori}>
          <option value="">Semua</option>
          <option value="Beasiswa">Beasiswa</option>
          <option value="Pelatihan">Pelatihan</option>
        </select>

        <label>Jenjang</label>
        <select name="jenjang" onChange={handleChange} className="form-input" value={filters.jenjang}>
          <option value="">Semua</option>
          <option value="D3">D3</option>
          <option value="S1">S1</option>
          <option value="S2">S2</option>
          <option value="S3">S3</option>
        </select>

        <label>Lokasi</label>
        <select name="lokasi" onChange={handleChange} className="form-input" value={filters.lokasi}>
          <option value="">Semua</option>
          <option value="DKI Jakarta">DKI Jakarta</option>
          <option value="Jawa Barat">Jawa Barat</option>
          <option value="Jawa Timur">Jawa Timur</option>
        </select>

        <label>Deadline</label>
        <select name="deadline" onChange={handleChange} className="form-input" value={filters.deadline}>
          <option value="">Semua</option>
          <option value="September 2025">September 2025</option>
          <option value="Oktober 2025">Oktober 2025</option>
        </select>
      </div>

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
      <PopupSaved
        show={saved}
        onClose={() => setSaved(false)}
      />
    </main>
  );
};

export default Rekomendasi;

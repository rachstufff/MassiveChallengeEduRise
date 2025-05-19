import { useState } from "react";

const PopupFilter = ({ show, onClose, onFilter }) => {
  const [formData, setFormData] = useState({
    kategori: "",
    jenjang: "",
    lokasi: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(formData);
    onClose();
  };

return (
  <div className={`popup-overlay ${show ? "show" : ""}`} onClick={(e) => e.target.classList.contains("popup-overlay") && onClose()}>

      <div className="popup-card filter-card">
        <h2>Rekomendasi berdasarkan filter</h2>
        <form onSubmit={handleSubmit} className="popup-form">
            <label>
            Kategori
            <select
                name="kategori"
                className="form-input"
                value={formData.kategori}
                onChange={handleChange}
            >
                <option value="">Pilih Kategori</option>
                <option value="Beasiswa">Beasiswa</option>
                <option value="Pelatihan">Pelatihan</option>
            </select>
            </label>


          <label>
            Jenjang Pendidikan
            <select
              name="jenjang"
              className="form-input"
              value={formData.jenjang}
              onChange={handleChange}
            >
            <option value="">Pilih Jenjang</option>
              <option value="D3">D3</option>
              <option value="S1">S1/D4</option>
              <option value="S2">S2</option>
            </select>
          </label>

          <label>
            Lokasi
            <select
              name="lokasi"
              className="form-input"
              value={formData.lokasi}
              onChange={handleChange}
            >
              <option value="">Pilih Lokasi</option>
              <option value="DKI Jakarta">DKI Jakarta</option>
              <option value="Jawa Barat">Jawa Barat</option>
              <option value="Jawa Timur">Jawa Timur</option>
            </select>
          </label>

          <label>
            Deadline
            <select
              name="deadline"
              className="form-input"
              value={formData.deadline}
              onChange={handleChange}
            >
              <option value="">Pilih Deadline</option>
              <option value="September 2025">September 2025</option>
              <option value="Oktober 2025">Oktober 2025</option>
            </select>
          </label>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
            <button type="submit" className="btn">Cari Rekomendasi</button>
            <button type="button" className="btn cancel" onClick={onClose}>Tutup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupFilter;

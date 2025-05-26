import { useState } from "react";

const PopupFilter = ({ show, onClose, onFilter }) => {
  const [formData, setFormData] = useState({
    kategori: "",
    jenjang: "",
    lokasi: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(formData);
    onClose();
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target.classList.contains("popup-overlay") && onClose()}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">
          Rekomendasi berdasarkan filter
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <select
              name="kategori"
              value={formData.kategori}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Pilih Kategori</option>
              <option value="Beasiswa">Beasiswa</option>
              <option value="Pelatihan">Pelatihan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Jenjang Pendidikan
            </label>
            <select
              name="jenjang"
              value={formData.jenjang}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Pilih Jenjang</option>
              <option value="D3">D3</option>
              <option value="S1">S1/D4</option>
              <option value="S2">S2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Lokasi</label>
            <select
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Pilih Lokasi</option>
              <option value="DKI Jakarta">DKI Jakarta</option>
              <option value="Jawa Barat">Jawa Barat</option>
              <option value="Jawa Timur">Jawa Timur</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <select
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Pilih Deadline</option>
              <option value="September 2025">September 2025</option>
              <option value="Oktober 2025">Oktober 2025</option>
            </select>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Cari Rekomendasi
            </button>
            <button
              type="button"
              className="btn bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Tutup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupFilter;

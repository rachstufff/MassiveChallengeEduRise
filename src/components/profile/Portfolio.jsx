import { useState } from "react";
import Button from "./ButtonProfile";

const PortfolioCard = ({ title, description, fileName, onViewDetail }) => {
  return (
    <div className="bg-white rounded-2xl p-4 w-[253px] flex flex-col shadow-md">
      <div className="h-[124px] mb-2 flex items-center justify-center border bg-gray-50 text-center text-xs text-gray-500">
        {fileName || "Tidak ada file diunggah"}
      </div>
      <h3 className="text-base font-bold font-poppins text-[#333333] text-center mb-1">
        {title}
      </h3>
      <p className="text-xs font-normal font-poppins text-[#5e5a5a] flex-grow whitespace-pre-wrap">
        {description}
      </p>
      <Button
        onClick={onViewDetail}
        className="bg-[#3375cc] text-white font-semibold py-[6px] px-3 rounded-md text-sm w-fit self-center mt-3"
      >
        Lihat Detail
      </Button>
    </div>
  );
};

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [newPortfolio, setNewPortfolio] = useState({
    title: "",
    tools: "",
    year: "",
    description: "",
    file: null,
    fileName: "",
  });

  const resetForm = () => {
    setNewPortfolio({
      title: "",
      tools: "",
      year: "",
      description: "",
      file: null,
      fileName: "",
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleAddPortfolio = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEditPortfolio = (portfolio) => {
    setNewPortfolio({
      title: portfolio.title,
      tools: portfolio.tools || "",
      year: portfolio.year || "",
      description: portfolio.description.replace(
        `${portfolio.tools || ""} - ${portfolio.year || ""}\n`,
        ""
      ),
      file: null,
      fileName: portfolio.fileName || "",
    });
    setEditingId(portfolio.id);
    setShowForm(true);
    setSelectedPortfolio(null);
  };

  const handleDeletePortfolio = (id) => {
    setPortfolios((prev) => prev.filter((p) => p.id !== id));
    setSelectedPortfolio(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setNewPortfolio((prev) => ({
        ...prev,
        file: files[0],
        fileName: files[0].name,
      }));
    } else {
      setNewPortfolio((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedDescription = `${newPortfolio.tools} - ${newPortfolio.year}\n${newPortfolio.description}`;

    const newEntry = {
      id: editingId || Date.now(),
      title: newPortfolio.title,
      description: combinedDescription,
      fileName: newPortfolio.fileName,
      tools: newPortfolio.tools,
      year: newPortfolio.year,
    };

    if (editingId) {
      setPortfolios((prev) =>
        prev.map((p) => (p.id === editingId ? newEntry : p))
      );
    } else {
      setPortfolios((prev) => [...prev, newEntry]);
    }

    resetForm();
  };

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5 relative">
      <h2 className="text-2xl font-semibold font-poppins text-[#17355c] mb-6">
        CV dan Portofolio
      </h2>

      {/* DETAIL MODAL */}
      {selectedPortfolio && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[350px] relative">
            <button
              onClick={() => setSelectedPortfolio(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-2">
              {selectedPortfolio.title}
            </h3>
            <p className="text-sm mb-2 whitespace-pre-wrap">
              {selectedPortfolio.description}
            </p>
            {selectedPortfolio.fileName && (
              <p className="text-xs text-gray-500 mb-4">
                File: {selectedPortfolio.fileName}
              </p>
            )}
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => handleEditPortfolio(selectedPortfolio)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDeletePortfolio(selectedPortfolio.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Hapus
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 relative bg-gray-50 p-4 rounded-md"
        >
          <button
            type="button"
            onClick={resetForm}
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          >
            &times;
          </button>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Judul:
            </label>
            <input
              type="text"
              name="title"
              value={newPortfolio.title}
              onChange={handleChange}
              className="mt-1 block w-full border px-3 py-2 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tools/Teknologi:
            </label>
            <input
              type="text"
              name="tools"
              value={newPortfolio.tools}
              onChange={handleChange}
              className="mt-1 block w-full border px-3 py-2 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tahun:
            </label>
            <input
              type="text"
              name="year"
              value={newPortfolio.year}
              onChange={handleChange}
              className="mt-1 block w-full border px-3 py-2 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deskripsi:
            </label>
            <textarea
              name="description"
              value={newPortfolio.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border px-3 py-2 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Unggah File:
            </label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="mt-1 text-sm"
            />
            {newPortfolio.fileName && (
              <p className="text-xs text-gray-500 mt-1">
                File: {newPortfolio.fileName}
              </p>
            )}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              type="submit"
              className="bg-[#0BAB5E] text-white font-bold py-2 px-4 rounded-lg"
            >
              {editingId ? "Perbarui" : "Simpan"}
            </Button>
          </div>
        </form>
      )}

      {/* LIST */}
      {!showForm && (
        <>
          <div className="flex flex-wrap gap-6">
            {portfolios.map((portfolio) => (
              <PortfolioCard
                key={portfolio.id}
                title={portfolio.title}
                description={portfolio.description}
                fileName={portfolio.fileName}
                onViewDetail={() => setSelectedPortfolio(portfolio)}
              />
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <Button
              onClick={handleAddPortfolio}
              className="bg-[#3375cc] text-white font-bold py-2 px-4 rounded-lg"
            >
              Tambah
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
export default Portfolio;

const PopupDetail = ({ show, onClose, data, saved, onSave }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 ${
        show ? "block" : "hidden"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh] w-full max-w-xl p-6 relative ${
          saved ? "text-center" : "text-left"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {saved ? (
          <>
            <h2 className="text-xl font-bold mb-4">
              Program Berhasil Tersimpan!
            </h2>
            <button
              className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={onClose}
            >
              Tutup
            </button>
          </>
        ) : (
          <>
            <img
              src={data.img}
              alt={data.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-4">{data.title}</h2>
            <p className="text-sm text-gray-700 whitespace-pre-line mb-6">
              {data.detail}
            </p>
            <div className="flex gap-4">
              <button
                className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={onSave}
              >
                Simpan
              </button>
              <a
                href="#"
                className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Diskusi Komunitas
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupDetail;

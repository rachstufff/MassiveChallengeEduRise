const PopupSaved = ({ show, onClose }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  return (
    <div className={`popup-overlay ${show ? "show" : ""}`} onClick={handleOverlayClick}>
      <div className="popup-card saved">
        <h2>Program Berhasil Tersimpan!</h2>
        <button className="btn" onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default PopupSaved;

const PopupDetail = ({ show, onClose, data, saved, onSave }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  return (
    <div className={`popup-overlay ${show ? "show" : ""}`} onClick={handleOverlayClick}>
      <div className={`popup-card ${saved ? "saved" : ""}`}>
        {saved ? (
          <>
            <h2 className="saved-title">Program Berhasil Tersimpan!</h2>
            <button className="btn" onClick={onClose}>Tutup</button>
          </>
        ) : (
          <>
            <img src={data.img} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.detail}</p>
            <div className="popup-actions">
              <button className="btn" onClick={onSave}>Simpan</button>
              <a className="btn" href="#">Diskusi Komunitas</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupDetail;

import { Link } from "react-router-dom";
function TungguHasil() {
  return (
    <main className="main-section">
      <img
        src="/img/edupreptools/icon_tunggusubmit.png"
        alt="Submit Success"
        className="check-image"
      />
      <h1>
        <span className="blue-text">Submit Anda</span>
        <span className="gold-text"> Telah Berhasil</span>
      </h1>
      <br />
      <p>
        Feedback akan dikirimkan maksimal dalam waktu 1 x 24 jam.
        <br />
        Silakan cek secara berkala pada halaman ini.
      </p>
      <Link to="/lihat-hasil" className="btn">
        Kembali
      </Link>
    </main>
  );
}

export default TungguHasil;

import "../EduprepTools/styles/lihat-hasil.css";
import { Link } from "react-router-dom";
function LihatHasil() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h1 className="hero-title">
          <span>Tulis Esaimu</span>
          <span className="accent"> dengan Percaya Diri</span>
          <br />
          <span>Kami Siap Membantu</span>
          <span className="accent"> Menyempurnakannya!</span>
        </h1>
        <p className="hero-description">
          Mulailah menulis tanpa ragu. Gunakan editor di bawah ini untuk
          menuangkan ide, dan dapatkan bantuan penulisan atau penyuntingan untuk
          hasil esai terbaikmu.
        </p>
      </section>

      <section className="editor-container">
        <div className="editor-header">
          <img src="/img/edupreptools/icon_editor.png" alt="Editor Icon" />
          <h2>Essay Text Editor</h2>
        </div>
        <div className="text-editor">Sedang melakukan ulasan...</div>
        <Link to="/hasil-feedback" className="submit-btn">
          Lihat Hasil
        </Link>
      </section>
    </main>
  );
}

export default LihatHasil;

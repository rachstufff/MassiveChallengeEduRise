function HasilFeedback() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hasil Feedback Essay Kamu</h1>
          <p className="hero-subtitle">
            Lihat rangkuman skor dan detail penilaian
          </p>
        </div>
        <img
          src="/img/edupreptools/page7_gambar.png"
          alt="Essay Writing"
          className="hero-image"
        />
      </section>

      {/* Main Content */}
      <div className="content-container">
        {/* Score Summary */}
        <h2 className="section-title">
          Ringkasan <span>Skor Utama</span>
        </h2>
        <div className="score-summary">
          <p className="score-label">Total Skor</p>
          <p className="score-value">82 / 100</p>
        </div>

        {/* Score Details */}
        <h2 className="section-title">
          Hasil <span>Penilaian</span>
        </h2>
        <div className="score-details">
          {/* Card 1 */}
          <div className="score-card">
            <div className="score-icon">
              <img
                src="/img/edupreptools/icon_struktur.png"
                alt="Icon Setruktur dan Alur"
              />
            </div>
            <div className="score-content">
              <h3>Struktur & Alur</h3>
              <p>Alur cerita rapi, ada pembukaan & penutup</p>
              <span className="score-badge">18/20</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="score-card">
            <div className="score-icon">
              <img
                src="/img/edupreptools/icon_kesesuaian.png"
                alt="Icon Kesesuaian Topik"
              />
            </div>
            <div className="score-content">
              <h3>Kesesuaian Topik</h3>
              <p>Sudah menjawab, bisa lebih fokus</p>
              <span className="score-badge">15/20</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="score-card">
            <div className="score-icon">
              <img
                src="/img/edupreptools/icon_grammar.png"
                alt="Icon Bahasa & Grammar"
              />
            </div>
            <div className="score-content">
              <h3>Bahasa & Grammar</h3>
              <p>Masih ada beberapa kesalahan ejaan</p>
              <span className="score-badge">16/20</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="score-card">
            <div className="score-icon">
              <img
                src="/img/edupreptools/icon_gayabahasa.png"
                alt="Icon Gaya Bahasa & Keunikan"
              />
            </div>
            <div className="score-content">
              <h3>Gaya Bahasa & Keunikan</h3>
              <p>Sudah cukup personal dan menarik</p>
              <span className="score-badge">17/20</span>
            </div>
          </div>

          {/* Card 5 - Full Width */}
          <div className="score-card score-card-full">
            <div className="score-icon">
              <img
                src="/img/edupreptools/icon_ketepatan.png"
                alt="Icon Ketepatan Panjang Essay"
              />
            </div>
            <div className="score-content">
              <h3>Ketepatan Panjang Esai</h3>
              <p>Panjang pas, tidak terlalu bertele-tele</p>
              <span className="score-badge">18/20</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HasilFeedback;

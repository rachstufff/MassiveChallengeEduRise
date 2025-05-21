import React from "react";
import "./stylepages.css";
import HeaderBefore from "../components/HeaderBefore";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const LandingBefore = () => {
  return (
    <>
      <HeaderBefore />
      <main>
        <section className="hero-section">
          <div className="hero-container">
            <div className="row g-0">
              {/* Left side: Text and Search */}
              <div className="col-lg-6 hero-text-container">
                <div className="hero-content">
                  <h1 className="hero-brand">
                    <span className="text-primary fst-italic">EDU</span>
                    <span className="text-warning fst-italic">RISE</span>
                  </h1>
                  <div className="hero-heading">
                    <p className="mb-0">
                      Platform Informasi, Edukasi Seputar Beasiswa
                    </p>
                    <p>Terhandal di Indonesia</p>
                  </div>
                  <p className="hero-description">
                    <span className="fw-bold">EDURISE</span> merupakan platform
                    online yang dirancang khusus untuk pencari beasiswa
                    Indonesia dalam mengakses peluang pendidikan pelatihan, dan
                    pengembangan diri secara mudah dan terpercaya.
                  </p>
                  <div className="search-container">
                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        <img
                          src="/img/eduriselanding/mingcute_search-line.png"
                          alt="Search"
                          width="24"
                          height="24"
                        />
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Cari Beasiswa ?"
                      />
                      <button className="btn btn-primary px-4">
                        Cari Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Images */}
              <div className="col-lg-6 hero-image-container">
                <div className="hero-images">
                  <div className="hero-image hero-image-1">
                    <img
                      src="/img/eduriselanding/Rectangle 1 landing.png"
                      alt="Student"
                      className="img-fluid"
                    />
                  </div>
                  <div className="hero-image hero-image-2">
                    <img
                      src="/img/eduriselanding/Rectangle 2 landing.png"
                      alt="Education"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <div className="text-center mb-5">
              <h2 className="section-title">
                Fitur yang Mempermudah dalam Meraih Beasiswa Impian
              </h2>
              <p className="section-subtitle">
                EduRise selalu memberikan beragam fitur yang berguna untuk
                membantumu dalam meraih beasiswa impian
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              {/* Feature Card 1 */}
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-graduation-cap"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <h3 className="feature-title">
                    Persiapan, Simulasi, dan Latihan
                  </h3>
                  <p className="feature-description">
                    Gunakan fitur simulasi dan latihan agar lebih siap untuk
                    memenuhi persyaratan beasiswa impianmu
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-podcast"
                    >
                      <circle cx="12" cy="11" r="1" />
                      <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z" />
                      <path d="M8 14a5 5 0 1 1 8 0" />
                      <path d="M17 18.5a9 9 0 1 0-10 0" />
                    </svg>
                  </div>
                  <h3 className="feature-title">Forum Webinar dan Diskusi</h3>
                  <p className="feature-description">
                    Kami menyediakan forum webinar dan diskusi guna membangun
                    komunitas terbaik seputar edukasi dan informasi
                  </p>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-file-check-2"
                    >
                      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="m3 15 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="feature-title">
                    Review CV Standar Internasional
                  </h3>
                  <p className="feature-description">
                    Unduh template CV berstandar Internasional dan dapatkan
                    review CV bersama mentor yang ahli di bidangnya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="showcase-section">
            <div className="showcase-container">
              <div className="text-center mb-5">
                <h2 className="section-title">
                  Raih Beasiswa Kesempatan Lebih Besar
                </h2>
                <p className="section-subtitle">
                  EduRise akan selalu membantumu untuk mendapatkan beasiswa yang
                  kamu inginkan, dengan berbagai program unggulannya
                </p>
              </div>

              <div className="row g-5 justify-content-center">
                {/* Program Box 1 */}
                <div className="col-md-4">
                  <div className="program-box text-center">
                    <div className="program-icon-wrapper">
                      <img
                        src="/img/eduriselanding/Vector 1.png"
                        alt="Review Mentor Icon"
                        className="program-icon"
                      />
                    </div>
                    <h3 className="program-title">Review Bersama Mentor</h3>
                    <p className="program-description">
                      Review progres pendaftaran beasiswamu bersama mentor
                      professional dibidangnya
                    </p>
                    <a href="#" className="program-link">
                      <span>Mulai</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ms-2"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Program Box 2 */}
                <div className="col-md-4">
                  <div className="program-box text-center">
                    <div className="program-icon-wrapper">
                      <img
                        src="/img/eduriselanding/Vector 2.png"
                        alt="Edukasi dan Tips Icon"
                        className="program-icon"
                      />
                    </div>
                    <h3 className="program-title">Edukasi dan Tips</h3>
                    <p className="program-description">
                      Pelajari edukasi dan tips seputar beasiswa, memperbesar
                      peluangmu diterima beasiswa
                    </p>
                    <a href="#" className="program-link">
                      <span>Mulai</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ms-2"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Program Box 3 */}
                <div className="col-md-4">
                  <div className="program-box text-center">
                    <div className="program-icon-wrapper">
                      <img
                        src="/img/eduriselanding/Vector 3.png"
                        alt="Informasi Beasiswa Icon"
                        className="program-icon"
                      />
                    </div>
                    <h3 className="program-title">
                      Informasi Beasiswa Terupdate
                    </h3>
                    <p className="program-description">
                      Kami berusaha untuk selalu memberikan informasi beasiswa
                      terupdate dari sumber faktual
                    </p>
                    <a href="#" className="program-link">
                      <span>Mulai</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ms-2"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="testimonials-section">
            <div className="testimonials-container">
              <div className="text-center mb-5">
                <h2 className="section-title">
                  Dengarkan Pengalaman Alumni EduRise dalam Mencapai Impian
                  Mereka
                </h2>
                <p className="section-subtitle">
                  Alumni EduRise telah merasakan sendiri, bahwa kami telah
                  membantu untuk memperbesar kesempatan mereka untuk menerima
                  beasiswa yang sesuai
                </p>
              </div>

              <div className="row g-4 justify-content-center">
                {/* Testimonial Card 1 */}
                <div className="col-lg-4 col-md-6">
                  <div className="testimonial-card">
                    <div className="stars mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <p className="testimonial-text">
                      "Perfect site untuk mencari beasiswa di seluruh Indonesia,
                      dan memperbesar chance lolos beasiswa bersama mentor."
                    </p>
                    <div className="testimonial-author">
                      <div className="author-photo">
                        <img
                          src="/img/eduriselanding/Avatar Image 1.png"
                          alt="Abdul Rahman"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">Abdul Rahman</h4>
                        <p className="author-job">Atlet Profesional</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="col-lg-4 col-md-6">
                  <div className="testimonial-card">
                    <div className="stars mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <p className="testimonial-text">
                      "Bener-bener bantu banget buat yang lagi hunting beasiswa.
                      Fiturnya lengkap, dari informasi sampai persiapan apply!"
                    </p>
                    <div className="testimonial-author">
                      <div className="author-photo">
                        <img
                          src="/img/eduriselanding/Avatar Image 2.png"
                          alt="Anita Wulandari"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">Anita Wulandari</h4>
                        <p className="author-job">Designer</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 3 */}
                <div className="col-lg-4 col-md-6">
                  <div className="testimonial-card">
                    <div className="stars mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <p className="testimonial-text">
                      "EduRise jadi andalan aku buat nyari info beasiswa dan
                      ikut webinar persiapan. Ngebantu banget ningkatin peluang
                      lolos!"
                    </p>
                    <div className="testimonial-author">
                      <div className="author-photo">
                        <img
                          src="/img/eduriselanding/Avatar Image 3.png"
                          alt="Amanda Zahra"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">Amanda Zahra</h4>
                        <p className="author-job">Presenter</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingBefore;

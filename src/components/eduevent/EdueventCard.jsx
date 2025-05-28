import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link
import EdueventButton from "./EdueventBtn"; // Pastikan path benar

const EdueventCard = ({
  type = "competition",
  image,
  title,
  date,
  isFree = true,
  level = "nasional",
  description = "",
  // Kembalikan prop buttonText dan buttonVariant
  buttonText = "Selengkapnya",
  buttonVariant = "primary",
  id,
}) => {
  // Tentukan link tujuan untuk seluruh kartu berdasarkan 'type' (kecuali tombol)
  const cardDestinationLink = type === "competition" ? `/eduevents/${id}` : "/webinardetail";

  return (
    <div
      className={`
        bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105
        ${type === "competition" ? "rounded-[15px] shadow-sm" : "rounded-lg shadow-sm"}
        flex flex-col // Tambahkan flex-col untuk layout yang lebih baik
      `}
    >
      {/* Gambar Event/Webinar - ini bisa diklik ke halaman detail juga */}
      <Link to={cardDestinationLink} className="block flex-shrink-0">
        <div className="p-4 flex justify-center items-center">
          <img
            src={image || "/img/default-placeholder.png"}
            alt={title}
            className={`object-contain w-full ${
              type === "competition" ? "h-[180px]" : "h-[160px]"
            }`}
          />
        </div>
      </Link>

      {/* Bagian Konten Kartu - ini juga bisa diklik ke halaman detail */}
      <Link to={cardDestinationLink} className="block flex-grow p-4"> {/* flex-grow agar mengisi ruang sisa */}
        <h3
          className={`font-poppins font-bold text-black mb-4 ${
            type === "competition" ? "text-[24px] leading-[28px]" : "text-lg leading-tight"
          }`}
        >
          {title}
        </h3>

        <div className="space-y-2">
          {/* Tanggal Event/Webinar */}
          <div className="flex items-center">
            <img
              src={
                type === "competition"
                  ? "/img/eduevent/img_icon.svg"
                  : "/img/eduevent/img_calendar.svg"
              }
              alt="Icon Tanggal"
              className="w-[13px] h-[13px] mr-2 flex-shrink-0"
            />
            <span
              className={`font-poppins text-black ${
                type === "competition" ? "text-[12px]" : "text-sm"
              }`}
            >
              {date}
            </span>
          </div>

          {/* Info Khusus Kompetisi */}
          {type === "competition" && (
            <>
              {isFree && (
                <div className="flex items-center">
                  <img
                    src="/img/eduevent/img_usercheck.svg"
                    alt="Icon Gratis"
                    className="w-[13px] h-[13px] mr-2"
                  />
                  <span className="font-poppins text-[12px] text-black">
                    Gratis tanpa syarat bayar
                  </span>
                </div>
              )}
              <div className="flex items-center">
                <img
                  src="/img/eduevent/img_circle.svg"
                  alt="Icon Level"
                  className="w-[13px] h-[13px] mr-2"
                />
                <span className="font-poppins text-[12px] text-black">
                  Tingkat {level}
                </span>
              </div>
            </>
          )}

          {/* Info Khusus Webinar */}
          {type === "Webminar" && description && (
            <p className="font-poppins text-sm leading-normal text-gray-700 mt-2 line-clamp-3">
              {description}
            </p>
          )}
        </div>
      </Link>

      {/* Tombol "Selengkapnya" atau "Lihat Detail" - Ini adalah tombol terpisah */}
      <div className="p-4 pt-0 mt-auto"> {/* mt-auto untuk mendorong ke bawah */}
        <Link to={cardDestinationLink}> {/* Link untuk tombol */}
          <EdueventButton
            variant={buttonVariant}
            className="w-full h-[40px] text-center"
          >
            {buttonText}
          </EdueventButton>
        </Link>
      </div>
    </div>
  );
};

// Definisi PropTypes untuk validasi props
EdueventCard.propTypes = {
  type: PropTypes.oneOf(["competition", "Webminar"]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isFree: PropTypes.bool,
  level: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string, // Kembalikan buttonText
  buttonVariant: PropTypes.oneOf(["primary", "secondary"]), // Kembalikan buttonVariant
  id: PropTypes.number.isRequired,
};

export default EdueventCard;
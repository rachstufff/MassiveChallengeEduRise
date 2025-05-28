import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import PersonalInfo from "../components/profile/PersonalInfo";
import Education from "../components/profile/Education";
import ParentData from "../components/profile/ParentData";
import Portfolio from "../components/profile/Portfolio";
import CareerGoals from "../components/profile/CareerGoals";
import Button from "../components/profile/ButtonProfile";
import Artikel from "../components/profile/Artikel";
import Beasiswa from "../components/profile/Beasiswa";
import Kompetisi from "../components/profile/Kompetisi";
import AddCommunity from "../components/profile/AddCommunity";
import SavedCommunity from "../components/profile/SavedCommunity";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("PROFIL");
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const navigate = useNavigate();

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    console.log("Logging out...");
    navigate("/login"); // Sesuaikan dengan rute LandingBefore.jsx
    setShowLogoutModal(false);
  };

  const handleBack = () => {
    console.log("Going back...");
    navigate("/landingpage");
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
    e.target.value = null;
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(URL.createObjectURL(file));
    e.target.value = null;
  };

  const handleProfileDelete = () => {
    setProfileImage(null);
    if (profileInputRef.current) profileInputRef.current.value = null;
  };

  const handleCoverDelete = () => {
    setCoverImage(null);
    if (coverInputRef.current) coverInputRef.current.value = null;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar /> {/* Menambahkan komponen Navbar di sini */}
      {/* Cover Image */}
      <div className="relative w-full">
        <div className="w-full h-[316px] overflow-hidden relative">
          <img
            src={coverImage || "/img/profile/default_cover.png"}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <label className="bg-white p-2 rounded-full shadow cursor-pointer">
              <FaEdit className="text-gray-600" />
              <input
                type="file"
                accept="image/*"
                ref={coverInputRef}
                onChange={handleCoverChange}
                className="hidden"
              />
            </label>
            {coverImage && (
              <button
                onClick={handleCoverDelete}
                className="bg-white p-2 rounded-full shadow text-red-500"
              >
                <FaTrash />
              </button>
            )}
          </div>
        </div>

        {/* Profile Image & Info */}
        <div className="container mx-auto px-4 relative">
          <div className="absolute left-[98px] top-[-100px]">
            <div className="relative">
              <img
                src={profileImage || "/img/profile/default_profile.jpg"}
                alt="Profile"
                className="w-[200px] h-[200px] rounded-full border-4 border-white object-cover"
              />
              <div className="absolute bottom-2 right-2 flex space-x-1">
                <label className="bg-white p-1 rounded-full shadow cursor-pointer">
                  <FaEdit className="text-gray-600 text-sm" />
                  <input
                    type="file"
                    accept="image/*"
                    ref={profileInputRef}
                    onChange={handleProfileChange}
                    className="hidden"
                  />
                </label>
                {profileImage && (
                  <button
                    onClick={handleProfileDelete}
                    className="bg-white p-1 rounded-full shadow text-red-500"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="pt-6 pl-[359px] flex justify-between items-start">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-[31px] font-bold font-poppins text-black bg-transparent focus:outline-none"
              />
              <textarea
                placeholder="Masukkan bio Anda"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="text-lg font-poppins text-black bg-transparent resize-none focus:outline-none"
              />
            </div>

            <div className="flex gap-5">
              <Button
                onClick={handleBack}
                className="bg-[#3375cc] text-white font-bold py-2 px-4 rounded-lg"
              >
                Kembali
              </Button>
              <Button
                onClick={handleLogout}
                className="bg-[#ff3037] text-white font-bold py-2 px-4 rounded-lg"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#ebf1fa] rounded-t-[22px] mt-10 mx-auto w-[1150px] pb-10">
        <div className="flex flex-col items-center">
          <div className="pt-6">
            <img
              src="/img/profile/Ellipse_1-removebg-preview.png"
              alt="EduRise"
              className="w-[84px] h-[84px] rounded-full"
            />
          </div>

          <div className="flex justify-center gap-10 py-10">
            {["PROFIL", "TERSIMPAN", "KOMUNITAS"].map((tab) => (
              <button
                key={tab}
                className={`text-sm font-poppins ${
                  activeTab === tab
                    ? "font-bold text-[#295ea3] underline"
                    : "font-semibold text-[#575858]"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="w-full max-w-5xl px-7">
            {activeTab === "PROFIL" && (
              <>
                <PersonalInfo />
                <Education />
                <ParentData />
                <Portfolio />
                <CareerGoals />
              </>
            )}
            {activeTab === "TERSIMPAN" && (
              <>
                <Artikel />
                <Beasiswa />
                <Kompetisi />
              </>
            )}
            {activeTab === "KOMUNITAS" && (
              <>
                <AddCommunity />
                <SavedCommunity />
              </>
            )}
          </div>
        </div>
      </div>

      {/* --- Pop-up Konfirmasi Logout (Efek Kaca Buram) --- */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-blue bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div
            className="p-8 rounded-xl shadow-2xl max-w-sm w-full text-center border border-gray-200 transform scale-95 animate-scaleIn"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // Latar belakang putih semi-transparan
              backdropFilter: 'blur(10px)', // Efek blur pada modal itu sendiri
              WebkitBackdropFilter: 'blur(10px)' // Untuk kompatibilitas Safari
            }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
              Konfirmasi Logout
            </h3>
            <p className="text-gray-600 mb-6 font-poppins">
              Apakah Anda yakin ingin keluar dari akun ini?
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={handleConfirmLogout}
                className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
              >
                Ya, Logout
              </Button>
              <Button
                onClick={() => setShowLogoutModal(false)}
                className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
              >
                Tidak, Batalkan
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* --- Akhir Pop-up Konfirmasi Logout --- */}
      <Footer /> {/* Menambahkan komponen Footer di sini */}
    </div>
  );
};

export default ProfilePage;

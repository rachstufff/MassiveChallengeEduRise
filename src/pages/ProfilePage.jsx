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
import Footer from "../components/Footer";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("PROFIL");
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const handleTabChange = (tab) => setActiveTab(tab);
  const handleLogout = () => console.log("Logging out...");
  const handleBack = () => console.log("Going back...");

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
    e.target.value = null; // Reset input agar bisa upload file yg sama lagi
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(URL.createObjectURL(file));
    e.target.value = null; // Reset input agar bisa upload file yg sama lagi
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
    <>
      <div className="min-h-screen bg-white">
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
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;

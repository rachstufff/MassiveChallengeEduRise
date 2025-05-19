import { useState } from "react";
import Button from "./ButtonProfile";

const CareerGoals = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [careerGoals, setCareerGoals] = useState({
    field: "",
    shortTermPlan: "",
    motivation: "",
  });

  const bidangOptions = [
    "Teknologi Informasi & Digital",
    "Bisnis & Manajemen",
    "Kreatif & Media",
    "Kesehatan & Sosial",
    "Pendidikan & Penelitian",
    "Lingkungan & Sosial",
  ];

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saving career goals:", careerGoals);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareerGoals((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputClass =
    "flex-1 text-xs font-normal font-poppins text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3375cc]";
  const viewClass =
    "flex-1 text-xs font-normal font-poppins text-black border border-gray-300 rounded-md px-3 py-2 bg-gray-100";

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5 shadow">
      <h2 className="text-2xl font-semibold font-poppins text-[#17355c] mb-6">
        Tujuan Karier
      </h2>

      <div className="space-y-4">
        {/* Bidang yang Diminati */}
        <div className="flex items-start gap-4">
          <p className="w-40 text-xs font-normal font-poppins text-black">
            Bidang yang Diminati :
          </p>
          {isEditing ? (
            <select
              name="field"
              value={careerGoals.field}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">-- Pilih Bidang --</option>
              {bidangOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <p className={viewClass}>{careerGoals.field}</p>
          )}
        </div>

        {/* Rencana Jangka Pendek */}
        <div className="flex items-start gap-4">
          <p className="w-40 text-xs font-normal font-poppins text-black">
            Rencana Jangka Pendek :
          </p>
          {isEditing ? (
            <textarea
              name="shortTermPlan"
              value={careerGoals.shortTermPlan}
              onChange={handleChange}
              className={inputClass}
              rows="3"
            />
          ) : (
            <p className={viewClass + " whitespace-pre-line"}>
              {careerGoals.shortTermPlan}
            </p>
          )}
        </div>

        {/* Motivasi */}
        <div className="flex items-start gap-4">
          <p className="w-40 text-xs font-normal font-poppins text-black">
            Motivasi Tujuan Karir :
          </p>
          {isEditing ? (
            <textarea
              name="motivation"
              value={careerGoals.motivation}
              onChange={handleChange}
              className={inputClass}
              rows="4"
            />
          ) : (
            <p className={viewClass}>{careerGoals.motivation}</p>
          )}
        </div>
      </div>

      <div
        className={`flex mt-6 ${isEditing ? "justify-center" : "justify-end"}`}
      >
        {isEditing ? (
          <Button
            onClick={handleSave}
            className="bg-[#0BAB5E] text-white font-bold py-2 px-6 rounded-lg"
          >
            Simpan
          </Button>
        ) : (
          <Button
            onClick={handleEdit}
            className="bg-[#3375cc] text-white font-bold py-2 px-6 rounded-lg"
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default CareerGoals;

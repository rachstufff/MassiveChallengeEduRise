import { useState } from "react";
import Button from "./ButtonProfile";

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    birthplace: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saving personal info:", personalInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
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
        Informasi Pribadi
      </h2>

      <div className="space-y-4">
        {[
          { label: "Nama Lengkap", name: "name", type: "text" },
          {
            label: "Tempat dan tanggal lahir",
            name: "birthplace",
            type: "text",
          },
          {
            label: "Jenis Kelamin",
            name: "gender",
            type: "select",
            options: ["Laki-Laki", "Perempuan"],
          },
          { label: "Alamat", name: "address", type: "textarea" },
          { label: "No.Telp/HP", name: "phone", type: "text" },
          { label: "Email", name: "email", type: "email" },
        ].map((field) => (
          <div
            key={field.name}
            className="grid grid-cols-[160px_1fr] items-start gap-4"
          >
            <p className="text-xs font-normal font-poppins text-black">
              {field.label} :
            </p>
            {isEditing ? (
              field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={personalInfo[field.name]}
                  onChange={handleChange}
                  className={inputClass}
                  rows="2"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  value={personalInfo[field.name]}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">-- Pilih Jenis Kelamin --</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={personalInfo[field.name]}
                  onChange={handleChange}
                  className={inputClass}
                />
              )
            ) : (
              <p className={viewClass}>{personalInfo[field.name]}</p>
            )}
          </div>
        ))}
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

export default PersonalInfo;

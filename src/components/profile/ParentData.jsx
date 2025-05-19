import { useState } from "react";
import Button from "./ButtonProfile";

const ParentData = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [parentInfo, setParentInfo] = useState({
    father: {
      name: "",
      birthplace: "",
      address: "",
      phone: "",
      education: "",
      occupation: "",
      income: "",
    },
    mother: {
      name: "",
      birthplace: "",
      address: "",
      phone: "",
      education: "",
      occupation: "",
      income: "",
    },
  });

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saving parent data:", parentInfo);
  };

  const handleChange = (parent, e) => {
    const { name, value } = e.target;
    setParentInfo((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [name]: value,
      },
    }));
  };

  const inputClass =
    "flex-1 text-xs font-normal font-poppins text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3375cc]";

  const viewClass =
    "flex-1 text-xs font-normal font-poppins text-black border border-gray-300 rounded-md px-3 py-2 bg-gray-100";

  const parentFields = [
    { label: "Nama Lengkap", name: "name", type: "text" },
    { label: "Tempat dan tanggal lahir", name: "birthplace", type: "text" },
    { label: "Alamat", name: "address", type: "textarea" },
    { label: "No.Telp/HP", name: "phone", type: "text" },
    { label: "Pendidikan Terakhir", name: "education", type: "text" },
    { label: "Pekerjaan", name: "occupation", type: "text" },
    { label: "Penghasilan", name: "income", type: "text" },
  ];

  const renderSection = (title, parentKey) => (
    <div className="mb-8">
      <h3 className="text-base font-semibold font-poppins text-black mb-4 border-b border-gray-300 pb-1">
        {title}
      </h3>
      <div className="space-y-4">
        {parentFields.map((field) => (
          <div
            key={`${parentKey}-${field.name}`}
            className="flex items-start gap-4"
          >
            <p className="w-40 text-xs font-normal font-poppins text-black">
              {field.label} :
            </p>
            {isEditing ? (
              field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={parentInfo[parentKey][field.name]}
                  onChange={(e) => handleChange(parentKey, e)}
                  className={inputClass}
                  rows="2"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={parentInfo[parentKey][field.name]}
                  onChange={(e) => handleChange(parentKey, e)}
                  className={inputClass}
                />
              )
            ) : (
              <p className={viewClass}>{parentInfo[parentKey][field.name]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5 shadow">
      <h2 className="text-2xl font-semibold font-poppins text-[#17355c] mb-6">
        Data Orang Tua
      </h2>

      {renderSection("1. Ayah Kandung", "father")}
      {renderSection("2. Ibu Kandung", "mother")}

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

export default ParentData;

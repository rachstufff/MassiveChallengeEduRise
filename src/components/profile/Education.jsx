import { useState } from "react";
import Button from "./ButtonProfile";

const Education = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducation] = useState({
    institution: "",
    program: "",
    faculty: "",
    semester: "",
    gpa: " ",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saving education info:", education);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputClass =
    "flex-1 min-w-[250px] text-sm font-normal font-poppins text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3375cc]";
  const viewClass =
    "flex-1 min-w-[250px] text-sm font-normal font-poppins text-black border border-gray-300 rounded-md px-3 py-2 bg-gray-100";

  return (
    <div className="bg-white rounded-[15px] p-6 mb-5">
      <h2 className="text-2xl font-semibold font-poppins text-[#17355c] mb-6">
        Pendidikan
      </h2>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <p className="w-40 text-xs font-normal font-poppins text-black">
            Nama Institusi :
          </p>
          {isEditing ? (
            <input
              type="text"
              name="institution"
              value={education.institution}
              onChange={handleChange}
              className={inputClass}
            />
          ) : (
            <p className={viewClass}>{education.institution}</p>
          )}
        </div>

        <div className="flex items-start gap-4">
          <p className="w-40 text-xs font-normal font-poppins text-black">
            Program Studi :
          </p>
          {isEditing ? (
            <input
              type="text"
              name="program"
              value={education.program}
              onChange={handleChange}
              className={inputClass}
            />
          ) : (
            <p className={viewClass}>{education.program}</p>
          )}
        </div>

        <div className="flex items-start gap-4">
          <p className="w-40 text-xs font-normal font-poppins text-black">
            Fakultas :
          </p>
          {isEditing ? (
            <input
              type="text"
              name="faculty"
              value={education.faculty}
              onChange={handleChange}
              className={inputClass}
            />
          ) : (
            <p className={viewClass}>{education.faculty}</p>
          )}
        </div>

        <div className="flex items-start gap-4">
          <p className="w-40 text-xs font-normal font-poppins text-black">
            Semester :
          </p>
          {isEditing ? (
            <input
              type="text"
              name="semester"
              value={education.semester}
              onChange={handleChange}
              className={inputClass}
            />
          ) : (
            <p className={viewClass}>{education.semester}</p>
          )}
        </div>

        <div className="flex items-start gap-4">
          <p className="w-40 text-xs font-normal font-poppins text-black">
            IPK :
          </p>
          {isEditing ? (
            <input
              type="text"
              name="gpa"
              value={education.gpa}
              onChange={handleChange}
              className={inputClass}
            />
          ) : (
            <p className={viewClass}>{education.gpa}</p>
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

export default Education;

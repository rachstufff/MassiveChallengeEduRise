import React, { useState } from "react";
import { History, FileSearch, CheckCircle, XCircle } from "lucide-react";

const steps = [
  { label: "Diproses", icon: History },
  { label: "Seleksi berkas", icon: FileSearch },
  { label: "Diterima", icon: CheckCircle },
  { label: "Ditolak", icon: XCircle },
];

const StatusModal = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0); // default step

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg font-bold"
        >
          &times;
        </button>

        <h3 className="text-xl font-bold text-center text-[#17355c] mb-6">
          Status Pendaftaran Kompetisi
        </h3>

        <div className="flex justify-between items-center px-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            return (
              <React.Fragment key={index}>
                <div
                  className={`flex flex-col items-center cursor-pointer text-center ${
                    isActive ? "text-[#3375cc]" : "text-[#5e5a5a]"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs">{step.label}</span>
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      isActive ? "bg-green-500" : "bg-black"
                    }`}
                  ></div>
                </div>
                {index < steps.length - 1 && (
                  <div className="h-1 bg-gray-300 flex-1 mx-2 mt-4"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatusModal;

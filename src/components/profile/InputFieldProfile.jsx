import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  className = "",
  labelClassName = "",
  inputClassName = "",
  ...props
}) => {
  const baseInputClasses =
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins";
  const errorInputClasses = error ? "border-red-500" : "";
  const inputClasses = `${baseInputClasses} ${errorInputClasses} ${inputClassName}`;

  const baseLabelClasses =
    "block text-sm font-medium text-gray-700 mb-1 font-poppins";
  const labelClasses = `${baseLabelClasses} ${labelClassName}`;

  const containerClasses = `mb-4 ${className}`;

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={name} className={labelClasses}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        required={required}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default InputField;

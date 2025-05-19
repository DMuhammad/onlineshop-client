import TextInput from "./TextInput";

function TextInputWithLabel({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <TextInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all ${className}`}
      />
    </div>
  );
}

export default TextInputWithLabel;

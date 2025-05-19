function TextInput({ type, name, value, placeholder, onChange, className }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
}

export default TextInput;

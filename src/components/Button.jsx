function Button({ children, action, className, type, disabled, loading }) {
  return (
    <button
      type={type}
      className={className}
      onClick={action}
      disabled={disabled}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;

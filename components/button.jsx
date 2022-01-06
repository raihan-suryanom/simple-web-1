function Button({ title, style, action, children, dark, type = 'button' }) {
  const variant = dark
    ? 'border-[#C4C4C4] text-dark px-5 py-2.5'
    : 'border-white text-white px-7 py-4';

  return (
    <button
      className={`${style} ${variant} bg-transparent border rounded-md font-bold inline-flex items-center`}
      type={type}
      onClick={action}
    >
      {title}
      {children}
    </button>
  );
}

export default Button;

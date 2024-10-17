"use client";

function Input({
  type,
  width,
  placeholder,
  register,
  name,
  disabled = false,
  ringColor = "",
}) {
  return (
    <input
      style={{ width: width }}
      className={`rounded-sm border-2 border-solid border-secondary-gray-0 px-3 py-3 text-sm text-black focus:border-secondary max-lg:text-xs ${
        ringColor ? ringColor : "focus:ring-4 focus:ring-gray-300"
      }`}
      type={type}
      placeholder={placeholder}
      {...register(name)}
      disabled={disabled}
    />
  );
}

export default Input;

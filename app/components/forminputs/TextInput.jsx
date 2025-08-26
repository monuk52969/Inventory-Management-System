

const TextInput = ({
  label,
  name,
  isRequired = true,
  register,
  errors,
  type = "text",
  className = "sm:col-span-2",
  placeholder = "Type here..."
}) => {
  return (
    <div className={className}>
      {/* Input Label */}
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>

      {/* Input Field */}
      <input
        {...register(`${name}`, { required: isRequired })}
        type={type}
        id={name}
        name={name}
        autoComplete={name}
        placeholder={placeholder}
        className="block w-full rounded-md border-0 py-2 px-3 
                   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                   focus:ring-purple-600 sm:text-sm sm:leading-6"
      />

      {/* Error Message */}
      {errors?.[name] && (
        <span className="text-sm text-red-600">
          {label} is required
        </span>
      )}
    </div>
  )
}

export default TextInput

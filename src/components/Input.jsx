function Input({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    id
}) {
    return (
        <div>
            <label
                htmlFor={id} 
                className="mb-2 block text-sm font-semibold text-gray-700">
                {label}
            </label>

            <input 
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                 className="w-full rounded-xl bg-gray-300 px-5 py-4 text-gray-800 outline-none transition focus:ring-2 focus:ring-[#8B3217]"
            />
        </div>
    )
}

export default Input
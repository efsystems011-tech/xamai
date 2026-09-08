function Button({
    children,
    type="button",
    onClick
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full rounded-xl bg-[#8B3217] py-4 font-bold text-white transition hover:bg-[#70260F] active:scale-[0.98]"
        >
            {children}
        </button>
    )
}

export default Button
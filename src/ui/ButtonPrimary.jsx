/* eslint-disable react/prop-types */
export default function ButtonPrimary({ children, className, ...props }) {
    return <button {...props} className={`bg-orange hover:opacity-90 duration-200 text-white text-[10px] flex items-center justify-center gap-2 font-semibold px-10 py-5 h-7 rounded-md ${className}`}>
        {children}
    </button>
}

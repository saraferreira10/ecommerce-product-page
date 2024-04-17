/* eslint-disable react/prop-types */
export default function MenuItem({ children, className }) {
    return <li className={`list-none text-md h-full place-content-center hover:text-black hover:border-b-4 duration-300 border-white hover:border-orange cursor-pointer ${className}`}>
        {children}
    </li>
}

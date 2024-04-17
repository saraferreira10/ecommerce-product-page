/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

export default function NavList({ className = "" }) {
    return (
        <div className={`flex gap-8 text-grayish-blue h-full w-full justify-start ${className}`}>
            <MenuItem>Collections</MenuItem>
            <MenuItem>Men</MenuItem>
            <MenuItem>Women</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
        </div>
    )
}

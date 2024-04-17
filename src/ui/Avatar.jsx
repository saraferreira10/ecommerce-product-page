/* eslint-disable react/prop-types */

export default function Avatar({ className = "" }) {
    return (
        <div className={`bg-avatar-default ${className} bg-cover h-10 w-10`}></div>
    )
}

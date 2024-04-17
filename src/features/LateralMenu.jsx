/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import MenuItem from "../ui/MenuItem";

export default function LateralMenu({ onClick }) {
    return (
        <div>
            <div className="fixed top-0 bottom-0 right-0 left-0 h-screen w-screen bg-black opacity-70 z-10"></div>

            <div className="opacity-100 z-50 h-screen bg-white w-72 fixed top-0 bottom-0 p-10 flex flex-col gap-10 justify-start items-start">

                <div>
                    <AiOutlineClose onClick={onClick} className="text-2xl text-grayish-blue cursor-pointer" />
                </div>

                <div className="flex flex-col gap-7">
                    <MenuItem className={"font-bold text-xl"}>Collections</MenuItem>
                    <MenuItem className={"font-bold text-xl"}>Men</MenuItem>
                    <MenuItem className={"font-bold text-xl"}>Women</MenuItem>
                    <MenuItem className={"font-bold text-xl"}>About</MenuItem>
                    <MenuItem className={"font-bold text-xl"}>Contact</MenuItem>
                </div>
            </div>
        </div>
    )
}

import { AiFillCloseSquare } from "react-icons/ai";
import CardImg from "../ui/CardImg";

/* eslint-disable react/prop-types */
export default function MaxImageView({ closeMaxImageView, image }) {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full flex justify-center items-center">
      <div className="z-20 flex flex-col justify-end items-end">
        <button onClick={closeMaxImageView} className="text-white text-3xl"><AiFillCloseSquare /></button>
        <CardImg imgSrc={image} className={"w-[30rem] rounded-md"} />
      </div>
      <div className="fixed bg-black opacity-70 h-full w-full z-10"></div>
    </div>
  )
}

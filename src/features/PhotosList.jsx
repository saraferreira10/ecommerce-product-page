/* eslint-disable react/prop-types */
import CardImg from "../ui/CardImg";
import img2 from "../assets/images/image-product-2-thumbnail.jpg"
import img3 from "../assets/images/image-product-3-thumbnail.jpg"
import img4 from "../assets/images/image-product-4-thumbnail.jpg"

export default function PhotosList({ setImgSelected }) {
  return (
    <div className="flex justify-between w-full">
      <CardImg className={"w-20 rounded-md hover:opacity-70 cursor-pointer"} onClick={() => setImgSelected(0)} />
      <CardImg imgSrc={img2} className={"w-20 rounded-md hover:opacity-70 cursor-pointer"} onClick={() => setImgSelected(1)} />
      <CardImg imgSrc={img3} className={"w-20 rounded-md hover:opacity-70 cursor-pointer"} onClick={() => setImgSelected(2)} />
      <CardImg imgSrc={img4} className={"w-20 rounded-md hover:opacity-70 cursor-pointer"} onClick={() => setImgSelected(3)} />
    </div>
  )
}

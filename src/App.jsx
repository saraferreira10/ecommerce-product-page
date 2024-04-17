import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./features/Card";
import Menu from "./features/Menu";
import PhotosList from "./features/PhotosList";
import ShoppingCart from "./features/ShoppingCart";
import CardImg from "./ui/CardImg";
import { useState } from "react";
import LateralMenu from "./features/LateralMenu";
import Image1 from './assets/images/image-product-1.jpg';
import Image2 from './assets/images/image-product-2.jpg';
import Image3 from './assets/images/image-product-3.jpg';
import Image4 from './assets/images/image-product-4.jpg';
import MaxImageView from "./features/MaxImageView";


export default function App() {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);
  const [isMaxImageOpen, setIsMaxImageOpen] = useState(false);

  const imagesArr = [
    Image1, Image2, Image3, Image4
  ]

  const [imageSelected, setImageSelected] = useState(imagesArr[1])

  function togleShoppingCart() {
    setIsShoppingCartOpen(e => !e);
  }

  function toggleLateralMenu() {
    setIsLateralMenuOpen(e => !e);
  }

  function changeImg(num) {
    setImageSelected(imagesArr[num])
  }

  return (
    <div className="font-primary w-screen h-screen box-border">
      <Menu onClick={togleShoppingCart} isLateralMenuOpen={isLateralMenuOpen} toggleLateralMenu={toggleLateralMenu} />
      <main className="md:flex">
        <div className="md:px-10 lg:px-32 md:mt-9 md:gap-4 flex flex-col">
          <CardImg className="rounded-none w-full md:w-[35rem] md:rounded-md cursor-pointer" imgSrc={imageSelected}  onClick={() => setIsMaxImageOpen(true)}>
            <div>
              <button className="flex md:hidden absolute top-64 left-4 w-10 h-10 bg-pale-orange rounded-full justify-center items-center">
                <AiOutlineLeft />
              </button>

              <button className="flex md:hidden absolute top-64 right-4 w-10 h-10 bg-pale-orange rounded-full justify-center items-center">
                <AiOutlineRight />
              </button>
            </div>
          </CardImg>
          <div className="hidden md:flex md:w-96"><PhotosList setImgSelected={changeImg} /></div>
        </div>
        <Card/>
      </main>


      {isLateralMenuOpen && <LateralMenu onClick={toggleLateralMenu} />}
      {isShoppingCartOpen && <ShoppingCart />}
      {isMaxImageOpen && <MaxImageView image={imageSelected} closeMaxImageView={() => setIsMaxImageOpen(false)}/>}

    </div>
  )
}
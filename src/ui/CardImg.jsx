/* eslint-disable react/prop-types */
import Image from '../assets/images/image-product-1.jpg';

export default function CardImg({ className, children, imgSrc = null, onClick = null, ...props }) {
    return (
        <div>
            <img src={imgSrc != null ? imgSrc : Image} className={className} onClick={onClick} {...props} />
            {children}
        </div>
    )
}

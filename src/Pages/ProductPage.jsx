import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useLocation, useParams } from 'react-router-dom';
import Productlist from '../components/productlist';

const ProductPage = () => {
  const location = useLocation();
  const product = location.state.product;
  const [Quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0);

  const {productid} = useParams

  const Setquantity = () => {
    setQuantity(Quantity+1)
  }

  const UnsetQuantity = () => {
    setQuantity(Quantity-1)
  }
  return (
    <div>
    <div className="grid grid-cols-2 p-5 items-center">
      <div>
      <img src={product.image} alt={product.title} className="w-[250px] h-[250px]" />
      </div>
      <div>
      <h1 className="text-3xl text-green-500 font-bold my-5">{product.title}</h1>
      <p className="text-2xl font-bold text-green-500">${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
      <div className=' flex items-center my-5'>
        <div className=' flex justify-between items-center  bg-white border-2 gap-5 w-[150px] '>
          <div onClick={() => UnsetQuantity()} className=' px-4 bg-green-500 font-bold text-3xl text-black'>-</div>
          <div className=' font-bold'>{Quantity}</div>
          <div onClick={() => Setquantity()} className=' px-4 bg-green-500 font-bold text-3xl text-black'>+</div>
        </div>
        {/* heart icon */}
        <div className=' px-5 py-2  bg-green-500'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-white text-center size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>

        </div>
      </div>
      </div>
    </div>
    {/* Related Products */}
    <h1 className=' text-2xl text-black text-center'>Related Products</h1>
    <div>
      <Productlist/>
    </div>
    </div>
  );
};

export default ProductPage


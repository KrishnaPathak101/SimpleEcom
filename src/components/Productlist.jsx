import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../ProductsContext';
import { Link } from 'react-router-dom';

// A separate component for the Product Card
const ProductCard = ({ product, addCart }) => (
    <div key={product.id} className="bg-white rounded shadow p-4">
      <Link to={`/products/${product.id}`} state={{ product }}>
        <img src={product.image} className="w-[250px] h-[250px]" alt={product.title} />
        <h2 className="truncate">{product.title}</h2>
        <p className="text-gray-600 font-bold my-5">${product.price}</p>
      </Link>
      <div className="flex">
        <div className="bg-black flex gap-5 px-5 py-2 items-center">
          <IconEye />
          <IconHeart />
        </div>
        <div>
          <button onClick={() => addCart(product) } className="bg-green-600 text-white px-5 py-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );

// Extracted SVG icons into separate components for reuse
const IconEye = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

const IconHeart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const { addProducts, addCart, reproducts } = useContext(ProductsContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
                const data = await response.json();
                setProducts(data);
                addProducts(data);
                console.log(data)
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        fetchProducts();
    }, []);  // Add dependency to avoid potential stale closure

    return (
        <div className="py-10 px-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                
                <ProductCard key={product.id} addCart={addCart} product={product} />
                
            ))}
        </div>
    );
};

export default Productlist;

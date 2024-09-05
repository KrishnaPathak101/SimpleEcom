import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../ProductsContext';

// Separate SVG icons for better readability and reusability
const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

const IconCart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const Header = () => {
  const { Cart, setCart } = useContext(ProductsContext);

  // Memoized cart count to prevent unnecessary recalculations
  const cartItemCount = useMemo(() => Cart.length, [Cart]);

  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
  };

  const removeItemFromCart = (id) => {
    const updatedCart = Cart.filter((item) => item.id !== id);
    setCart(updatedCart); // Fixed logic to remove items from cart correctly
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="p-5 flex items-center justify-between">
        <Link to="/">
          <h1 className="font-bold text-xl">Patanjali</h1>
        </Link>

        {/* Search Bar */}
        <div className="flex">
          <input type="text" className="px-10 py-2 border" placeholder="Search Products Here..." />
          <button className="py-2 px-5 bg-green-500 text-white font-bold">Search</button>
        </div>

        {/* Icons */}
        <div className="flex gap-5">
          <IconHeart />
          <IconUser />
          <div className="relative cursor-pointer" onClick={toggleSidebar} aria-label="Open Cart">
            <div className="m-auto text-white text-center w-[20px] h-[20px] right-0 left-4 -top-2 rounded-full absolute bg-orange-500">
              {cartItemCount}
            </div>
            <IconCart />
          </div>
        </div>
      </div>

      {/* Sidebar for Cart */}
      <aside id="sidebar" className="hidden fixed top-0 my-[80px] right-0 h-[500px] w-64 z-10 bg-white shadow-md p-4 overflow-auto">
        <h1 className="text-2xl text-center font-bold">Cart Items</h1>
        <p className=' font-bold'>{Cart.length} Items</p>
        <hr className="border mt-1 border-black w-full" />
        {Cart.length > 0 ? (
          <div className="max-h-[70vh] overflow-y-auto">
            {Cart.map((item) => (
              <div key={item.id} className="my-5 flex items-center justify-between">
                <div>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <div className="flex items-center">
                  <img className="p-2 border-2 w-[50px] h-[50px]" src={item.image} alt={item.title} />
                  <button onClick={() => removeItemFromCart(item.id)} className="ml-3" aria-label="Remove Item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No items in cart</p>
        )}
        <button className="w-full mx-auto bg-green-600 font-bold my-5 text-white px-5 py-2">Checkout</button>
      </aside>
    </header>
  );
};

export default Header;

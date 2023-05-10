import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="relative flex items-center justify-between px-7 py-3">
        {/* Left */}
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <img
              src="/images/india.png"
              alt="USA Flag"
              className="w-7 h-auto"
            />
            <ChevronDownIcon className="h-4 w-4" />
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-lg">IND</span>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
          <div className="hidden xl:flex items-center gap-5 text-lg">
            <Link to="/products/1">Men</Link>
            <Link to="/products/2">Women</Link>
            <Link to="/products/3">Children</Link>
            <Link to="/products/4">Accessories</Link>
          </div>
        </div>

        {/* Center */}
        <div className="text-3xl tracking-wider uppercase">
          <Link to="/">ALAVASTRA</Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <div className="hidden xl:flex items-center gap-5 text-lg">
            <Link to="/">Homepage</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Stores</Link>
          </div>
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
          <UserIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
          <HeartIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
          <div className="relative flex items-center" onClick={() => setOpen(!open)}>
            <ShoppingBagIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <span className="absolute left-3 bottom-2 bg-blue-500 rounded-full w-4 h-4 text-xs text-white flex items-center justify-center">0</span>
          </div>
        </div>
        {open && <Cart />}
      </nav>
    </header>
  );
}

export default Navbar;

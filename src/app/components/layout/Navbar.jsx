'use client';
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import AuthBT from "../ui/Auth-BT";

const Navbar = () => {
  return (
    <main className="bg-white p-2 overflow-hidden " >
        <nav className="flex border border-black rounded-lg justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-green-700">
        <Link href="/">AyurvedicStore</Link>
      </div>

      {/* Right - Navigation Links */}
      <div className="flex items-center text-gray-700 space-x-6">
        <Link href="/products" className="hover:text-green-600">
          Products
        </Link>
        <Link href="/contact" className="hover:text-green-600">
          Contact Us
        </Link>
        <Link href="/about" className="hover:text-green-600">
          About Us
        </Link>

        {/* Login Button */}
        <Link href="/login">
          <AuthBT text="Login" />
        </Link>

        {/* Cart Icon */}
        <Link href="/cart" className="relative">
          <FiShoppingCart className="text-2xl text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
            2 {/* Replace with dynamic cart count */}
          </span>
        </Link>
      </div>
    </nav>
    </main>
  );
};

export default Navbar;

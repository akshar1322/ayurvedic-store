'use client';
import Link from "next/link";


function URL() {
    window.open("https://splitxcom.vercel.app/");
}

const Footer = () => {


  return (
   <main className="bg-[#8B5D48] p-2 overflow-hidden " >
     <footer className="bg-[#8B5D48] text-white text-center py-8 border border-white rounded-md">
      {/* Business Intro */}
      <div className="mb-6 ml-3 mr-3 border border-white rounded-md p-4">
        <h2 className="text-2xl font-semibold">Ayurveda:</h2>
        <p className="text-sm mt-2 max-w-xl mx-auto">
          This is the space to introduce the business and what it has to offer. Define the qualities and
          values that make it unique.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="border border-white rounded-md ml-3 mr-3 p-4 flex justify-center space-x-6 text-lg font-medium my-4">
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/product" className="hover:underline">Shop</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Legal & Policies Links */}
      {/* <div className="border border-white rounded-md p-4 ml-3 mr-3 flex flex-wrap justify-center space-x-6 text-sm my-4">
        <Link href="/faq" className="hover:underline">FAQ</Link>
        <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link href="/refund" className="hover:underline">Refund Policy</Link>
        <Link href="/shipping" className="hover:underline">Shipping Policy</Link>
        <Link href="/accessibility" className="hover:underline">Accessibility Statement</Link>
      </div> */}
    </footer>
    {/* Footer Bottom - Version & Credit */}
    <div className=" flex justify-between  text-base mt-6">
        <p>© {new Date().getFullYear()} by Ayurveda. Created by <span className="font-semibold hover:text-lime-400 cursor-pointer " onClick={URL} > Splix LLC</span>. Based in India.</p>
        <p className=" text-base " >Version 1.0.0</p>
      </div>
   </main>
  );
};

export default Footer;

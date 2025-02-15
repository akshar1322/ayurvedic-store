import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid gap-2 p-4">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-2">
        {/* Left: Text Block */}
        <div className="  bg-white p-6 flex flex-col justify-between col-span-1">
          <div>
            <h1 className="text-4xl uppercase font-semibold text-[#8B5D48]">Ayurvedic:</h1>
            <h2 className="text-3xl font-light text-[#8B5D48] mt-2">
              IT’S YOU. BEAUTIFULLY YOU.
            </h2>
            <p className="text-[#8B5D48] mt-4">
              Effortless self-care rituals <br />
              to unveil your natural inner beauty
            </p>
          </div>
          {/* Shop Now Button */}
          <Link href="/product" className="text-[#8B5D48] italic mt-4 self-end hover:underline">
            Shop Now →
          </Link>
        </div>

        {/* Right: Two Side-by-Side Images */}
        <div className="grid grid-cols-2 gap-2 col-span-2">
          <div >
            <Image
              src="/images/Prodct1.jpg"
              alt="Model Close-Up"
              width={300}
              height={200}
              className="w-full h-full object-fill"
            />
          </div>
          <div>
            <Image
              src="/images/Prodct2.jpg"
              alt="Product Bottle"
              width={200}
              height={200}
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-2">
        {/* Left Image */}
        <div className=" ">
          <Image
            src="/images/Prodct8.jpg"
            alt="Cream on Skin"
            width={250}
            height={150}
            className="w-full h-full object-fill"
          />
        </div>

        {/* Middle Image */}
        <div className=" ">
          <Image
            src="/images/Prodct9.png"
            alt="Model Face"
            width={250}
            height={150}
            className="w-full h-full object-fill"
          />
        </div>

        {/* Right Image (Tall) */}
        <div className="  row-span-2">
          <Image
            src="/images/Prodct7.png"
            alt="Cream Container"
            width={400}
            height={150}
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

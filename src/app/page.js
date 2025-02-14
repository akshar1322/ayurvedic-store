import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/section/Hero";
import Spascsection from "./components/section/space";
import BestSellingSection from "./components/section/BestSellingSection";
import ScrollEffect from "./components/section/ScrollEffect";
import ImageSlider from "./components/layout/ImageSlider";
import Banner from "./components/ui/Banner";
import FloatingImagesSection from "./components/section/FloatingImagesSection";
import ContactUs from "./components/section/ContactUs";
export default function Home() {
  return (
    <>
    <main className=" overflow-hidden " >
    <Navbar/>
    <Hero/>
    <Spascsection
      heading="Discover Our Collection"
      paragraph={true}
      paragraphText="Explore our latest products with exclusive offers!"
      // heading="Shop Now" paragraph={false}
    />
    {/* <BestSellingSection/> */}
    <ScrollEffect/>
    <Spascsection
      heading="SHOP BY CATEGORY" paragraph={false}
    />
    <div className="h-full">
      <ImageSlider />
    </div>
    <Banner/>
    <Spascsection
      heading="REAL STORIES, REAL RESULTS" paragraph={false}
    />
    <FloatingImagesSection/>
    <ContactUs />
    <Footer/>
    </main>
    </>

  );
}

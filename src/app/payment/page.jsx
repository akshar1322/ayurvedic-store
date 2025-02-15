'use client';
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { QRCode } from "react-qrcode-logo";
import axios from "axios";
import { motion } from "framer-motion";
import gsap from "gsap";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const ThanksPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".thanks-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <motion.div
      className="thanks-container flex flex-col items-center justify-center min-h-screen bg-white text-[#8B5D48] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold">🎉 Payment Confirmed!</h1>
      <p className="mt-4 text-lg">Your order is waiting for the seller's approval.</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 bg-[#8B5D48] text-white rounded-lg shadow-lg"
        onClick={() => window.location.href = "/"}
      >
        Back to Home
      </motion.button>
    </motion.div>
  );
};

// Component to handle search params inside a Suspense boundary
const SearchParamsWrapper = ({ setProduct }) => {
  const searchParams = useSearchParams();
  const productData = searchParams.get("product");

  useEffect(() => {
    if (productData) {
      setProduct(JSON.parse(decodeURIComponent(productData)));
    }
  }, [productData, setProduct]);

  return null;
};

const PaymentPage = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [product, setProduct] = useState(null);

  const handlePayment = async () => {
    try {
      const { data } = await axios.get("https://api64.ipify.org?format=json");
      const ipAddress = data.ip;
      const timestamp = new Date().toLocaleString();

      const formData = {
        access_key: "38957aa0-5bd8-4f82-962f-0f29616e2064",
        subject: "New Order Payment Confirmation",
        from_name: "MyShop",
        email: address.email,
        message: `Order confirmed for
          Name: ${address.fullName}
          Email: ${address.email}
          Phone: ${address.phone}
          Address: ${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.state}, ${address.zipCode}
          Product: ${product?.name}
          Price: ₹${product?.price.toFixed(2)}
          Payment Method: ${paymentMethod}
          Date & Time: ${timestamp}
          IP Address: ${ipAddress}`,
      };

      await axios.post("https://api.web3forms.com/submit", formData);
      setIsPaymentConfirmed(true);
    } catch (error) {
      alert("Failed to send payment details!");
    }
  };

  if (isPaymentConfirmed) return <ThanksPage />;

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-white p-6">
        <Suspense fallback={<p>Loading...</p>}>
          <SearchParamsWrapper setProduct={setProduct} />
        </Suspense>

        {/* Step Navigation */}
        <div className="flex justify-between items-center mb-6">
          {["Address", "Product Info", "Verify", "Payment"].map((label, index) => (
            <div key={index} className={`px-4 py-2 rounded ${step === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}>
              {label}
            </div>
          ))}
        </div>

        {/* Payment Steps */}
        {step === 1 && (
          <form className="mb-6 text-[#8B5D48]">
            <h2 className="text-xl font-bold mb-4">Enter Your Address</h2>
            {["fullName", "email", "phone", "addressLine1", "city", "state", "zipCode"].map((field) => (
              <div key={field} className="mb-2">
                <input
                  type="text"
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={address[field]}
                  onChange={(e) => setAddress({ ...address, [e.target.name]: e.target.value })}
                  className="border border-[#8B5D48] rounded-md p-2 w-full"
                />
              </div>
            ))}
            <button type="button" onClick={() => setStep(2)} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Next</button>
          </form>
        )}

        {step === 2 && product && (
          <div className="mb-6 text-[#8B5D48]">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="border border-[#8B5D48] p-4 mb-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p>Price: ₹{product.price.toFixed(2)}</p>
            </div>
            <button onClick={() => setStep(3)} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="mb-6 text-[#8B5D48]">
            <h2 className="text-xl font-bold mb-4">Verify Your Address</h2>
            {Object.keys(address).map((key) =>
              key !== "addressLine2" || address[key] ? (
                <p key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1")}: </strong> {address[key]}
                </p>
              ) : null
            )}
            <button onClick={() => setStep(4)} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Next</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            <div className="flex gap-4 mb-4">
              {["UPI", "Card"].map((method) => (
                <button
                  key={method}
                  className={`px-4 py-2 rounded ${paymentMethod === method ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}
                  onClick={() => setPaymentMethod(method)}
                >
                  Pay via {method}
                </button>
              ))}
            </div>

            {paymentMethod === "UPI" && (
              <div>
                <p className="mb-2">Scan this QR Code to pay:</p>
                <QRCode value="upi://pay?pa=your-upi-id@upi&pn=MyShop&am=100&cu=INR" size={150} />
              </div>
            )}

            <button onClick={handlePayment} className="bg-green-600 text-white px-4 py-2 rounded mt-4">
              Confirm Payment
            </button>
          </div>
        )}

        {step > 1 && <button onClick={() => setStep(step - 1)} className="bg-gray-600 text-white px-4 py-2 rounded mt-4">Back</button>}
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;

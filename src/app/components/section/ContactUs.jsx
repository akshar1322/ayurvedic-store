"use client";
import { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("access_key", "your-web3forms-access-key");
    formData.append("email", email);
    formData.append("subscribe", subscribe ? "Yes" : "No");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setMessage("Thank you for subscribing!");
      setEmail("");
      setSubscribe(false);
    } else {
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="border border-gray-500 w-[90rem] p-20 relative bg-transparent">
        {/* Heading (Top Right) */}
        <h2 className="text-left text-5xl font-bold text-gray-700">
          GET INSIDER ACCESS: <br />
          SUBSCRIBE FOR TIPS, OFFERS AND MORE
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-40">
          {/* Email Input */}
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Enter Your Email *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-gray-500 p-2 outline-none bg-transparent text-gray-700"
          />

          {/* Checkbox */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={subscribe}
              onChange={() => setSubscribe(!subscribe)}
              className="w-4 h-4 mr-2"
            />
            <label className="text-gray-700 text-sm">
              Yes, subscribe me to your newsletter.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 border border-gray-500 px-10 py-2 text-gray-700 hover:bg-gray-700 hover:text-white transition"
          >
            Submit
          </button>

          {/* Success Message */}
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;



"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

import "react-toastify/dist/ReactToastify.css";

const ContacPage = ({ ref }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          alert("Submitted Successfully");
          setFormData({
            email: "",
            name: "",
            phone: "",
            message: "",
          });
        },
        () => {
          setIsSubmitting(false);
          alert("Submission failed");
        }
      );
  };

  return (
    <div className="min-h-screen  mt-20 bg-white p-6" ref={ref} id='Contact-page'>
      <div  className="max-w-7xl mx-auto  mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-500">Get In Touch</h2>
          <p className="text-gray-500">
          MicroThinks drives hotel growth with tailored digital solutions
          and expert support to maximize your online presence and revenue.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full shadow-lg">
              <Icon icon="mdi-light:phone" className="h-5 w-5 " />
                <i className="text-[#1F2456] fas fa-phone"></i>
              </div>
              <span className="text-gray-500">+92 308 4512116</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full shadow-lg">
              <Icon icon="fluent:mail-16-regular" className="h-5 w-5 " />
                <i className="text-[#1F2456]fas fa-envelope"></i>
              </div>
              <span className="text-gray-500">info@microthinks.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full shadow-lg">
              <Icon
              icon="fluent:location-16-regular"
              className="h-5 w-5 "
            />
                <i className="text-[#1F2456] fas fa-map-marker-alt"></i>
              </div>
              <span className="text-gray-500">Pakistan, Lahore</span>
            </div>
          </div>
          <div className="flex space-x-4 pt-6">
            <i className="fab fa-facebook-f text-white hover:text-orange-500  transition-transform transform hover:scale-125"></i>
            <i className="fab fa-twitter text-white hover:text-orange-500 transition-transform transform hover:scale-125"></i>
            <i className="fab fa-instagram text-white hover:text-orange-500 transition-transform transform hover:scale-125"></i>
          </div>
        </div>

        {/* Form Section */}
        <form
          className="bg-[#1F2456] rounded-xl shadow-xl p-8 space-y-4 border border-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none hover:shadow-md transition"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none hover:shadow-md transition"
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none hover:shadow-md transition"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500  focus:outline-none hover:shadow-md transition"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full  rounded-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 px-6 shadow-lg hover:from-orange-600 hover:to-orange-500 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-transform transform hover:scale-105"
            disabled={isSubmitting}
          >
            <i className="fas fa-paper-plane mr-2"></i>
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContacPage;


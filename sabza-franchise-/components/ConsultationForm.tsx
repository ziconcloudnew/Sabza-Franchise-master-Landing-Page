"use client";


import React, { useState } from "react";
import axios from "axios"
import { Download, Calendar, Clock, User, Mail, Phone } from "lucide-react"


const ConsultationForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    phone : "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://app-alb-232255282.us-east-1.elb.amazonaws.com/api/contact/token_swapping", {
        formData,
        lead: "Sabza Franchise",
        org: "SABZA",
        source:"Consultation Form" 
      });
      console.log("Server response:", response.data);

      setFormData({ name: "", email: "", phone: "", message: "", });
      alert("Thank you for your interest! We will contact you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
       {/* Floating Button (Box Style) */}
  <button
  onClick={() => setOpen(true)}
  className="group fixed right-6 bottom-6 bg-green-600 text-white h-12 w-12 rounded-full shadow-lg 
             flex items-center justify-center 
             transition-all duration-300 overflow-hidden 
             hover:w-56 hover:rounded-xl"
>
  {/* Emoji only when not hovered */}
  <span className="text-lg group-hover:hidden">💬</span>

  {/* Text only when hovered */}
  <span className="ml-2 hidden group-hover:inline-block whitespace-nowrap">
    Book a Consultation
  </span>
</button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 h-[600px] w-[450px] relative overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-center mb-4">
              Book a Consultation
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              Fill out the form below and our team will get back to you.
            </p>

            <form className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <User className="h-4 w-4 mr-2 text-[#8694b5]" /> Full Name
                  </label>
                  <input
                    type="text"
                    name= "name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <Mail className="h-4 w-4 mr-2 text-[#8694b5]" /> Email Address
                  </label>
                  <input
                    type="email"
                    name= "email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <Phone className="h-4 w-4 mr-2 text-[#8694b5]" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name= "phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 0000000"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-[#8694b5]" /> Preferred Date
                  </label>
                  <input
                    name= "date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    type="date"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <Clock className="h-4 w-4 mr-2 text-[#8694b5]" /> Preferred Time
                  </label>
                  <input
                    type="time"
                    name= "time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Your Message (optional)"
                    name= "message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#8694b5] text-white py-3 rounded-lg font-semibold hover:bg-[#7a87a7] transition-colors"
                  onClick={handleSubmit}
                >
                  Submit Request
                </button>
              </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationForm;

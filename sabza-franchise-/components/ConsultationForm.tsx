"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConsultationForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact/sabza_fran", {
        formData,
        lead: "Consultation Form",
        source: "Website",
        org: "SABZA",
      });

      console.log("Server response:", response.data);
      alert("Thank you! We’ll contact you soon for your consultation.");

      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        phone: "",
        message: "",
      });

      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group fixed right-6 bottom-6 bg-green-600 text-white h-12 w-12 rounded-full shadow-lg 
                   flex items-center justify-center transition-all duration-300 overflow-hidden 
                   hover:w-56 hover:rounded-xl"
      >
        <span className="text-lg group-hover:hidden">💬</span>
        <span className="ml-2 hidden group-hover:inline-block whitespace-nowrap">
          Book a Consultation
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-h-[90vh] w-[450px] relative overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>

            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">
                  Schedule a Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                  <Input
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px]"
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Book Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

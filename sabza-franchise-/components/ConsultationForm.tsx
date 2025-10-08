"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ConsultationForm() {
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
      const response = await axios.post(
        "http://app-alb-232255282.us-east-1.elb.amazonaws.com/api/contact/sabza_fran",
        {
          formData,
          lead: "Consultation Form",
          source: "Website",
          org: "SABZA",
        }
      );

      console.log("Server response:", response.data);
      alert("Thank you! We’ll contact you soon for your consultation.");

      // ✅ Reset all fields properly (including date/time)
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <Card className="border-2 border-secondary/20">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">
          Schedule a Consultation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <Input
            name="phone"
            type="tel"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="min-h-[120px]"
          />

          <Button type="submit" className="w-full" size="lg">
            Book Consultation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

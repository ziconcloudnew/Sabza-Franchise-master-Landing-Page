"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Globe, MapPin } from "lucide-react"
import axios from "axios"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://app-alb-1232706876.us-east-1.elb.amazonaws.com/api/contact/sabza_fran", {
        formData,
        lead: "Sabza Franchise", 
        source: "Contact Form",
        org: "SABZA"
      });
      console.log("Server response:", response.data);

      setFormData({ name: "", email: "", company: "", message: "" });
      alert("Thank you for your interest! We will contact you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
       <span className="text-secondary">Get Involved</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Join us in building the world's first decentralized carbon credit franchise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email</h3>
                      <a href="mailto:invest@sabza.earth" className="text-secondary hover:underline">
                        invest@sabza.earth
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Website</h3>
                      <a href="https://www.sabza.earth" className="text-secondary hover:underline">
                        www.sabza.earth
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Headquarters</h3>
                      <p className="text-muted">Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Input
                    name="company"
                    placeholder="Company/Organization"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your interest in SABZA..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full min-h-[120px] text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

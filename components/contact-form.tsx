"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Check, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "demo",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState("submitting");

    // Simulate API call
    setTimeout(() => {
      // 90% chance of success for demo purposes
      if (Math.random() > 0.1) {
        setFormState("success");
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            interest: "demo",
          });
          setFormState("idle");
        }, 3000);
      } else {
        setFormState("error");
      }
    }, 1500);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-700 rounded-full opacity-5 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500 rounded-full opacity-5 -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            CONTACT US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about DigiPOS? Our team is here to help you find the
            perfect solution for your restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image and Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <Image
                src="/ipad.png"
                alt="Restaurant staff using DigiPOS"
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to transform your restaurant?
                  </h3>
                  <p className="text-indigo-100">
                    Join thousands of restaurants worldwide who trust DigiPOS to
                    streamline their operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ContactInfoCard
                icon={<Phone className="h-5 w-5" />}
                title="Call Us"
                details={["+966 137 273 040", "+973 175 824 85"]}
                delay={0.3}
              />
              <ContactInfoCard
                icon={<Mail className="h-5 w-5" />}
                title="Email Us"
                details={["info@digipos.com", "support@digipos.com"]}
                delay={0.4}
              />
              <ContactInfoCard
                icon={<MapPin className="h-5 w-5" />}
                title="Visit Us"
                details={["123 Business Avenue", "Riyadh, Saudi Arabia"]}
                delay={0.5}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/50 backdrop-blur-md border border-white/50 shadow-xl rounded-xl p-8"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Your message has been received. Our team will get back to you
                  within 24 hours.
                </p>
                <div className="text-sm text-gray-500">
                  Redirecting back to form...
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={`mt-1 ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`mt-1 ${
                          errors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700">
                        Phone Number (Optional)
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-700">I'm interested in:</Label>
                    <RadioGroup
                      value={formData.interest}
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-1 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="demo" id="demo" />
                        <Label htmlFor="demo" className="cursor-pointer">
                          Scheduling a demo
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pricing" id="pricing" />
                        <Label htmlFor="pricing" className="cursor-pointer">
                          Pricing information
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="support" id="support" />
                        <Label htmlFor="support" className="cursor-pointer">
                          Technical support
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="cursor-pointer">
                          Something else
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your restaurant and how we can help..."
                      className={`mt-1 min-h-[120px] ${
                        errors.message
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : formState === "error" ? (
                      <span className="flex items-center justify-center">
                        Try Again
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  {formState === "error" && (
                    <p className="mt-2 text-sm text-red-600 text-center">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({
  icon,
  title,
  details,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  details: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="bg-white/40 backdrop-blur-sm border border-white/50 shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
    >
      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-3">
        {icon}
      </div>
      <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
      <div className="text-gray-600 text-sm">
        {details.map((detail, index) => (
          <div key={index} className="mb-1">
            {detail}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

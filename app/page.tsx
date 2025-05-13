import ClienteleSection from "@/components/clientele-section";
import ContactForm from "@/components/contact-form";
import DeviceCompatibility from "@/components/device-compatibility";
import FeaturesBentoGrid from "@/components/features-bento-grid";
import HeroVideo from "@/components/hero-video";
import IntegrationsMarquee from "@/components/integrations-marquee";
import InteractiveBentoGrid from "@/components/interactive-bento-grid";
import MegaMenu from "@/components/mega-menu";
import SiteFooter from "@/components/site-footer";
import TestimonialSlider from "@/components/testimonial-slider";
import { Button } from "@/components/ui/button";
import { Globe, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-indigo-900 text-white py-2 px-4 text-center text-sm md:flex md:justify-center md:space-x-8 hidden">
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center">
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>
              Saudi Arabia{" "}
              <span className="font-semibold">+966 137 273 040</span>
            </span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>
              Bahrain <span className="font-semibold">+973 175 824 85</span>
            </span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>
              Pakistan <span className="font-semibold">+92 310 055 7999</span>
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation with Mega Menu */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo.png"
                  alt="DigiPOS Logo"
                  width={150}
                  height={40}
                  className="block h-10 w-auto"
                />
              </Link>
              <div className="hidden sm:ml-10 sm:flex">
                <MegaMenu />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 rounded-full p-1 text-gray-700">
                <Globe className="h-4 w-4 ml-1" />
                <span className="text-sm font-medium mx-1">EN</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-24 pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-700 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* New feature badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-700 text-white rounded-full py-1 px-4 flex items-center space-x-2 text-sm">
              <span className="font-semibold">New</span>
              <span className="mx-2">
                We've just released ZATCA e-Invoice integration
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Boost Your{" "}
              <span className="text-indigo-700">Restaurant Management</span>,
              <br />
              Simplify Your <span className="text-orange-500">Business</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              We're here to simplify the complexities of restaurant operations,
              providing a user-friendly platform that not only manages your
              tasks effortlessly but also enhances your overall efficiency.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-6 text-base rounded-full">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 text-base rounded-full"
              >
                Preview Platform
              </Button>
            </div>
          </div>

          {/* Hero Video */}
          <HeroVideo />
        </div>
      </section>

      {/* Interactive Bento Grid */}
      <section className="py-16 bg-white">
        <InteractiveBentoGrid />
      </section>

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Clientele Section */}
      <ClienteleSection />

      {/* Features Bento Grid */}
      <FeaturesBentoGrid />

      {/* Integrations Marquee */}
      <IntegrationsMarquee />

      {/* Device Compatibility */}
      <DeviceCompatibility />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}

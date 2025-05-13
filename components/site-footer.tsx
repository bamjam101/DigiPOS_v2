import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 text-gray-800 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-700 rounded-full opacity-5 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500 rounded-full opacity-5 -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="DigiPOS Logo" width={60} height={60} className="rounded-md" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              DigiPOS is a versatile, cloud-based Point of Sale (POS) system catering to the hospitality and retail
              sectors, offering both online and offline functionality.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative text-gray-900">
              Products
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/products/cloud-pos">Cloud POS</FooterLink>
              <FooterLink href="/products/waiter-tab">Waiter Tab</FooterLink>
              <FooterLink href="/products/digikds">DigiKDS</FooterLink>
              <FooterLink href="/products/kiosk">KIOSK</FooterLink>
              <FooterLink href="/products/inventory-management">Inventory Management</FooterLink>
              <FooterLink href="/products">View All Products</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative text-gray-900">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/partner">Become a Partner</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative text-gray-900">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-gray-600">123 Business Avenue, Tech District, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="ml-3 text-gray-600">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="ml-3 text-gray-600">info@digipos.com</span>
              </li>
            </ul>
            <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white">Book a Demo</Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2025 DigiPOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-gray-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-gray-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="/consumer-protection" className="text-gray-500 text-sm hover:text-gray-800 transition-colors">
              Consumer Protection
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/80 hover:bg-indigo-100 text-indigo-600 p-2 rounded-full transition-colors shadow-sm border border-gray-100"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-600 hover:text-indigo-700 transition-colors">
        {children}
      </Link>
    </li>
  )
}

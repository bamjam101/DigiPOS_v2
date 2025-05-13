"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Monitor,
  Smartphone,
  Printer,
  Scan,
  ShoppingBag,
  Coffee,
  Utensils,
  FileText,
  BarChart3,
  ShoppingCart,
  Package,
  Truck,
  Users,
  CreditCard,
  Receipt,
  Tablet,
  Layers,
  FileSpreadsheet,
  Tv,
  Scissors,
  Flower,
  ShoppingBasket,
  Building,
  Pill,
  Shirt,
} from "lucide-react"

type MenuCategory = "products" | "hardware" | "businessTypes" | "marketplace" | null

export default function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveCategory(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleCategory = (category: MenuCategory) => {
    if (activeCategory === category) {
      setActiveCategory(null)
    } else {
      setActiveCategory(category)
    }
  }

  return (
    <div ref={menuRef} className="relative">
      <div className="flex items-center space-x-1 md:space-x-6">
        {/* Products */}
        <div className="relative">
          <button
            onClick={() => toggleCategory("products")}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === "products" ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            Products
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${activeCategory === "products" ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Hardware */}
        <div className="relative">
          <button
            onClick={() => toggleCategory("hardware")}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === "hardware" ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            Hardware
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${activeCategory === "hardware" ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Business Types */}
        <div className="relative">
          <button
            onClick={() => toggleCategory("businessTypes")}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === "businessTypes" ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            Business Types
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${activeCategory === "businessTypes" ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Marketplace */}
        <div className="relative">
          <button
            onClick={() => toggleCategory("marketplace")}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === "marketplace" ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            Marketplace
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${activeCategory === "marketplace" ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Become a Partner */}
        <Link
          href="/partner"
          className="hidden md:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-700"
        >
          Become a Partner
        </Link>

        {/* Pricing */}
        <Link
          href="/pricing"
          className="hidden md:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-700"
        >
          Pricing
        </Link>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
            style={{ width: "900px" }}
          >
            {activeCategory === "products" && <ProductsMenu />}
            {activeCategory === "hardware" && <HardwareMenu />}
            {activeCategory === "businessTypes" && <BusinessTypesMenu />}
            {activeCategory === "marketplace" && <MarketplaceMenu />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProductsMenu() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {/* Front Office */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">FRONT OFFICE</h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<Monitor className="h-5 w-5 text-orange-500" />}
            title="Cloud Point of Sales"
            description="Powerful point of sale system for all business types."
          />
          <MenuItem
            icon={<Tablet className="h-5 w-5 text-orange-500" />}
            title="Waiter Tab"
            description="Mobile ordering solution for efficient table service."
          />
          <MenuItem
            icon={<Layers className="h-5 w-5 text-orange-500" />}
            title="DigiKDS - Kitchen Display System"
            description="Kitchen display system for streamlined operations."
          />
          <MenuItem
            icon={<Monitor className="h-5 w-5 text-orange-500" />}
            title="Customer Display"
            description="Interactive display for enhanced customer experience."
          />
          <MenuItem
            icon={<Smartphone className="h-5 w-5 text-orange-500" />}
            title="KIOSK"
            description="Self-service kiosk for customer ordering and payment."
          />
          <MenuItem
            icon={<Utensils className="h-5 w-5 text-orange-500" />}
            title="Table Ordering"
            description="Digital menu and ordering system for table service."
          />
          <MenuItem
            icon={<ShoppingBag className="h-5 w-5 text-orange-500" />}
            title="Online Ordering"
            description="Custom branded online ordering platform for takeout and delivery."
          />
          <MenuItem
            icon={<Users className="h-5 w-5 text-orange-500" />}
            title="Queue Management System"
            description="Digital queue system for efficient customer flow management."
          />
        </ul>
      </div>

      {/* Back Office */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">BACK OFFICE</h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<FileText className="h-5 w-5 text-orange-500" />}
            title="Product & Menu Management"
            description="Comprehensive menu and product management tools."
          />
          <MenuItem
            icon={<FileSpreadsheet className="h-5 w-5 text-orange-500" />}
            title="Recipe Management"
            description="Detailed recipe tracking and cost analysis."
          />
          <MenuItem
            icon={<Package className="h-5 w-5 text-orange-500" />}
            title="Inventory Management"
            description="Real-time inventory tracking and management."
          />
          <MenuItem
            icon={<Truck className="h-5 w-5 text-orange-500" />}
            title="Purchase & Supply Chain Management"
            description="Streamlined purchasing and vendor management."
          />
        </ul>
      </div>

      {/* Retail */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">RETAIL</h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<BarChart3 className="h-5 w-5 text-orange-500" />}
            title="Cloud Point of Sales"
            description="In-depth sales analysis and performance tracking for retail."
          />
        </ul>
      </div>
    </div>
  )
}

function HardwareMenu() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div>
        <ul className="space-y-4">
          <MenuItem
            icon={<Monitor className="h-5 w-5 text-orange-500" />}
            title="POS Terminals (Available Models)"
            description="Reliable hardware solutions for your business."
          />
          <MenuItem
            icon={<Smartphone className="h-5 w-5 text-orange-500" />}
            title="Self-Ordering Kiosks"
            description="Self-service kiosks to reduce wait times."
          />
          <MenuItem
            icon={<Tv className="h-5 w-5 text-orange-500" />}
            title="KDS Screens"
            description="Kitchen display screens for order management."
          />
          <MenuItem
            icon={<Tablet className="h-5 w-5 text-orange-500" />}
            title="Tablets (iOS & Android)"
            description="Mobile solutions for staff and customer interactions."
          />
        </ul>
      </div>
      <div>
        <ul className="space-y-4">
          <MenuItem
            icon={<Smartphone className="h-5 w-5 text-orange-500" />}
            title="Handheld Devices"
            description="Portable devices for mobile ordering and payments."
          />
          <MenuItem
            icon={<Printer className="h-5 w-5 text-orange-500" />}
            title="Printers"
            description="Receipt and kitchen printers for all needs."
          />
          <MenuItem
            icon={<ShoppingCart className="h-5 w-5 text-orange-500" />}
            title="Cash Drawers"
            description="Secure cash management solutions."
          />
          <MenuItem
            icon={<Scan className="h-5 w-5 text-orange-500" />}
            title="Bar Code Scanners"
            description="Fast and accurate barcode scanning solutions."
          />
        </ul>
      </div>
    </div>
  )
}

function BusinessTypesMenu() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* Restaurants */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">RESTAURANTS</h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<Coffee className="h-5 w-5 text-orange-500" />}
            title="Café & Bakery"
            description="Tailored solutions for cafes and bakeries."
          />
          <MenuItem
            icon={<ShoppingBag className="h-5 w-5 text-orange-500" />}
            title="Quick Service"
            description="Fast and efficient solutions for QSR operations."
          />
          <MenuItem
            icon={<Truck className="h-5 w-5 text-orange-500" />}
            title="Kiosks & Food Trucks"
            description="Mobile solutions for food trucks and kiosks."
          />
          <MenuItem
            icon={<Utensils className="h-5 w-5 text-orange-500" />}
            title="Dine-In Service Restaurants"
            description="Comprehensive systems for table service restaurants."
          />
        </ul>
      </div>

      {/* Retail */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">RETAIL</h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<Pill className="h-5 w-5 text-orange-500" />}
            title="Pharmacy"
            description="Specialized solutions for pharmacy retail."
          />
          <MenuItem
            icon={<Shirt className="h-5 w-5 text-orange-500" />}
            title="Laundry"
            description="Management systems for laundry services."
          />
          <MenuItem
            icon={<Shirt className="h-5 w-5 text-orange-500" />}
            title="Garments"
            description="Retail solutions for garment stores."
          />
          <MenuItem
            icon={<Shirt className="h-5 w-5 text-orange-500" />}
            title="Apparel"
            description="POS systems for apparel and fashion retail."
          />
          <MenuItem
            icon={<Flower className="h-5 w-5 text-orange-500" />}
            title="Flower Shop"
            description="Specialized solutions for florists."
          />
          <MenuItem
            icon={<Scissors className="h-5 w-5 text-orange-500" />}
            title="Salon"
            description="Management systems for salons and spas."
          />
          <MenuItem
            icon={<ShoppingBasket className="h-5 w-5 text-orange-500" />}
            title="Supermarket"
            description="Comprehensive POS for supermarkets and grocery stores."
          />
        </ul>
      </div>
    </div>
  )
}

function MarketplaceMenu() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <ul className="space-y-4">
        <MenuItem
          icon={<Receipt className="h-5 w-5 text-orange-500" />}
          title="Zatca E-Invoicing"
          description="Compliant e-invoicing for Saudi regulations."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Geidia"
          description="Integrated payment processing solution."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="NamiPay"
          description="Seamless payment processing integration."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Neoleap"
          description="Modern payment solutions for businesses."
        />
      </ul>
      <ul className="space-y-4">
        <MenuItem
          icon={<Truck className="h-5 w-5 text-orange-500" />}
          title="Deliverect"
          description="Delivery platform integration for restaurants."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Qlub"
          description="Digital payment solutions for restaurants."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="MyFatoora"
          description="Comprehensive payment gateway integration."
        />
        <MenuItem
          icon={<Building className="h-5 w-5 text-orange-500" />}
          title="ERPNext"
          description="Enterprise resource planning integration."
        />
      </ul>
      <ul className="space-y-4">
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Credimax"
          description="Credit card payment processing solution."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Hyperpay"
          description="Online payment gateway integration."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="BenefitPay"
          description="Mobile payment solution integration."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Ingenico"
          description="Payment terminal integration solutions."
        />
      </ul>
    </div>
  )
}

function MenuItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <li>
      <Link href={`/${title.toLowerCase().replace(/\s+/g, "-")}`} className="group flex items-start">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div className="ml-3">
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-700">{title}</p>
            <ChevronDown className="ml-1 h-3 w-3 text-gray-500 rotate-270" />
          </div>
          <p className="mt-1 text-xs text-gray-500">{description}</p>
        </div>
      </Link>
    </li>
  )
}

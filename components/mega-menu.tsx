"use client";

import type React from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Building,
  ChevronDown,
  Coffee,
  CreditCard,
  FileSpreadsheet,
  FileText,
  Flower,
  Layers,
  Monitor,
  Package,
  Pill,
  Printer,
  Receipt,
  Scan,
  Scissors,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Smartphone,
  Tablet,
  Truck,
  Tv,
  Users,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuCategory =
  | "products"
  | "hardware"
  | "businessTypes"
  | "marketplace"
  | null;

export default function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveCategory(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCategory = (category: MenuCategory) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div ref={menuRef} className="relative">
      <div className="flex items-center space-x-1 md:space-x-6">
        {/* Products */}
        <div className="relative">
          <button
            onClick={() => toggleCategory("products")}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === "products"
                ? "text-indigo-700"
                : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            Products
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                activeCategory === "products" ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Hardware */}
        <div className="relative">
          <button
            onClick={() => toggleCategory("hardware")}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === "hardware"
                ? "text-indigo-700"
                : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            Hardware
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                activeCategory === "hardware" ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Business Types */}
        <div className="relative">
          <button
            onClick={() => toggleCategory("businessTypes")}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === "businessTypes"
                ? "text-indigo-700"
                : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            Business Types
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                activeCategory === "businessTypes" ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Marketplace */}
        <div className="relative">
          <button
            onClick={() => toggleCategory("marketplace")}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === "marketplace"
                ? "text-indigo-700"
                : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            Marketplace
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                activeCategory === "marketplace" ? "rotate-180" : ""
              }`}
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
  );
}

function ProductsMenu() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {/* Front Office */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          FRONT OFFICE
        </h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<Monitor className="h-5 w-5 text-orange-500" />}
            title="Cloud Point of Sales"
            slug="cloud-pos"
            description="Powerful point of sale system for all business types."
          />
          <MenuItem
            icon={<Tablet className="h-5 w-5 text-orange-500" />}
            title="Waiter Tab"
            slug="waiter-tab"
            description="Mobile ordering solution for efficient table service."
          />
          <MenuItem
            icon={<Layers className="h-5 w-5 text-orange-500" />}
            title="DigiKDS - Kitchen Display System"
            slug="digikds"
            description="Kitchen display system for streamlined operations."
          />
          <MenuItem
            icon={<Monitor className="h-5 w-5 text-orange-500" />}
            title="Customer Display"
            slug="customer-display"
            description="Interactive display for enhanced customer experience."
          />
          <MenuItem
            icon={<Smartphone className="h-5 w-5 text-orange-500" />}
            title="KIOSK"
            slug="kiosk"
            description="Self-service kiosk for customer ordering and payment."
          />
          <MenuItem
            icon={<Utensils className="h-5 w-5 text-orange-500" />}
            title="Table Ordering"
            slug="table-ordering"
            description="Digital menu and ordering system for table service."
          />
          <MenuItem
            icon={<ShoppingBag className="h-5 w-5 text-orange-500" />}
            title="Online Ordering"
            slug="online-ordering"
            description="Custom branded online ordering platform for takeout and delivery."
          />
          <MenuItem
            icon={<Users className="h-5 w-5 text-orange-500" />}
            title="Queue Management System"
            slug="queue-management-system"
            description="Digital queue system for efficient customer flow management."
          />
        </ul>
      </div>

      {/* Back Office */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          BACK OFFICE
        </h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<FileText className="h-5 w-5 text-orange-500" />}
            title="Product & Menu Management"
            slug="product-menu-management"
            description="Comprehensive menu and product management tools."
          />
          <MenuItem
            icon={<FileSpreadsheet className="h-5 w-5 text-orange-500" />}
            title="Recipe Management"
            slug="recipe-management"
            description="Detailed recipe tracking and cost analysis."
          />
          <MenuItem
            icon={<Package className="h-5 w-5 text-orange-500" />}
            title="Inventory Management"
            slug="inventory-management"
            description="Real-time inventory tracking and management."
          />
          <MenuItem
            icon={<Truck className="h-5 w-5 text-orange-500" />}
            title="Purchase & Supply Chain Management"
            slug="purchase-supply-chain-management"
            description="Streamlined purchasing and vendor management."
          />
        </ul>
      </div>

      {/* Retail */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          RETAIL
        </h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<BarChart3 className="h-5 w-5 text-orange-500" />}
            title="Cloud Point of Sales"
            slug="retail-pos"
            description="In-depth sales analysis and performance tracking for retail."
          />
        </ul>
      </div>
    </div>
  );
}

function HardwareMenu() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div>
        <ul className="space-y-4">
          <MenuItem
            icon={<Monitor className="h-5 w-5 text-orange-500" />}
            title="POS Terminals (Available Models)"
            slug="pos-terminals"
            description="Reliable hardware solutions for your business."
          />
          <MenuItem
            icon={<Smartphone className="h-5 w-5 text-orange-500" />}
            title="Self-Ordering Kiosks"
            slug="self-ordering-kiosks"
            description="Self-service kiosks to reduce wait times."
          />
          <MenuItem
            icon={<Tv className="h-5 w-5 text-orange-500" />}
            title="KDS Screens"
            slug="kds-screens"
            description="Kitchen display screens for order management."
          />
          <MenuItem
            icon={<Tablet className="h-5 w-5 text-orange-500" />}
            title="Tablets (iOS & Android)"
            slug="tablets"
            description="Mobile solutions for staff and customer interactions."
          />
        </ul>
      </div>
      <div>
        <ul className="space-y-4">
          <MenuItem
            icon={<Smartphone className="h-5 w-5 text-orange-500" />}
            title="Handheld Devices"
            slug="handheld-devices"
            description="Portable devices for mobile ordering and payments."
          />
          <MenuItem
            icon={<Printer className="h-5 w-5 text-orange-500" />}
            title="Printers"
            slug="printers"
            description="Receipt and kitchen printers for all needs."
          />
          <MenuItem
            icon={<ShoppingCart className="h-5 w-5 text-orange-500" />}
            title="Cash Drawers"
            slug="cash-drawers"
            description="Secure cash management solutions."
          />
          <MenuItem
            icon={<Scan className="h-5 w-5 text-orange-500" />}
            title="Bar Code Scanners"
            slug="barcode-scanners"
            description="Fast and accurate barcode scanning solutions."
          />
        </ul>
      </div>
    </div>
  );
}

function BusinessTypesMenu() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* Restaurants */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          RESTAURANTS
        </h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<Coffee className="h-5 w-5 text-orange-500" />}
            title="Café & Bakery"
            slug="cafe-bakery"
            description="Tailored solutions for cafes and bakeries."
          />
          <MenuItem
            icon={<ShoppingBag className="h-5 w-5 text-orange-500" />}
            title="Quick Service"
            slug="quick-service"
            description="Fast and efficient solutions for QSR operations."
          />
          <MenuItem
            icon={<Truck className="h-5 w-5 text-orange-500" />}
            title="Kiosks & Food Trucks"
            slug="kiosks-food-trucks"
            description="Mobile solutions for food trucks and kiosks."
          />
          <MenuItem
            icon={<Utensils className="h-5 w-5 text-orange-500" />}
            title="Dine-In Service Restaurants"
            slug="dine-in-restaurants"
            description="Comprehensive systems for table service restaurants."
          />
        </ul>
      </div>

      {/* Retail */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          RETAIL
        </h3>
        <ul className="space-y-4">
          <MenuItem
            icon={<Pill className="h-5 w-5 text-orange-500" />}
            title="Pharmacy"
            slug="pharmacy"
            description="Specialized solutions for pharmacy retail."
          />
          <MenuItem
            icon={<Shirt className="h-5 w-5 text-orange-500" />}
            title="Laundry"
            slug="laundry"
            description="Management systems for laundry services."
          />
          <MenuItem
            icon={<Shirt className="h-5 w-5 text-orange-500" />}
            title="Garments"
            slug="garments"
            description="Retail solutions for garment stores."
          />
          <MenuItem
            icon={<Shirt className="h-5 w-5 text-orange-500" />}
            title="Apparel"
            slug="apparel"
            description="POS systems for apparel and fashion retail."
          />
          <MenuItem
            icon={<Flower className="h-5 w-5 text-orange-500" />}
            title="Flower Shop"
            slug="flower-shop"
            description="Specialized solutions for florists."
          />
          <MenuItem
            icon={<Scissors className="h-5 w-5 text-orange-500" />}
            title="Salon"
            slug="salon"
            description="Management systems for salons and spas."
          />
          <MenuItem
            icon={<ShoppingBasket className="h-5 w-5 text-orange-500" />}
            title="Supermarket"
            slug="supermarket"
            description="Comprehensive POS for supermarkets and grocery stores."
          />
        </ul>
      </div>
    </div>
  );
}

function MarketplaceMenu() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <ul className="space-y-4">
        <MenuItem
          icon={<Receipt className="h-5 w-5 text-orange-500" />}
          title="Zatca E-Invoicing"
          slug="zatca-e-invoicing"
          description="Compliant e-invoicing for Saudi regulations."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Geidia"
          slug="geidia"
          description="Integrated payment processing solution."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="NamiPay"
          slug="namipay"
          description="Seamless payment processing integration."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Neoleap"
          slug="neoleap"
          description="Modern payment solutions for businesses."
        />
      </ul>
      <ul className="space-y-4">
        <MenuItem
          icon={<Truck className="h-5 w-5 text-orange-500" />}
          title="Deliverect"
          slug="deliverect"
          description="Delivery platform integration for restaurants."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Qlub"
          slug="qlub"
          description="Digital payment solutions for restaurants."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="MyFatoora"
          slug="myfatoora"
          description="Comprehensive payment gateway integration."
        />
        <MenuItem
          icon={<Building className="h-5 w-5 text-orange-500" />}
          title="ERPNext"
          slug="erpnext"
          description="Enterprise resource planning integration."
        />
      </ul>
      <ul className="space-y-4">
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Credimax"
          slug="credimax"
          description="Credit card payment processing solution."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Hyperpay"
          slug="hyperpay"
          description="Online payment gateway integration."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="BenefitPay"
          slug="benefitpay"
          description="Mobile payment solution integration."
        />
        <MenuItem
          icon={<CreditCard className="h-5 w-5 text-orange-500" />}
          title="Ingenico"
          slug="ingenico"
          description="Payment terminal integration solutions."
        />
      </ul>
    </div>
  );
}

function MenuItem({
  icon,
  title,
  slug,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  slug: string;
  description: string;
}) {
  return (
    <li>
      <Link href={`/products/${slug}`} className="group flex items-start">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div className="ml-3">
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-700">
              {title}
            </p>
            <ChevronDown className="ml-1 h-3 w-3 text-gray-500 rotate-270" />
          </div>
          <p className="mt-1 text-xs text-gray-500">{description}</p>
        </div>
      </Link>
    </li>
  );
}

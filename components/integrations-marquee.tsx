"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

// Integration platforms data
const integrations = [
  {
    name: "ZATCA E-Invoicing",
    color: "#0072C6",
    category: "E-Invoicing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/ZATCA_Logo.svg",
  },
  {
    name: "Geidea",
    color: "#FF6A00",
    category: "Payment Processing",
    logo: "https://play-lh.googleusercontent.com/4kYw0xqN9Yd3W1Zl6VZq1VY6VZq1VY6VZq1VY6VZq1VY6VZq1VY6VZq1VY6VZq1VY6VZq1=w240-h480",
  },
  {
    name: "NamiPay",
    color: "#6E00FF",
    category: "Payment Processing",
    logo: "https://play-lh.googleusercontent.com/4kYw0xqN9Yd3W1Zl6VZq1VY6VZq1VY6VZq1VY6VZq1VY6VZq1VY6VZq1VY6VZq1VY6VZq1=w240-h480",
  },
  {
    name: "Neoleap",
    color: "#00C2A8",
    category: "Payment Processing",
    logo: "https://www.neoleap.sa/assets/images/neoleap-logo.svg",
  },
  {
    name: "Deliverect",
    color: "#00C389",
    category: "Delivery Integration",
    logo: "https://seeklogo.com/images/D/deliverect-logo-495736B5D1-seeklogo.com.png",
  },
  {
    name: "Qlub",
    color: "#5C2D91",
    category: "Restaurant Payments",
    logo: "https://qlub.com/assets/images/logo.svg",
  },
  {
    name: "MyFatoorah",
    color: "#00AEEF",
    category: "Payment Gateway",
    logo: "https://www.myfatoorah.com/images/logo.png",
  },
  {
    name: "ERPNext",
    color: "#4B8BBE",
    category: "ERP",
    logo: "https://erpnext.com/files/erpnext-logo.svg",
  },
  {
    name: "Credimax",
    color: "#E60000",
    category: "Credit Card Processing",
    logo: "https://www.credimax.com.bh/images/logo.png",
  },
  {
    name: "Hyperpay",
    color: "#1A1F71",
    category: "Payment Gateway",
    logo: "https://www.hyperpay.com/assets/images/logo.svg",
  },
  {
    name: "BenefitPay",
    color: "#FF4B4B",
    category: "Mobile Payments",
    logo: "https://www.benefit.bh/images/benefitpay-logo.svg",
  },
  {
    name: "Ingenico",
    color: "#E60000",
    category: "Payment Terminals",
    logo: "https://www.ingenico.com/themes/custom/ingenico/logo.svg",
  },
];

// Split integrations into two rows
const firstRowIntegrations = integrations.filter((_, i) => i % 2 === 0);
const secondRowIntegrations = integrations.filter((_, i) => i % 2 === 1);

export default function IntegrationsMarquee() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-block bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
          INTEGRATIONS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Seamless Platform Connectivity
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          DigiPOS integrates with all your favorite tools and services to create
          a unified ecosystem for your restaurant business.
        </p>
      </div>

      <div className="relative">
        {/* First row - moves left */}
        <MarqueeRow
          integrations={firstRowIntegrations}
          direction="left"
          speed={20}
        />

        {/* Second row - moves right */}
        <MarqueeRow
          integrations={secondRowIntegrations}
          direction="right"
          speed={15}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <p className="text-gray-500 text-sm">
          And many more integrations available through our open API
        </p>
        <button className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
          View all integrations
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

function MarqueeRow({
  integrations,
  direction,
  speed,
}: {
  integrations: typeof firstRowIntegrations;
  direction: "left" | "right";
  speed: number;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  useAnimationFrame((time) => {
    // Don't animate if any logo is being hovered
    if (hoveredIndex !== null) return;

    const newPosition =
      direction === "left" ? position - speed * 0.05 : position + speed * 0.05;

    // Reset position when logos have moved enough to create a seamless loop
    if (direction === "left" && newPosition <= -100 * integrations.length) {
      setPosition(0);
    } else if (
      direction === "right" &&
      newPosition >= 100 * integrations.length
    ) {
      setPosition(0);
    } else {
      setPosition(newPosition);
    }
  });

  return (
    <div className="py-6 overflow-hidden">
      <div
        ref={rowRef}
        className="flex space-x-8"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {/* First set of logos */}
        {integrations.map((integration, index) => (
          <IntegrationLogo
            key={index}
            integration={integration}
            index={index}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}

        {/* Duplicate logos for infinite scroll effect */}
        {integrations.map((integration, index) => (
          <IntegrationLogo
            key={`dup1-${index}`}
            integration={integration}
            index={index + integrations.length}
            isHovered={hoveredIndex === index + integrations.length}
            onHover={() => setHoveredIndex(index + integrations.length)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}

        {/* Second duplicate for longer scrolling */}
        {integrations.map((integration, index) => (
          <IntegrationLogo
            key={`dup2-${index}`}
            integration={integration}
            index={index + integrations.length * 2}
            isHovered={hoveredIndex === index + integrations.length * 2}
            onHover={() => setHoveredIndex(index + integrations.length * 2)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}

function IntegrationLogo({
  integration,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  integration: (typeof integrations)[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  // Get category-specific icon
  const getCategoryIcon = () => {
    switch (integration.category) {
      case "payment":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "delivery":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
        );
      case "accounting":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "marketing":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "reservations":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className="flex-shrink-0 w-32 h-16 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-center overflow-hidden cursor-pointer"
      style={{
        boxShadow: isHovered
          ? `0 10px 25px -5px ${integration.color}40, 0 8px 10px -6px ${integration.color}30`
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <div
        className={`flex flex-col items-center justify-center transition-all duration-300 ${
          isHovered ? "" : "grayscale"
        }`}
      >
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-70"
          }`}
          style={{ color: integration.color }}
        >
          {getCategoryIcon()}
          <span className="ml-1.5 font-bold text-sm">{integration.name}</span>
        </div>
        {isHovered && (
          <div className="mt-1 text-xs text-gray-500">
            {integration.category.charAt(0).toUpperCase() +
              integration.category.slice(1)}
          </div>
        )}
      </div>
    </motion.div>
  );
}

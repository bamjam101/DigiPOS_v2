"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

// Integration platforms data
const integrations = [
  {
    name: "ZATCA E-Invoicing",
    color: "#0072C6",
    category: "E-Invoicing",
    logo: "https://digipos.io/assets/img/about/intg2.png",
  },
  {
    name: "Geidea",
    color: "#FF6A00",
    category: "Payment Processing",
    logo: "https://digipos.io/assets/img/about/intg3.png",
  },
  {
    name: "NamiPay",
    color: "#6E00FF",
    category: "Payment Processing",
    logo: "https://digipos.io/assets/img/about/intg4.png",
  },
  {
    name: "Neoleap",
    color: "#00C2A8",
    category: "Payment Processing",
    logo: "https://digipos.io/assets/img/about/intg5.png",
  },
  {
    name: "Deliverect",
    color: "#00C389",
    category: "Delivery Integration",
    logo: "https://digipos.io/assets/img/about/intg1.png",
  },
  // {
  //   name: "Qlub",
  //   color: "#5C2D91",
  //   category: "Restaurant Payments",
  //   logo: "https://qlub.com/assets/images/logo.svg",
  // },
  // {
  //   name: "MyFatoorah",
  //   color: "#00AEEF",
  //   category: "Payment Gateway",
  //   logo: "https://www.myfatoorah.com/images/logo.png",
  // },
  // {
  //   name: "ERPNext",
  //   color: "#4B8BBE",
  //   category: "ERP",
  //   logo: "https://erpnext.com/files/erpnext-logo.svg",
  // },
  // {
  //   name: "Credimax",
  //   color: "#E60000",
  //   category: "Credit Card Processing",
  //   logo: "https://www.credimax.com.bh/images/logo.png",
  // },
  // {
  //   name: "Hyperpay",
  //   color: "#1A1F71",
  //   category: "Payment Gateway",
  //   logo: "https://www.hyperpay.com/assets/images/logo.svg",
  // },
  // {
  //   name: "BenefitPay",
  //   color: "#FF4B4B",
  //   category: "Mobile Payments",
  //   logo: "https://www.benefit.bh/images/benefitpay-logo.svg",
  // },
  // {
  //   name: "Ingenico",
  //   color: "#E60000",
  //   category: "Payment Terminals",
  //   logo: "https://www.ingenico.com/themes/custom/ingenico/logo.svg",
  // },
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
  return (
    <motion.div
      className="flex-shrink-0 w-32 h-32 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 shadow-lg flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      style={{
        boxShadow: isHovered
          ? `0 10px 25px -5px ${integration.color}40, 0 8px 10px -6px ${integration.color}30`
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      {/* Logo Image */}
      <img
        src={integration.logo}
        alt={integration.name}
        className="w-16 h-16 object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://via.placeholder.com/64?text=Logo"; // Fallback image
        }}
      />

      {/* Integration Name */}
      <span
        className={`mt-2 text-sm font-bold transition-all duration-300 ${
          isHovered ? "text-gray-900" : "text-gray-600"
        }`}
      >
        {integration.name}
      </span>

      {/* Integration Category */}
      {isHovered && (
        <span className="mt-1 text-xs text-gray-500">
          {integration.category}
        </span>
      )}
    </motion.div>
  );
}

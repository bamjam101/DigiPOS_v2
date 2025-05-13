"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const logos = [
  {
    name: "McDonald's",
    color: "#ffbc0d",
    logo: "https://pngimg.com/uploads/mcdonalds/mcdonalds_PNG9.png",
  },
  {
    name: "Starbucks",
    color: "#00704A",
    logo: "https://pngimg.com/uploads/starbucks/starbucks_PNG9.png",
  },
  // {
  //   name: "Pizza Hut",
  //   color: "#ee3124",
  //   logo: "https://1000logos.net/wp-content/uploads/2017/03/Pizza-Hut-Logo.png",
  // },
  // {
  //   name: "Subway",
  //   color: "#008c15",
  //   logo: "https://pngimg.com/uploads/subway/subway_PNG22.png",
  // },
  {
    name: "KFC",
    color: "#e4002b",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo.png",
  },
  // {
  //   name: "Burger King",
  //   color: "#f5ebdc",
  //   logo: "https://purepng.com/public/uploads/large/purepng.com-burger-king-logologobrand-logoiconslogos-251519939091g1v1q.png",
  // },
  {
    name: "Domino's",
    color: "#0078ae",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
  },
  // {
  //   name: "Taco Bell",
  //   color: "#702082",
  //   logo: "https://brandslogos.com/wp-content/uploads/images/large/taco-bell-logo.png",
  // },
  // {
  //   name: "Wendy's",
  //   color: "#e2203d",
  //   logo: "https://www.pngall.com/wp-content/uploads/13/Wendys-Logo-PNG-Image.png",
  // },
  // {
  //   name: "Dunkin'",
  //   color: "#ff671f",
  //   logo: "https://logos-world.net/wp-content/uploads/2020/10/Dunkin-Logo.png",
  // },
  // {
  //   name: "Chipotle",
  //   color: "#451400",
  //   logo: "https://1000logos.net/wp-content/uploads/2017/03/Chipotle-Logo.png",
  // },
  // {
  //   name: "Olive Garden",
  //   color: "#844200",
  //   logo: "https://logos-world.net/wp-content/uploads/2020/11/Olive-Garden-Logo.png",
  // },
  // {
  //   name: "Chili's",
  //   color: "#e11b22",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Chili%27s_logo.svg",
  // },
  // {
  //   name: "Applebee's",
  //   color: "#c41230",
  //   logo: "https://logos-world.net/wp-content/uploads/2020/11/Applebees-Logo.png",
  // },
  // {
  //   name: "Outback",
  //   color: "#732a00",
  //   logo: "https://1000logos.net/wp-content/uploads/2020/09/Outback-Steakhouse-Logo.png",
  // },
  // {
  //   name: "Red Lobster",
  //   color: "#f01e28",
  //   logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/Red_Lobster_logo.svg",
  // },
];

export default function ClienteleSection() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-block bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
          ECOSYSTEM
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Interoperable Restaurant
          <br />
          Ecosystem
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Our platform integrates with leading restaurant chains and food
          service providers, ensuring seamless operations across your entire
          business network.
        </p>
      </div>

      <div className="relative">
        {/* First row - moves left */}
        <LogoRow logos={logos.slice(0, 8)} direction="left" speed={30} />

        {/* Second row - moves right */}
        <LogoRow
          logos={logos.reverse().slice(0, 8)}
          direction="right"
          speed={25}
        />
      </div>
    </div>
  );
}

function LogoRow({
  logos,
  direction,
  speed,
}: {
  logos: {
    name: string;
    color: string;
    logo: string;
  }[];
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
    if (direction === "left" && newPosition <= -100 * logos.length) {
      setPosition(0);
    } else if (direction === "right" && newPosition >= 100 * logos.length) {
      setPosition(0);
    } else {
      setPosition(newPosition);
    }
  });

  return (
    <div className="py-8 overflow-hidden">
      <div
        ref={rowRef}
        className="flex space-x-8"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <LogoItem
            key={index}
            logo={logo}
            index={index}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}

        {/* Duplicate logos for infinite scroll effect */}
        {logos.map((logo, index) => (
          <LogoItem
            key={`dup1-${index}`}
            logo={logo}
            index={index + logos.length}
            isHovered={hoveredIndex === index + logos.length}
            onHover={() => setHoveredIndex(index + logos.length)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}

        {/* Second duplicate for longer scrolling */}
        {logos.map((logo, index) => (
          <LogoItem
            key={`dup2-${index}`}
            logo={logo}
            index={index + logos.length * 2}
            isHovered={hoveredIndex === index + logos.length * 2}
            onHover={() => setHoveredIndex(index + logos.length * 2)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}

function LogoItem({
  logo,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  logo: (typeof logos)[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  // Generate initials from name
  const initials = logo.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      className="flex-shrink-0 w-28 h-28 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-center overflow-hidden cursor-pointer"
      style={{
        boxShadow: isHovered
          ? `0 10px 25px -5px ${logo.color}40, 0 8px 10px -6px ${logo.color}30`
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <div
        className={`w-20 h-20 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isHovered ? "" : "grayscale"
        }`}
        style={{
          backgroundColor: isHovered ? `${logo.color}20` : "transparent",
        }}
      >
        {/* Display logo image */}
        <img
          src={logo.logo}
          alt={logo.name}
          className="object-contain w-full h-full"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/80?text=Logo"; // Fallback image
          }}
        />
      </div>
    </motion.div>
  );
}

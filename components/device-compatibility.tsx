"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Apple, ArrowRight, Globe, Monitor, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type DeviceType = "ios" | "android" | "web" | "pos";

interface DeviceInfo {
  name: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  features: string[];
}

export default function DeviceCompatibility() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("ios");
  const [isHovering, setIsHovering] = useState(false);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const devices: Record<DeviceType, DeviceInfo> = {
    ios: {
      name: "iOS",
      icon: <Apple className="h-5 w-5" />,
      color: "#007AFF",
      image: "/ipad.png",
      features: [
        "Native iOS app optimized for iPhone and iPad",
        "Offline mode with automatic syncing",
        "Touch ID and Face ID support",
        "Apple Pay integration",
      ],
    },
    android: {
      name: "Android",
      icon: <Smartphone className="h-5 w-5" />,
      color: "#3DDC84",
      image: "/circle.png",
      features: [
        "Native Android app for phones and tablets",
        "Compatible with all major Android versions",
        "Fingerprint authentication",
        "Google Pay integration",
      ],
    },
    web: {
      name: "Web",
      icon: <Globe className="h-5 w-5" />,
      color: "#4285F4",
      image: "/products.png",
      features: [
        "Responsive web application",
        "Works on all modern browsers",
        "Real-time data synchronization",
        "No installation required",
      ],
    },
    pos: {
      name: "POS Terminal",
      icon: <Monitor className="h-5 w-5" />,
      color: "#FF5722",
      image: "/tabs.png",
      features: [
        "Compatible with Windows POS terminals",
        "Support for touchscreens and peripherals",
        "Barcode scanner and receipt printer integration",
        "Optimized for high-volume transactions",
      ],
    },
  };

  // Update the underline position and width when the active device changes
  useEffect(() => {
    const activeIndex = (Object.keys(devices) as DeviceType[]).indexOf(
      activeDevice
    );
    const activeTab = tabsRef.current[activeIndex];

    if (activeTab) {
      setTabUnderlineLeft(activeTab.offsetLeft);
      setTabUnderlineWidth(activeTab.offsetWidth);
    }
  }, [activeDevice, devices]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            DigiPOS is always at your fingertips,
            <br />
            no matter where you are.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access your business management tools on any device, whether it's
            your Window POS Terminals, iPad, or Android tablet.
          </p>
        </div>

        {/* Sliding Tabs */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="flex justify-between border-b border-gray-200">
            {(Object.keys(devices) as DeviceType[]).map((device, index) => (
              <button
                key={device}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => setActiveDevice(device)}
                className={`relative py-4 px-6 text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                  activeDevice === device
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                style={{
                  color: activeDevice === device ? devices[device].color : "",
                }}
              >
                <span className="relative z-10">{devices[device].icon}</span>
                <span className="relative z-10">{devices[device].name}</span>
              </button>
            ))}
          </div>

          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 h-0.5 rounded-full"
            style={{
              left: tabUnderlineLeft,
              width: tabUnderlineWidth,
              backgroundColor: devices[activeDevice].color,
            }}
            initial={false}
            animate={{
              left: tabUnderlineLeft,
              width: tabUnderlineWidth,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        </div>

        {/* Device preview */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDevice}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              {/* Device image */}
              <div className="w-full md:w-1/2 relative">
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-20 rounded-xl"
                  style={{
                    background: `radial-gradient(circle, ${devices[activeDevice].color}40, transparent)`,
                  }}
                ></div>
                <motion.div
                  className="relative bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={devices[activeDevice].image || "/placeholder.svg"}
                      alt={`DigiPOS on ${devices[activeDevice].name}`}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-300 ${
                        isHovering ? "opacity-10" : "opacity-30"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${devices[activeDevice].color}30, transparent)`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              </div>

              {/* Device features */}
              <div className="w-full md:w-1/2">
                <div className="mb-6">
                  <div
                    className="inline-block text-white text-sm font-medium px-3 py-1 rounded-full mb-4"
                    style={{ backgroundColor: devices[activeDevice].color }}
                  >
                    {devices[activeDevice].name} PLATFORM
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Optimized for {devices[activeDevice].name}
                  </h3>
                  <p className="text-gray-600">
                    Our {devices[activeDevice].name} solution is designed to
                    provide the best experience for your restaurant management
                    needs.
                  </p>
                </div>

                <ul className="space-y-3">
                  {devices[activeDevice].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1"
                        style={{
                          backgroundColor: `${devices[activeDevice].color}20`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: devices[activeDevice].color,
                          }}
                        ></div>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    className="group"
                    style={{
                      backgroundColor: devices[activeDevice].color,
                      color: "white",
                    }}
                  >
                    <span>Learn more about {devices[activeDevice].name}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Device selector circles - smaller version below the content */}
        <div className="flex justify-center mt-12 space-x-4">
          {(Object.keys(devices) as DeviceType[]).map((device) => (
            <button
              key={device}
              onClick={() => setActiveDevice(device)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeDevice === device ? "scale-125" : "opacity-50"
              }`}
              style={{ backgroundColor: devices[device].color }}
              aria-label={`Switch to ${devices[device].name}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 text-base rounded-full"
          >
            Talk to a hardware specialist
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  LayoutDashboard,
  Package,
  RefreshCw,
  Users,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  size?: "default" | "large";
  accentColor?: "orange" | "indigo";
  bgImage: string;
}

export default function FeaturesBentoGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Tools for Modern Restaurants
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform offers everything you need to streamline
            operations and enhance customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Cloud className="h-6 w-6 text-orange-500" />}
            title="Cloud-Based Solution"
            description="Access your business data from anywhere, anytime with our secure cloud-based platform."
            index={0}
            bgImage="/placeholder.svg?key=d7h46"
            accentColor="orange"
          />

          <FeatureCard
            icon={<RefreshCw className="h-6 w-6 text-indigo-500" />}
            title="Online & Offline Functionality"
            description="Continue operations even during internet outages with our offline mode that syncs when connection is restored."
            index={1}
            bgImage="/placeholder.svg?key=6wgts"
            accentColor="indigo"
          />

          <FeatureCard
            icon={<LayoutDashboard className="h-6 w-6 text-orange-500" />}
            title="Real-time Dashboard"
            description="Monitor sales, inventory, and customer data in real-time with our intuitive dashboard."
            index={2}
            size="large"
            bgImage="/placeholder.svg?key=hv0n2"
            accentColor="orange"
          />

          <FeatureCard
            icon={<Package className="h-6 w-6 text-indigo-500" />}
            title="Inventory Management"
            description="Track stock levels, set reorder points, and manage suppliers all in one place."
            index={3}
            size="large"
            bgImage="/placeholder.svg?key=vb8nb"
            accentColor="indigo"
          />

          <FeatureCard
            icon={<Users className="h-6 w-6 text-orange-500" />}
            title="Customer Management"
            description="Build customer profiles, track purchase history, and implement loyalty programs."
            index={4}
            bgImage="/placeholder.svg?key=7r54p"
            accentColor="orange"
          />

          <FeatureCard
            icon={<BarChart3 className="h-6 w-6 text-indigo-500" />}
            title="Advanced Analytics"
            description="Gain valuable insights with detailed reports on sales, inventory, staff performance, and more."
            index={5}
            bgImage="/placeholder.svg?height=400&width=600&query=abstract data analytics pattern"
            accentColor="indigo"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  index,
  size = "default",
  accentColor = "orange",
  bgImage,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const accentColors = {
    orange: {
      light: "bg-orange-50",
      medium: "bg-orange-100",
      dark: "bg-orange-500",
      text: "text-orange-600",
      border: "border-orange-200",
      shadow: "shadow-orange-200/50",
      hover: "group-hover:text-orange-600",
      gradient: "from-orange-500/20 to-orange-500/5",
    },
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-100",
      dark: "bg-indigo-500",
      text: "text-indigo-600",
      border: "border-indigo-200",
      shadow: "shadow-indigo-200/50",
      hover: "group-hover:text-indigo-600",
      gradient: "from-indigo-500/20 to-indigo-500/5",
    },
  };

  const colors = accentColors[accentColor];

  return (
    <motion.div
      className={cn(
        `group rounded-xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 relative`,
        index === 5
          ? "w-full md:col-span-2"
          : size === "large"
          ? "md:row-span-2"
          : ""
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-500"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-70`}
        ></div>
      </div>

      <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
        <div
          className={`w-12 h-12 rounded-full ${colors.medium} flex items-center justify-center mb-5`}
        >
          {icon}
        </div>

        <h3
          className={`text-xl font-bold mb-3 text-gray-900 group-hover:${colors.text} transition-colors duration-300`}
        >
          {title}
        </h3>

        <p className="text-gray-600 mb-5 flex-grow">{description}</p>

        {size === "large" && (
          <div className="mt-auto">
            <div className={`w-full h-[1px] ${colors.medium} mb-6`}></div>
            <div className="flex items-center">
              <div className={`text-sm font-medium ${colors.text}`}>
                Learn more
              </div>
              <ArrowRight
                className={`h-4 w-4 ml-2 ${
                  colors.text
                } transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </div>
          </div>
        )}

        {size !== "large" && (
          <div className={`w-16 h-1 ${colors.dark} rounded-full`}></div>
        )}
      </div>
    </motion.div>
  );
}

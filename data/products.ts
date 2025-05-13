import {
  BarChart3,
  Clock,
  CreditCard,
  Layers,
  Monitor,
  Package,
  ShoppingBag,
  Smartphone,
  Users,
  Utensils,
} from "lucide-react";
import React from "react";

export const productData = {
  "front-office": [
    {
      slug: "cloud-pos",
      title: "Cloud Point of Sales",
      shortDescription: "Powerful point of sale system for all business types.",
      description:
        "A versatile, cloud-based Point of Sale system that streamlines your operations and enhances customer experience.",
      image: "/placeholder.svg?key=cloud-pos",
      features: [
        {
          icon: React.createElement(Monitor, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Intuitive Interface",
          description:
            "User-friendly design that requires minimal training for staff.",
        },
        {
          icon: React.createElement(ShoppingBag, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Order Management",
          description: "Easily create, modify, and track orders in real-time.",
        },
        {
          icon: React.createElement(BarChart3, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Real-time Analytics",
          description: "Access sales data and performance metrics instantly.",
        },
        {
          icon: React.createElement(Package, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Inventory Tracking",
          description:
            "Monitor stock levels and get automatic alerts when items run low.",
        },
        {
          icon: React.createElement(CreditCard, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Multiple Payment Options",
          description:
            "Accept various payment methods including credit cards, mobile payments, and cash.",
        },
        {
          icon: React.createElement(Users, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Customer Management",
          description: "Build customer profiles and track purchase history.",
        },
      ],
      benefits: [
        {
          title: "Increased Efficiency",
          description:
            "Reduce wait times and streamline operations with our intuitive system.",
        },
        {
          title: "Enhanced Customer Experience",
          description: "Provide faster service and personalized interactions.",
        },
        {
          title: "Data-Driven Decisions",
          description:
            "Make informed business choices based on comprehensive analytics.",
        },
        {
          title: "Reduced Errors",
          description: "Minimize mistakes in orders and inventory management.",
        },
      ],
      testimonial: {
        quote:
          "DigiPOS Cloud POS has transformed our restaurant operations. We've reduced wait times by 30% and our staff loves how easy it is to use.",
        name: "Sarah Johnson",
        position: "Owner, Café Delight",
        avatar: null,
      },
    },
    {
      slug: "waiter-tab",
      title: "Waiter Tab",
      shortDescription: "Mobile ordering solution for efficient table service.",
      description:
        "Empower your waitstaff with mobile ordering capabilities that enhance service speed and accuracy.",
      image: "/placeholder.svg?key=waiter-tab",
      features: [
        {
          icon: React.createElement(Smartphone, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Mobile Ordering",
          description: "Take orders tableside with tablets or smartphones.",
        },
        {
          icon: React.createElement(Clock, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Real-time Updates",
          description: "Instantly send orders to the kitchen and bar.",
        },
        {
          icon: React.createElement(Users, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Table Management",
          description: "Easily assign and track tables for each server.",
        },
      ],
      benefits: [
        {
          title: "Faster Service",
          description:
            "Reduce time between order taking and kitchen preparation.",
        },
        {
          title: "Increased Accuracy",
          description: "Minimize errors in order taking and communication.",
        },
        {
          title: "Enhanced Productivity",
          description:
            "Servers can handle more tables with greater efficiency.",
        },
      ],
      testimonial: {
        quote:
          "The Waiter Tab has revolutionized our service. Our servers can handle more tables and our customers are impressed with the speed of service.",
        name: "Michael Chen",
        position: "Manager, Fusion Kitchen",
        avatar: null,
      },
    },
    {
      slug: "digikds",
      title: "DigiKDS - Kitchen Display System",
      shortDescription: "Kitchen display system for streamlined operations.",
      description:
        "Modernize your kitchen operations with a digital display system that replaces paper tickets and improves coordination.",
      image: "/placeholder.svg?key=digikds",
      features: [
        {
          icon: React.createElement(Layers, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Order Prioritization",
          description: "Automatically sort orders by priority and timing.",
        },
        {
          icon: React.createElement(Clock, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Timing Alerts",
          description: "Visual alerts for orders that are taking too long.",
        },
        {
          icon: React.createElement(Utensils, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Station Routing",
          description:
            "Direct different items to appropriate kitchen stations.",
        },
      ],
      benefits: [
        {
          title: "Streamlined Operations",
          description: "Eliminate paper tickets and improve kitchen workflow.",
        },
        {
          title: "Reduced Errors",
          description: "Clear digital displays minimize miscommunication.",
        },
        {
          title: "Improved Timing",
          description:
            "Better coordination ensures food is served at optimal temperature.",
        },
      ],
      testimonial: {
        quote:
          "DigiKDS has transformed our kitchen efficiency. Communication between front-of-house and kitchen staff has never been better.",
        name: "David Kim",
        position: "Executive Chef, Harvest Table",
        avatar: null,
      },
    },
  ],
  "back-office": [
    {
      slug: "product-menu-management",
      title: "Product & Menu Management",
      shortDescription: "Comprehensive menu and product management tools.",
      description:
        "Take control of your menu with powerful tools for creating, organizing, and pricing your offerings.",
      image: "/placeholder.svg?key=menu-management",
      features: [
        {
          icon: React.createElement(Layers, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Menu Builder",
          description:
            "Create and organize menus with drag-and-drop simplicity.",
        },
        {
          icon: React.createElement(BarChart3, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Price Management",
          description: "Set prices, discounts, and special offers with ease.",
        },
        {
          icon: React.createElement(Clock, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Seasonal Menus",
          description:
            "Schedule menu changes for different times of day or seasons.",
        },
      ],
      benefits: [
        {
          title: "Menu Flexibility",
          description:
            "Easily update offerings based on ingredient availability or seasonality.",
        },
        {
          title: "Consistent Pricing",
          description: "Maintain price consistency across all sales channels.",
        },
        {
          title: "Time Savings",
          description:
            "Quickly make menu changes without reprinting physical menus.",
        },
      ],
      testimonial: {
        quote:
          "The menu management system has made it so easy to update our seasonal offerings and special promotions. We can now make changes in minutes instead of hours.",
        name: "Emma Wilson",
        position: "Owner, Seasonal Bites",
        avatar: null,
      },
    },
    {
      slug: "inventory-management",
      title: "Inventory Management",
      shortDescription: "Real-time inventory tracking and management.",
      description:
        "Keep track of your stock levels, reduce waste, and optimize your ordering process with our comprehensive inventory system.",
      image: "/placeholder.svg?key=inventory-management",
      features: [
        {
          icon: React.createElement(Package, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Stock Tracking",
          description:
            "Monitor inventory levels in real-time across locations.",
        },
        {
          icon: React.createElement(BarChart3, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Usage Reports",
          description: "Analyze consumption patterns and identify waste.",
        },
        {
          icon: React.createElement(Clock, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Automated Ordering",
          description:
            "Set reorder points and generate purchase orders automatically.",
        },
      ],
      benefits: [
        {
          title: "Reduced Waste",
          description:
            "Better tracking leads to less spoilage and overordering.",
        },
        {
          title: "Cost Control",
          description: "Identify high-cost items and optimize purchasing.",
        },
        {
          title: "Never Run Out",
          description: "Automatic alerts prevent stockouts of critical items.",
        },
      ],
      testimonial: {
        quote:
          "Since implementing DigiPOS Inventory Management, we've reduced our food waste by 25% and our ordering process is now completely streamlined.",
        name: "Carlos Rodriguez",
        position: "F&B Director, Grand Hotel",
        avatar: null,
      },
    },
  ],
  retail: [
    {
      slug: "retail-pos",
      title: "Cloud Point of Sales for Retail",
      shortDescription:
        "In-depth sales analysis and performance tracking for retail.",
      description:
        "A specialized point of sale system designed specifically for retail businesses with features for inventory management, customer loyalty, and sales tracking.",
      image: "/placeholder.svg?key=retail-pos",
      features: [
        {
          icon: React.createElement(ShoppingBag, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Barcode Scanning",
          description:
            "Quickly process items with integrated barcode scanning.",
        },
        {
          icon: React.createElement(Users, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Loyalty Program",
          description: "Build customer loyalty with points and rewards.",
        },
        {
          icon: React.createElement(Package, {
            className: "h-5 w-5 text-indigo-600",
          }),
          title: "Inventory Management",
          description: "Track stock levels across multiple locations.",
        },
      ],
      benefits: [
        {
          title: "Faster Checkout",
          description: "Streamlined processes reduce customer wait times.",
        },
        {
          title: "Customer Retention",
          description: "Loyalty features help bring customers back.",
        },
        {
          title: "Inventory Optimization",
          description: "Reduce overstock and stockouts with better tracking.",
        },
      ],
      testimonial: {
        quote:
          "DigiPOS Retail has transformed our boutique. The inventory management is precise, and our customers love the loyalty program.",
        name: "Aisha Patel",
        position: "Owner, Fashion Forward",
        avatar: null,
      },
    },
  ],
};

export const categoryInfo = {
  "front-office": {
    title: "Front Office Solutions",
    description:
      "Enhance your customer-facing operations with our suite of front office tools designed to improve service, speed, and satisfaction.",
    image: "/placeholder.svg?key=front-office",
    benefitsDescription:
      "Our front office solutions help you create seamless customer experiences while improving operational efficiency.",
    benefits: [
      {
        title: "Enhanced Customer Experience",
        description:
          "Provide faster, more personalized service that keeps customers coming back.",
      },
      {
        title: "Streamlined Operations",
        description:
          "Reduce wait times and improve staff efficiency with intuitive tools.",
      },
      {
        title: "Real-time Insights",
        description:
          "Access performance data instantly to make informed decisions.",
      },
      {
        title: "Increased Sales",
        description:
          "Upselling features and faster service lead to higher average tickets.",
      },
    ],
  },
  "back-office": {
    title: "Back Office Solutions",
    description:
      "Optimize your behind-the-scenes operations with powerful management tools that reduce costs and improve efficiency.",
    image: "/placeholder.svg?key=back-office",
    benefitsDescription:
      "Our back office solutions provide the foundation for a well-run, profitable business.",
    benefits: [
      {
        title: "Cost Control",
        description:
          "Better inventory and resource management reduces waste and overhead.",
      },
      {
        title: "Time Savings",
        description:
          "Automation of routine tasks frees up management for strategic work.",
      },
      {
        title: "Data-Driven Decisions",
        description:
          "Comprehensive reporting helps you identify opportunities and challenges.",
      },
      {
        title: "Scalability",
        description:
          "Systems that grow with your business from single location to enterprise.",
      },
    ],
  },
  retail: {
    title: "Retail Solutions",
    description:
      "Specialized tools designed specifically for retail businesses to manage inventory, process sales, and build customer loyalty.",
    image: "/placeholder.svg?key=retail",
    benefitsDescription:
      "Our retail solutions help you compete in today's challenging marketplace.",
    benefits: [
      {
        title: "Inventory Optimization",
        description: "Keep the right products in stock at the right time.",
      },
      {
        title: "Customer Insights",
        description:
          "Understand buying patterns and preferences to tailor your offerings.",
      },
      {
        title: "Omnichannel Integration",
        description: "Seamlessly connect in-store and online sales channels.",
      },
      {
        title: "Loss Prevention",
        description:
          "Better tracking and controls to reduce shrinkage and theft.",
      },
    ],
  },
};

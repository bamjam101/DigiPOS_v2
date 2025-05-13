import {
  Building,
  CreditCard,
  Globe,
  Receipt,
  Smartphone,
  Truck,
} from "lucide-react";
import React from "react";

export const marketplaceData = {
  categories: [
    {
      id: "payment-processing",
      title: "Payment Processing",
      description:
        "Integrate with popular payment processors to offer your customers flexible payment options.",
      image: "/placeholder.svg?key=payment-processing",
      integrations: [
        {
          name: "Geidia",
          icon: React.createElement(CreditCard, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description:
            "Integrated payment processing solution for Saudi businesses.",
          features: [
            "Seamless integration with DigiPOS",
            "Support for all major credit cards",
            "Real-time transaction reporting",
            "Secure payment processing",
          ],
          status: "active",
        },
        {
          name: "NamiPay",
          icon: React.createElement(CreditCard, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description:
            "Seamless payment processing integration for Middle Eastern markets.",
          features: [
            "Multiple payment methods",
            "Low transaction fees",
            "Automatic reconciliation",
            "Fraud protection",
          ],
          status: "active",
        },
        {
          name: "Neoleap",
          icon: React.createElement(CreditCard, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description: "Modern payment solutions for businesses of all sizes.",
          features: [
            "Contactless payments",
            "Mobile wallet support",
            "Multi-currency processing",
            "Detailed transaction analytics",
          ],
          status: "active",
        },
      ],
    },
    {
      id: "delivery-services",
      title: "Delivery Services",
      description:
        "Connect with popular delivery platforms to expand your reach and offer convenient delivery options.",
      image: "/placeholder.svg?key=delivery-services",
      integrations: [
        {
          name: "Deliverect",
          icon: React.createElement(Truck, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description: "Delivery platform integration for restaurants.",
          features: [
            "Centralized delivery management",
            "Automatic order synchronization",
            "Menu management across platforms",
            "Delivery performance analytics",
          ],
          status: "active",
        },
        {
          name: "Qlub",
          icon: React.createElement(CreditCard, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description: "Digital payment solutions for restaurants.",
          features: [
            "QR code payments",
            "Split bill functionality",
            "Contactless ordering",
            "Customer feedback collection",
          ],
          status: "active",
        },
      ],
    },
    {
      id: "accounting",
      title: "Accounting & ERP",
      description:
        "Streamline your financial processes with integrations to popular accounting and ERP systems.",
      image: "/placeholder.svg?key=accounting",
      integrations: [
        {
          name: "MyFatoora",
          icon: React.createElement(Receipt, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description: "Comprehensive payment gateway integration.",
          features: [
            "Automated invoice generation",
            "Tax compliance",
            "Financial reporting",
            "Multi-currency support",
          ],
          status: "active",
        },
        {
          name: "ERPNext",
          icon: React.createElement(Building, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description: "Enterprise resource planning integration.",
          features: [
            "Inventory synchronization",
            "Financial data integration",
            "HR management",
            "Project tracking",
          ],
          status: "active",
        },
        {
          name: "Zatca E-Invoicing",
          icon: React.createElement(Receipt, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description: "Compliant e-invoicing for Saudi regulations.",
          features: [
            "ZATCA compliance",
            "Automatic tax calculation",
            "Digital signature",
            "Audit trail",
          ],
          status: "active",
        },
      ],
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description:
        "Expand your digital presence with integrated online ordering solutions.",
      image: "/placeholder.svg?key=online-ordering",
      integrations: [
        {
          name: "DigiPOS Online Ordering",
          icon: React.createElement(Globe, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description: "Built-in online ordering system for your website.",
          features: [
            "Branded ordering experience",
            "Real-time menu synchronization",
            "Customer account management",
            "Order tracking",
          ],
          status: "active",
        },
        {
          name: "Mobile App Integration",
          icon: React.createElement(Smartphone, {
            className: "h-5 w-5 text-indigo-600",
          }),
          description: "Connect your DigiPOS system to your custom mobile app.",
          features: [
            "Real-time inventory updates",
            "Push notifications",
            "Loyalty program integration",
            "In-app payments",
          ],
          status: "coming",
        },
      ],
    },
  ],
  integrationProcess: [
    {
      title: "Select Integration",
      description:
        "Choose from our marketplace of pre-built integrations that meet your business needs.",
    },
    {
      title: "Connect Accounts",
      description:
        "Link your existing accounts or create new ones with our integration partners.",
    },
    {
      title: "Configure Settings",
      description:
        "Customize the integration settings to match your specific business requirements.",
    },
    {
      title: "Go Live",
      description:
        "Activate the integration and start enjoying the benefits of connected systems.",
    },
  ],
};

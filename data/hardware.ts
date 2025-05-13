import { Wifi, Shield } from "lucide-react"

export const hardwareData = {
  categories: [
    {
      id: "pos-terminals",
      title: "POS Terminals",
      description: "Reliable and efficient point of sale terminals for all business types.",
      image: "/placeholder.svg?key=pos-terminals",
      products: [
        {
          name: "DigiPOS Pro Terminal",
          description:
            "Our flagship all-in-one POS terminal with touchscreen display, built-in receipt printer, and customer-facing display.",
          image: "/placeholder.svg?key=pos-terminal-pro",
          specifications: [
            '15.6" Full HD Touchscreen',
            "Intel Core i5 Processor",
            "8GB RAM, 256GB SSD",
            "Built-in 80mm Thermal Printer",
            'Customer-Facing 10" Display',
            "Windows 10 IoT Enterprise",
          ],
          availability: true,
        },
        {
          name: "DigiPOS Lite Terminal",
          description: "Compact and affordable POS terminal perfect for small businesses and food trucks.",
          image: "/placeholder.svg?key=pos-terminal-lite",
          specifications: [
            '12" HD Touchscreen',
            "Intel Celeron Processor",
            "4GB RAM, 128GB SSD",
            "Compatible with External Printers",
            "Optional Customer Display",
            "Windows 10 IoT Enterprise",
          ],
          availability: true,
        },
        {
          name: "DigiPOS Mobile Terminal",
          description: "Portable POS terminal with integrated payment processing for businesses on the go.",
          image: "/placeholder.svg?key=pos-terminal-mobile",
          specifications: [
            '8" HD Touchscreen',
            "Qualcomm Snapdragon Processor",
            "4GB RAM, 64GB Storage",
            "Integrated Payment Terminal",
            "8-hour Battery Life",
            "Android 11",
          ],
          availability: true,
        },
      ],
    },
    {
      id: "self-ordering-kiosks",
      title: "Self-Ordering Kiosks",
      description: "Interactive self-service kiosks that reduce wait times and improve customer experience.",
      image: "/placeholder.svg?key=self-ordering-kiosks",
      products: [
        {
          name: "DigiPOS Kiosk Pro",
          description: "Free-standing self-ordering kiosk with large touchscreen and integrated payment processing.",
          image: "/placeholder.svg?key=kiosk-pro",
          specifications: [
            '22" Full HD Touchscreen',
            "Intel Core i3 Processor",
            "8GB RAM, 256GB SSD",
            "Integrated Payment Terminal",
            "Receipt Printer",
            "Windows 10 IoT Enterprise",
          ],
          availability: true,
        },
        {
          name: "DigiPOS Kiosk Countertop",
          description: "Compact countertop self-ordering kiosk for space-constrained environments.",
          image: "/placeholder.svg?key=kiosk-countertop",
          specifications: [
            '15.6" Full HD Touchscreen',
            "Intel Celeron Processor",
            "4GB RAM, 128GB SSD",
            "Compatible with External Payment Terminals",
            "Optional Receipt Printer",
            "Windows 10 IoT Enterprise",
          ],
          availability: true,
        },
      ],
    },
    {
      id: "peripherals",
      title: "Peripherals",
      description: "Essential peripherals to complete your POS system, including printers, scanners, and cash drawers.",
      image: "/placeholder.svg?key=peripherals",
      products: [
        {
          name: "DigiPOS Thermal Receipt Printer",
          description: "Fast and reliable thermal receipt printer with multiple connectivity options.",
          image: "/placeholder.svg?key=receipt-printer",
          specifications: [
            "80mm Thermal Printer",
            "250mm/sec Print Speed",
            "USB, Ethernet, Bluetooth Connectivity",
            "Auto-Cutter",
            "Compatible with ESC/POS Commands",
            "Paper Low Sensor",
          ],
          availability: true,
        },
        {
          name: "DigiPOS Barcode Scanner",
          description: "High-performance 1D/2D barcode scanner for quick and accurate scanning.",
          image: "/placeholder.svg?key=barcode-scanner",
          specifications: [
            "1D/2D Barcode Scanning",
            "USB Connectivity",
            "100 Scans/Second",
            "IP54 Rated for Dust/Water Resistance",
            "1.5m Drop Resistance",
            "Automatic Light Adjustment",
          ],
          availability: true,
        },
        {
          name: "DigiPOS Cash Drawer",
          description: "Durable cash drawer with multiple compartments for bills and coins.",
          image: "/placeholder.svg?key=cash-drawer",
          specifications: [
            "5 Bill Compartments, 8 Coin Compartments",
            "RJ11 Connectivity",
            "Emergency Key Release",
            "Media Slot for Checks/Vouchers",
            "Steel Construction",
            "Compatible with All DigiPOS Terminals",
          ],
          availability: true,
        },
      ],
    },
  ],
  compatibilityFeatures: [
    {
      icon: <Wifi className="h-6 w-6 text-white" />,
      title: "Seamless Integration",
      description:
        "All hardware components are designed to work perfectly with DigiPOS software, ensuring plug-and-play functionality.",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Secure Transactions",
      description: "Our payment terminals use the latest encryption technology to keep customer data safe and secure.",
    },
  ],
}

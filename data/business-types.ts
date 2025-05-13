import {
  Coffee,
  Utensils,
  Truck,
  Building,
  Pill,
  Shirt,
  Flower,
  Scissors,
  ShoppingBasket,
  ShoppingBag,
  Users,
  Package,
  BarChart3,
} from "lucide-react"

export const businessTypesData = {
  restaurants: {
    title: "Restaurant",
    description:
      "Tailored solutions for all types of food service businesses, from quick service to fine dining establishments.",
    image: "/placeholder.svg?key=restaurant-business",
    subtypes: [
      {
        name: "Café & Bakery",
        icon: <Coffee className="h-5 w-5 text-indigo-600" />,
        description: "Specialized solutions for cafés, coffee shops, and bakeries.",
      },
      {
        name: "Quick Service",
        icon: <ShoppingBag className="h-5 w-5 text-indigo-600" />,
        description: "Fast and efficient systems for quick service restaurants.",
      },
      {
        name: "Kiosks & Food Trucks",
        icon: <Truck className="h-5 w-5 text-indigo-600" />,
        description: "Mobile solutions for food trucks and kiosks.",
      },
      {
        name: "Dine-In Service Restaurants",
        icon: <Utensils className="h-5 w-5 text-indigo-600" />,
        description: "Comprehensive systems for table service restaurants.",
      },
    ],
    features: [
      {
        title: "Table Management",
        icon: <Building className="h-5 w-5 text-indigo-600" />,
        description: "Efficiently manage seating, reservations, and table turnover.",
      },
      {
        title: "Menu Engineering",
        icon: <Utensils className="h-5 w-5 text-indigo-600" />,
        description: "Design and analyze menus to maximize profitability.",
      },
      {
        title: "Kitchen Display System",
        icon: <Utensils className="h-5 w-5 text-indigo-600" />,
        description: "Streamline kitchen operations with digital order management.",
      },
      {
        title: "Online Ordering",
        icon: <ShoppingBag className="h-5 w-5 text-indigo-600" />,
        description: "Accept orders directly through your website or mobile app.",
      },
      {
        title: "Inventory Control",
        icon: <Package className="h-5 w-5 text-indigo-600" />,
        description: "Track ingredients and manage food costs effectively.",
      },
      {
        title: "Staff Management",
        icon: <Users className="h-5 w-5 text-indigo-600" />,
        description: "Schedule staff, track performance, and manage tips.",
      },
    ],
    testimonials: [
      {
        name: "John Smith",
        business: "Café Delight",
        quote:
          "DigiPOS has transformed our café operations. Order accuracy is up, and our customers love the faster service.",
      },
      {
        name: "Maria Rodriguez",
        business: "Taco Truck",
        quote:
          "The mobile POS is perfect for our food truck. We can process more orders during rush periods and keep lines moving.",
      },
      {
        name: "David Chen",
        business: "Fine Dining Restaurant",
        quote:
          "The table management and reservation system has helped us optimize seating and improve the dining experience for our guests.",
      },
    ],
  },
  retail: {
    title: "Retail",
    description:
      "Comprehensive solutions for retail businesses of all types, from small boutiques to large supermarkets.",
    image: "/placeholder.svg?key=retail-business",
    subtypes: [
      {
        name: "Pharmacy",
        icon: <Pill className="h-5 w-5 text-indigo-600" />,
        description: "Specialized solutions for pharmacies and drugstores.",
      },
      {
        name: "Laundry",
        icon: <Shirt className="h-5 w-5 text-indigo-600" />,
        description: "Management systems for laundry and dry cleaning services.",
      },
      {
        name: "Garments",
        icon: <Shirt className="h-5 w-5 text-indigo-600" />,
        description: "Retail solutions for clothing and garment stores.",
      },
      {
        name: "Apparel",
        icon: <Shirt className="h-5 w-5 text-indigo-600" />,
        description: "POS systems for fashion and apparel retailers.",
      },
      {
        name: "Flower Shop",
        icon: <Flower className="h-5 w-5 text-indigo-600" />,
        description: "Specialized solutions for florists and flower shops.",
      },
      {
        name: "Salon",
        icon: <Scissors className="h-5 w-5 text-indigo-600" />,
        description: "Management systems for salons, spas, and beauty services.",
      },
      {
        name: "Supermarket",
        icon: <ShoppingBasket className="h-5 w-5 text-indigo-600" />,
        description: "Comprehensive POS for supermarkets and grocery stores.",
      },
    ],
    features: [
      {
        title: "Inventory Management",
        icon: <Package className="h-5 w-5 text-indigo-600" />,
        description: "Track stock levels, set reorder points, and manage suppliers.",
      },
      {
        title: "Barcode Scanning",
        icon: <ShoppingBag className="h-5 w-5 text-indigo-600" />,
        description: "Quickly process items with integrated barcode scanning.",
      },
      {
        title: "Customer Loyalty",
        icon: <Users className="h-5 w-5 text-indigo-600" />,
        description: "Build customer loyalty with points, rewards, and personalized offers.",
      },
      {
        title: "Multi-channel Sales",
        icon: <ShoppingBag className="h-5 w-5 text-indigo-600" />,
        description: "Integrate in-store, online, and mobile sales channels.",
      },
      {
        title: "Sales Analytics",
        icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
        description: "Gain insights into sales trends, popular products, and customer behavior.",
      },
      {
        title: "Employee Management",
        icon: <Users className="h-5 w-5 text-indigo-600" />,
        description: "Schedule staff, track performance, and manage commissions.",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        business: "Fashion Boutique",
        quote:
          "DigiPOS has streamlined our inventory management and checkout process. Our customers appreciate the quick, professional service.",
      },
      {
        name: "Ahmed Hassan",
        business: "Neighborhood Pharmacy",
        quote:
          "The specialized pharmacy features have helped us manage prescriptions more efficiently while improving customer service.",
      },
      {
        name: "Lisa Wong",
        business: "Supermarket Chain",
        quote:
          "Managing multiple locations is so much easier with DigiPOS. We have real-time visibility across all our stores.",
      },
    ],
  },
}

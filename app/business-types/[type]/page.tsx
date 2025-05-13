import { Button } from "@/components/ui/button";
import { businessTypesData } from "@/data/business-types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(businessTypesData).map((type) => ({
    type,
  }));
}

export default function BusinessTypePage({
  params,
}: {
  params: { type: string };
}) {
  const { type } = params;

  // Check if business type exists
  if (!businessTypesData[type]) {
    notFound();
  }

  const businessType = businessTypesData[type];

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/business-types" className="hover:text-indigo-600">
              Business Types
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium capitalize">{type}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                BUSINESS TYPE
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-6">
                {businessType.title} Solutions
              </h1>
              <p className="text-xl text-gray-500 mb-8">
                {businessType.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">
                  Request a Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3"
                >
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={
                  businessType.image ||
                  "/placeholder.svg?key=business-type-image"
                }
                alt={businessType.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subtypes Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {type === "restaurants" ? "Restaurant Types" : "Retail Types"} We
              Serve
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Tailored solutions for every type of{" "}
              {type === "restaurants" ? "restaurant" : "retail"} business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessType.subtypes.map((subtype, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  {subtype.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {subtype.name}
                </h3>
                <p className="text-gray-500 mb-4">{subtype.description}</p>
                <Link
                  href={`/contact?business=${subtype.name}`}
                  className="text-indigo-600 font-medium flex items-center hover:text-indigo-800"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Key Features for {businessType.title}
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Discover how our solutions address the unique needs of your
              business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessType.features.map((feature, index) => (
              <div
                key={index}
                className="flex bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Hear from {businessType.title.toLowerCase()} businesses that have
              transformed with DigiPOS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessType.testimonials.map(
              (testimonial: any, index: number) => (
                <div key={index} className="bg-indigo-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-indigo-700 flex items-center justify-center mr-3">
                      <span className="text-lg font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-indigo-300 text-sm">
                        {testimonial.business}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to transform your {businessType.title.toLowerCase()}?
          </h2>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Join thousands of {businessType.title.toLowerCase()} businesses that
            trust DigiPOS for their operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">
              Schedule a Demo
            </Button>
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

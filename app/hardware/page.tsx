import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check } from "lucide-react"
import { hardwareData } from "@/data/hardware"

export default function HardwarePage() {
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
            <span className="text-gray-900 font-medium">Hardware</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
              HARDWARE
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-6">
              Complete Hardware Solutions
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Discover our range of high-quality hardware solutions designed to optimize your business operations and
              enhance customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareData.categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg?key=hardware-category"}
                    alt={category.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-500 mb-4">{category.description}</p>
                  <Link
                    href={`#${category.id}`}
                    className="text-indigo-600 font-medium flex items-center hover:text-indigo-800"
                  >
                    View options
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Categories Sections */}
      {hardwareData.categories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-16 ${categoryIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.products.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/3">
                      <Image
                        src={product.image || "/placeholder.svg?key=hardware-product"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="h-48 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Specifications:</h4>
                        <ul className="text-sm text-gray-500 space-y-1">
                          {product.specifications.map((spec, specIndex) => (
                            <li key={specIndex} className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {product.availability ? (
                            <span className="text-green-600">In Stock</span>
                          ) : (
                            <span className="text-orange-600">Contact for Availability</span>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                          size="sm"
                        >
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Compatibility Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compatible with DigiPOS Software</h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              All our hardware solutions are fully compatible with DigiPOS software, ensuring seamless integration and
              optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hardwareData.compatibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-indigo-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-indigo-700 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-indigo-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need help choosing the right hardware?</h2>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Our hardware specialists can help you select the perfect equipment for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">Talk to a Specialist</Button>
            <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3">
              Download Hardware Catalog
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

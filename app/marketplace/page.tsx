import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ExternalLink } from "lucide-react"
import { marketplaceData } from "@/data/marketplace"

export default function MarketplacePage() {
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
            <span className="text-gray-900 font-medium">Marketplace</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
              MARKETPLACE
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-6">
              Extend Your Business Capabilities
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Discover our extensive marketplace of integrations and add-ons to enhance your DigiPOS experience and
              streamline your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceData.categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg?key=marketplace-category"}
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
                    View integrations
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories Sections */}
      {marketplaceData.categories.map((category, categoryIndex) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.integrations.map((integration, integrationIndex) => (
                <div
                  key={integrationIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        {integration.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{integration.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-500 space-y-1">
                        {integration.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            integration.status === "active" ? "bg-green-500" : "bg-orange-500"
                          }`}
                        ></div>
                        <span className="text-xs text-gray-500">
                          {integration.status === "active" ? "Active Integration" : "Coming Soon"}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                        size="sm"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Integration Process Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple Integration Process</h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Getting started with our integrations is quick and easy. Follow these simple steps to enhance your DigiPOS
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {marketplaceData.integrationProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-indigo-800 rounded-lg p-6 h-full">
                  <div className="w-12 h-12 bg-indigo-700 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-indigo-200">{step.description}</p>
                </div>
                {index < marketplaceData.integrationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="h-8 w-8 text-indigo-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a custom integration?</h2>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Don't see the integration you need? Our team can help you develop custom integrations tailored to your
            specific business requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">
              Request Custom Integration
            </Button>
            <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

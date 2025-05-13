import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check } from "lucide-react"
import { productData } from "@/data/products"

export async function generateStaticParams() {
  const params: { category: string; product: string }[] = []

  // Generate params for all products in all categories
  Object.entries(productData).forEach(([category, products]) => {
    products.forEach((product) => {
      params.push({
        category,
        product: product.slug,
      })
    })
  })

  return params
}

export default function ProductPage({
  params,
}: {
  params: { category: string; product: string }
}) {
  const { category, product: productSlug } = params

  // Find the product data
  const categoryData = productData[category]
  if (!categoryData) {
    notFound()
  }

  const product = categoryData.find((p) => p.slug === productSlug)
  if (!product) {
    notFound()
  }

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
            <Link href="/products" className="hover:text-indigo-600">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={`/products/${category}`} className="hover:text-indigo-600 capitalize">
              {category.replace("-", " ")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {category === "front-office" ? "FRONT OFFICE" : category === "back-office" ? "BACK OFFICE" : "RETAIL"}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-6">{product.title}</h1>
              <p className="text-xl text-gray-500 mb-8">{product.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">Request a Demo</Button>
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={product.image || "/placeholder.svg?key=product-image"}
                alt={product.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Discover how {product.title} can transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose {product.title}</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              See how our solution stands out from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">{benefit.title}</h4>
                      <p className="mt-1 text-gray-500">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-indigo-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Success Story</h3>
              <blockquote className="italic mb-6">"{product.testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  {product.testimonial.avatar || (
                    <span className="text-xl font-bold">{product.testimonial.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <div className="font-medium">{product.testimonial.name}</div>
                  <div className="text-indigo-200">{product.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust DigiPOS for their {product.title} needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3">Schedule a Demo</Button>
            <Button variant="outline" className="border-white text-white hover:bg-indigo-800 px-6 py-3">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

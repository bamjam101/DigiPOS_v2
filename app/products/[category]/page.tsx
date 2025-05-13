import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import { productData, categoryInfo } from "@/data/products"

export async function generateStaticParams() {
  return Object.keys(productData).map((category) => ({
    category,
  }))
}

export default function ProductCategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const { category } = params

  // Check if category exists
  if (!productData[category]) {
    notFound()
  }

  const products = productData[category]
  const info = categoryInfo[category]

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
            <span className="text-gray-900 font-medium capitalize">{category.replace("-", " ")}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
              {category === "front-office" ? "FRONT OFFICE" : category === "back-office" ? "BACK OFFICE" : "RETAIL"}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-6">{info.title}</h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">{info.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${category}/${product.slug}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg?key=product-card"}
                    alt={product.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{product.shortDescription}</p>
                  <div className="flex items-center text-indigo-600 font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our {info.title}</h2>
              <p className="text-lg text-gray-500 mb-8">{info.benefitsDescription}</p>
              <ul className="space-y-4">
                {info.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">{benefit.title}</h4>
                      <p className="mt-1 text-gray-500">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={info.image || "/placeholder.svg?key=category-image"}
                alt={info.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust DigiPOS for their {info.title} needs.
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

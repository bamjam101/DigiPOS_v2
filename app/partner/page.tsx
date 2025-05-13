import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check, Users, Building, BadgeDollarSign, Handshake } from "lucide-react"

export default function PartnerPage() {
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
            <span className="text-gray-900 font-medium">Become a Partner</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                PARTNERSHIP PROGRAM
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-6">
                Grow Your Business with DigiPOS
              </h1>
              <p className="text-xl text-gray-500 mb-8">
                Join our partner program and unlock new revenue streams while providing your clients with cutting-edge
                restaurant and retail management solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">Apply Now</Button>
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?key=partner-hero"
                alt="DigiPOS Partnership"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Partnership Opportunities</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reseller Partners</h3>
              <p className="text-gray-500 mb-4">
                Sell DigiPOS solutions to your clients and earn competitive commissions on each sale. Perfect for IT
                consultants and business solution providers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Competitive commission structure</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Sales and marketing support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Product training and certification</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                Become a Reseller
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Partners</h3>
              <p className="text-gray-500 mb-4">
                Provide implementation, customization, and support services for DigiPOS solutions. Ideal for system
                integrators and IT service providers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Technical training and certification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Implementation resources and tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Priority technical support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                Become an Implementer
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Partners</h3>
              <p className="text-gray-500 mb-4">
                Integrate your solutions with DigiPOS or co-develop new offerings. Perfect for technology providers and
                complementary solution vendors.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">API access and integration support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Co-marketing opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Joint solution development</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                Become a Strategic Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Partner Program Benefits</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Discover the advantages of partnering with DigiPOS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <BadgeDollarSign className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Recurring Revenue</h3>
                    <p className="text-gray-500">
                      Earn ongoing commissions from subscription renewals, creating a stable revenue stream for your
                      business.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Comprehensive Training</h3>
                    <p className="text-gray-500">
                      Access detailed product training and certification programs to build expertise in DigiPOS
                      solutions.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Marketing Support</h3>
                    <p className="text-gray-500">
                      Get access to marketing materials, lead generation programs, and co-marketing opportunities.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?key=partner-benefits"
                alt="Partner Benefits"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Partner Success Stories</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Hear from our partners about their experience working with DigiPOS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
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
              <blockquote className="italic text-gray-600 mb-6">
                "Partnering with DigiPOS has been a game-changer for our business. The comprehensive training and
                marketing support have helped us close more deals and provide better service to our clients."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-lg font-bold text-gray-600">J</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">John Smith</div>
                  <div className="text-gray-500 text-sm">CEO, TechSolutions Inc.</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
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
              <blockquote className="italic text-gray-600 mb-6">
                "The recurring revenue model has transformed our business. DigiPOS's excellent product and support make
                it easy to sell and implement for our clients in the restaurant industry."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-lg font-bold text-gray-600">S</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-500 text-sm">Director, Hospitality Solutions</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
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
              <blockquote className="italic text-gray-600 mb-6">
                "As a strategic partner, we've been able to create powerful integrated solutions that give our clients a
                competitive edge. The DigiPOS team is responsive and collaborative."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-lg font-bold text-gray-600">M</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Michael Chen</div>
                  <div className="text-gray-500 text-sm">CTO, Integrated Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How to Join</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Follow these simple steps to become a DigiPOS partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-indigo-600">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-gray-500">Complete our online application form with your business details.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ChevronRight className="h-8 w-8 text-indigo-300" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-indigo-600">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-500">Discuss your business goals and partnership options with our team.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ChevronRight className="h-8 w-8 text-indigo-300" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-indigo-600">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Training</h3>
                <p className="text-gray-500">Complete our comprehensive training and certification program.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ChevronRight className="h-8 w-8 text-indigo-300" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 h-full">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-indigo-600">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-500">
                Start selling and implementing DigiPOS solutions with our ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your business with DigiPOS?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join our partner network today and start offering industry-leading POS solutions to your clients.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3">Apply Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-indigo-800 px-6 py-3">
              Download Partner Guide
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

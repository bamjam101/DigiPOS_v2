import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check, HelpCircle } from "lucide-react"

export default function PricingPage() {
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
            <span className="text-gray-900 font-medium">Pricing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Choose the plan that's right for your business. All plans include core features with additional options as
              you grow.
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium">Monthly</button>
              <button className="px-6 py-2 rounded-full text-gray-700 font-medium">Annual (Save 20%)</button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Starter</h3>
                <p className="text-gray-500 text-sm mb-4">Perfect for small businesses</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">1 POS terminal</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Basic inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Sales reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Email support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Cloud backup</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-indigo-600 transform scale-105 z-10">
              <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Professional</h3>
                <p className="text-gray-500 text-sm mb-4">Ideal for growing businesses</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">3 POS terminals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Advanced inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Customer management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Email & phone support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Online ordering</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Kitchen display system</span>
                  </li>
                </ul>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Enterprise</h3>
                <p className="text-gray-500 text-sm mb-4">For large-scale operations</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$199</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Unlimited POS terminals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Multi-location management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Priority 24/7 support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Dedicated account manager</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Compare Plans</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              See which plan includes the features you need for your business
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 text-left text-gray-500 font-medium">Features</th>
                  <th className="py-4 px-6 text-center text-gray-500 font-medium">Starter</th>
                  <th className="py-4 px-6 text-center text-indigo-600 font-medium">Professional</th>
                  <th className="py-4 px-6 text-center text-gray-500 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">POS Terminals</td>
                  <td className="py-4 px-6 text-center text-gray-600">1</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-indigo-50">3</td>
                  <td className="py-4 px-6 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">Inventory Management</td>
                  <td className="py-4 px-6 text-center text-gray-600">Basic</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-indigo-50">Advanced</td>
                  <td className="py-4 px-6 text-center text-gray-600">Advanced</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">Customer Management</td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-red-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-indigo-50">
                    <svg
                      className="h-5 w-5 text-green-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-green-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">Online Ordering</td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-red-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-indigo-50">
                    <svg
                      className="h-5 w-5 text-green-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-green-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">Multi-location Support</td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-red-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-indigo-50">
                    <svg
                      className="h-5 w-5 text-red-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-green-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Find answers to common questions about our pricing and plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans later?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                    billing cycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h3>
                  <p className="text-gray-600">
                    Yes, for businesses with specific needs, we offer custom pricing. Contact our sales team to discuss
                    your requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and bank transfers for annual plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust DigiPOS for their point of sale needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3">Start Free Trial</Button>
            <Button variant="outline" className="border-white text-white hover:bg-indigo-800 px-6 py-3">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

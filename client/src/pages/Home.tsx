import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Fractional Quality and Regulatory Affairs Execution for MedTech Startups
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Connecting Groundbreaking Medical Engineering with Complex Compliance Landscapes
              </p>
              <a href="/contact" className="button-primary inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At QRA Strategies LLC, we view regulatory compliance as a critical operational milestone rather than a simple administrative task. We partner with MedTech startups to build Quality Management Systems that are proportionate to your stage of development, operationally sound, and audit ready from inception.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to enable founders and engineering teams to focus on innovation while we manage the complexity of regulatory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-900 text-center">
              Right Sized. Audit Ready. Market Ready.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-yellow-500 flex-shrink-0" size={28} />
                  <h3 className="text-xl font-bold text-blue-900">Audit Ready Systems</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive Quality Management Systems designed to pass regulatory scrutiny on first inspection.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-yellow-500 flex-shrink-0" size={28} />
                  <h3 className="text-xl font-bold text-blue-900">Accelerated Market Entry</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Streamlined compliance processes that reduce time to market without compromising regulatory integrity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-yellow-500 flex-shrink-0" size={28} />
                  <h3 className="text-xl font-bold text-blue-900">Financial Protection</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Minimize internal resource drain on your engineering team, preserving runway for product development.
                </p>
              </div>
            </div>

            <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                We build Quality Management Systems that are precisely calibrated for your organization. Our systems are audit ready from day one, requiring minimal support from your core engineering team. This approach protects your financial runway while accelerating your path to market entry.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-900 text-center">
              What We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  QMS Build and Remediation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We design and implement comprehensive Quality Management Systems tailored to your organization. Our expertise spans ISO 13485, FDA QMSR, CE Mark, and MDSAP requirements.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Submission Execution
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  From 510(k) premarket notifications to De Novo applications and eSTAR submissions, we manage the end to end regulatory submission process.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Device History Record Operations
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We establish and manage Device History Record systems that provide complete traceability from component procurement through final device distribution.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Configuration Management
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We implement change control procedures, manage design history files, and ensure all documentation reflects your current product and process specifications.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Production Equipment Qualification
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We qualify production equipment to ensure consistent product quality and regulatory compliance throughout manufacturing operations.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Supplier Quality Engineering
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We conduct supplier audits, establish quality agreements, and implement supplier monitoring programs to ensure component quality meets regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Emerging MedTech companies face a critical resource constraint. Your engineering team is focused on product development, clinical validation, and market strategy. Yet regulatory compliance demands significant technical expertise, documentation discipline, and operational infrastructure that your core team cannot provide without diverting focus from innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When compliance systems are built reactively or without proper structure, they create technical debt that compounds over time. Mismanaged Quality Management Systems lead to audit findings, remediation costs, delayed submissions, and ultimately, reduced corporate valuation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The challenge is not whether you need compliance. The challenge is building it efficiently without depleting your engineering bandwidth or financial runway.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900">
                Our Fractional Bench Model
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We embed directly with your team as an extension of your organization. Our Quality and Regulatory Affairs professionals handle the heavy lifting of compliance, from Quality Management System design and documentation to submission preparation and regulatory strategy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Rather than hiring full time staff or managing external consultants who lack continuity, you gain access to experienced regulatory professionals who understand your product, your market, and your business constraints. We work at your pace, scaling our engagement as your organization grows.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">What This Means for Your Team</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">Your engineers focus on product development and innovation, not compliance documentation</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">You avoid the cost and commitment of hiring full time regulatory staff</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">Your Quality Management System is built right from the start, preventing costly remediation later</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">You maintain regulatory readiness throughout your development cycle</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">Your path to market entry is accelerated with confidence in your compliance posture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-900 text-center">
              Proven Track Record
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-500 mb-4">15+</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Successful Audits and Inspections
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our clients have successfully navigated regulatory inspections with Quality Management Systems we designed and implemented. Each engagement reflects our commitment to compliance excellence and operational readiness.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-500 mb-4">100%</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Compliance Focused
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every system we build is grounded in regulatory frameworks including ISO 13485, FDA QMSR, CE Mark, and MDSAP requirements. We treat compliance as a strategic operational milestone, not an administrative burden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Compliance Foundation?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Let us help you establish a Quality Management System that protects your business and accelerates your market entry.
            </p>
            <a href="/contact" className="button-primary inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

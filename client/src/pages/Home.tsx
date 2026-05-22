import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Fractional Quality and Regulatory Affairs Execution for MedTech Startups
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Connecting Groundbreaking Medical Engineering with Complex Compliance Landscapes
              </p>
              <a href="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Core Value Proposition */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Right Sized. Audit Ready. Market Ready.
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
              We build Quality Management Systems that are precisely calibrated for your organization. Our systems are audit ready from day one, requiring minimal support from your core engineering team. This approach protects your financial runway while accelerating your path to market entry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Audit Ready Systems
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Comprehensive Quality Management Systems designed to pass regulatory scrutiny on first inspection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <TrendingUp className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Accelerated Market Entry
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Streamlined compliance processes that reduce time to market without compromising regulatory integrity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Shield className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Financial Protection
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Minimize internal resource drain on your engineering team, preserving runway for product development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900 text-center">
              Proven Track Record
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-5xl font-bold text-yellow-500 mb-3">15+</div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  Successful Audits and Inspections
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our clients have successfully navigated regulatory inspections with Quality Management Systems we designed and implemented. Each engagement reflects our commitment to compliance excellence and operational readiness.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-5xl font-bold text-yellow-500 mb-3">100%</div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  Compliance Focused
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every system we build is grounded in regulatory frameworks including ISO 13485, FDA QMSR, CE Mark, and MDSAP requirements. We treat compliance as a strategic operational milestone, not an administrative burden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Compliance Foundation?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Let us help you establish a Quality Management System that protects your business and accelerates your market entry.
            </p>
            <a href="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

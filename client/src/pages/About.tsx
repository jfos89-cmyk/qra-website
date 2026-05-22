import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AlertCircle, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About QRA Strategies LLC</h1>
            <p className="text-xl text-blue-100">
              Regulatory Excellence for MedTech Innovation
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At QRA Strategies LLC, we view regulatory compliance as a critical operational milestone rather than a simple administrative task. We partner with MedTech startups to build Quality Management Systems that are proportionate to their stage of development, operationally sound, and audit ready from inception. Our mission is to enable founders and engineering teams to focus on innovation while we manage the complexity of regulatory requirements.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-start gap-4 mb-8">
                <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  The Challenge
                </h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Emerging MedTech companies face a critical resource constraint. Your engineering team is focused on product development, clinical validation, and market strategy. Yet regulatory compliance demands significant technical expertise, documentation discipline, and operational infrastructure that your core team cannot provide without diverting focus from innovation.
                </p>

                <p className="text-lg leading-relaxed">
                  When compliance systems are built reactively or without proper structure, they create technical debt that compounds over time. Mismanaged Quality Management Systems lead to audit findings, remediation costs, delayed submissions, and ultimately, reduced corporate valuation. The cost of poor compliance extends far beyond regulatory penalties. It impacts your ability to raise capital, secure partnerships, and achieve market entry timelines.
                </p>

                <p className="text-lg leading-relaxed">
                  The challenge is not whether you need compliance. The challenge is building it efficiently without depleting your engineering bandwidth or financial runway.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-start gap-4 mb-8">
                <Lightbulb className="text-yellow-500 flex-shrink-0 mt-1" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  Our Fractional Bench Model
                </h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We embed directly with your team as an extension of your organization. Our Quality and Regulatory Affairs professionals handle the heavy lifting of compliance, from Quality Management System design and documentation to submission preparation and regulatory strategy.
                </p>

                <p className="text-lg leading-relaxed">
                  Rather than hiring full time staff or managing external consultants who lack continuity, you gain access to experienced regulatory professionals who understand your product, your market, and your business constraints. We work at your pace, scaling our engagement as your organization grows.
                </p>

                <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 mt-8">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                    <Users className="text-yellow-500" size={28} />
                    What This Means for Your Team
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-yellow-500 font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">Your engineers focus on product development and innovation, not compliance documentation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-yellow-500 font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">You avoid the cost and commitment of hiring full time regulatory staff</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-yellow-500 font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">Your Quality Management System is built right from the start, preventing costly remediation later</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-yellow-500 font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">You maintain regulatory readiness throughout your development cycle</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-yellow-500 font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">Your path to market entry is accelerated with confidence in your compliance posture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'QMS Build and Remediation',
    description: 'We design and implement comprehensive Quality Management Systems tailored to your organization. Our expertise spans ISO 13485, FDA QMSR, CE Mark, and MDSAP requirements. Whether you are building from scratch or remediating an existing system, we ensure your QMS is audit ready and operationally sound.',
    standards: ['ISO 13485', 'FDA QMSR', 'CE Mark', 'MDSAP'],
  },
  {
    title: 'Submission Execution',
    description: 'From 510(k) premarket notifications to De Novo applications and eSTAR submissions, we manage the end to end regulatory submission process. Our team handles technical documentation, regulatory strategy, and FDA interactions to accelerate your path to market approval.',
    standards: ['510(k)', 'De Novo', 'eSTAR'],
  },
  {
    title: 'Device History Record Operations and Production Equipment Qualification',
    description: 'We establish and manage Device History Record systems that provide complete traceability from component procurement through final device distribution. Our DHR protocols ensure compliance with regulatory requirements and operational efficiency. We also qualify production equipment to ensure consistent product quality and regulatory compliance throughout manufacturing operations.',
    standards: ['DHR Design', 'Traceability Systems', 'Record Management', 'Equipment Qualification'],
  },
  {
    title: 'Configuration Management and Document Change Analysis',
    description: 'Effective configuration management is essential for regulatory compliance and operational stability. We implement change control procedures, manage design history files, and ensure all documentation reflects your current product and process specifications.',
    standards: ['Change Control', 'Design History Files', 'Document Management'],
  },
  {
    title: 'Supplier Quality Engineering and Evaluations',
    description: 'Your suppliers are part of your Quality Management System. We conduct supplier audits, establish quality agreements, and implement supplier monitoring programs to ensure component and service quality meets your regulatory and operational requirements.',
    standards: ['Supplier Audits', 'Quality Agreements', 'Supplier Monitoring'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive Quality and Regulatory Affairs Solutions for MedTech
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
              We provide end to end Quality and Regulatory Affairs services designed to support your organization at every stage of product development and commercialization. Our core competencies span Quality Management System design, regulatory submissions, operations, and supplier management.
            </p>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.standards.map((standard, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
              Why Choose QRA Strategies
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Regulatory Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team brings deep experience with FDA, international regulatory bodies, and notified bodies. We understand the nuances of different regulatory pathways and help you choose the right strategy for your product.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Operational Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not just build compliance systems, we build systems that work. Our Quality Management Systems are designed for operational efficiency and regulatory readiness.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Startup Perspective
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand the constraints of early stage MedTech companies. We right size our solutions to your stage of development and resource availability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Continuity and Partnership
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  As your fractional bench, we maintain continuity throughout your development cycle. We are invested in your success and committed to your long term compliance and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let us Help You Build Your Compliance Foundation
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your Quality and Regulatory Affairs needs.
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

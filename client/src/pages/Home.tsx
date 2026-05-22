import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
                Fractional Quality and Regulatory Affairs Execution for MedTech Startups
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95">
                Connecting Groundbreaking Medical Engineering with Complex Compliance Landscapes
              </p>
              <Link href="/contact">
                <button className="button-primary bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-md transition-colors">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Value Proposition */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Right Sized. Audit Ready. Market Ready.
            </h2>
            <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
              We build Quality Management Systems that are precisely calibrated for your organization. Our systems are audit ready from day one, requiring minimal support from your core engineering team. This approach protects your financial runway while accelerating your path to market entry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Audit Ready Systems
                    </h3>
                    <p className="text-foreground/70">
                      Comprehensive Quality Management Systems designed to pass regulatory scrutiny on first inspection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <TrendingUp className="text-accent flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Accelerated Market Entry
                    </h3>
                    <p className="text-foreground/70">
                      Streamlined compliance processes that reduce time to market without compromising regulatory integrity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Shield className="text-accent flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Financial Protection
                    </h3>
                    <p className="text-foreground/70">
                      Minimize internal resource drain on your engineering team, preserving runway for product development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="section-padding bg-primary/5">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
              Proven Track Record
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
                <div className="text-5xl font-bold text-accent mb-3">15+</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Successful Audits and Inspections
                </h3>
                <p className="text-foreground/70">
                  Our clients have successfully navigated regulatory inspections with Quality Management Systems we designed and implemented. Each engagement reflects our commitment to compliance excellence and operational readiness.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
                <div className="text-5xl font-bold text-accent mb-3">100%</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Compliance Focused
                </h3>
                <p className="text-foreground/70">
                  Every system we build is grounded in regulatory frameworks including ISO 13485, FDA QMSR, CE Mark, and MDSAP requirements. We treat compliance as a strategic operational milestone, not an administrative burden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Build Your Compliance Foundation?
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Let us help you establish a Quality Management System that protects your business and accelerates your market entry.
            </p>
            <Link href="/contact">
              <button className="button-primary bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-md transition-colors">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

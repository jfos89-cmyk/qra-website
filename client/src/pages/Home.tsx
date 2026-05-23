import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9e626bb1-9c8e-45cf-85d0-8110c919e42c',
          subject: 'New Contact Form Submission - QRA Strategies',
          from_name: 'QRA Strategies Website',
          ...formData,
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you for your inquiry. We will be in touch shortly.');
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Quality Management System Buildout, Regulatory Compliance, and Submissions</h1>
            <p>Safely accelerate the delivery of medical innovations to patients through precise quality engineering and regulatory execution</p>
            <a href="#contact-form" className="btn btn-primary">
              Schedule Your Initial Compliance Assessment
              <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* The Execution Gap */}
        <section className="bg-white">
          <div className="section-container">
            <h2 className="section-title">The Execution Gap</h2>
            <p className="section-subtitle">
              Emerging and mid tier MedTech companies frequently encounter a significant execution gap. Startups often lack the internal engineering bandwidth to support complex compliance requirements. Mismanaged compliance creates technical debt, burns capital, and directly impacts corporate valuation.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-light">
          <div className="section-container">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle">
              At QRA Strategies LLC, we view quality and regulatory compliance as an achievable operational milestone rather than a burdensome administrative checklist designed solely to please regulators. We embed seamlessly with your team to build the operations required to manufacture your device, requiring minimal support from your core engineers.
            </p>
          </div>
        </section>

        {/* The QRA Advantage */}
        <section className="bg-white">
          <div className="section-container">
            <h2 className="section-title">The QRA Advantage</h2>
            <p className="section-subtitle">
              Our team includes former notified body auditors and former FDA personnel. This provides our partners with an asymmetric advantage and direct insight into actual regulatory expectations.
            </p>
            
            <ul className="list">
              <li>Your engineers stay focused on product development and innovation</li>
              <li>Avoid the cost and commitment of hiring full time regulatory staff</li>
              <li>Your Quality Management System is built right from the start to prevent costly remediation</li>
              <li>Maintain regulatory readiness throughout your development cycle</li>
            </ul>
          </div>
        </section>

        {/* Core Technical Competencies */}
        <section className="bg-light">
          <div className="section-container">
            <h2 className="section-title">Core Technical Competencies</h2>
            
            <div className="grid grid-2">
              <div className="card">
                <h3>Strategy and Planning</h3>
                <ul className="list">
                  <li>Regulatory pathway selection and submission execution for 510(k), De Novo, PMA, and CE Mark</li>
                  <li>Quality system architecture optimized for scale and exit readiness</li>
                  <li>Pre submission planning and direct FDA engagement strategy</li>
                  <li>Diligence preparation and compliance remediation</li>
                </ul>
              </div>

              <div className="card">
                <h3>Quality Systems and Certification</h3>
                <ul className="list">
                  <li>Right sized QMS build out and certification for ISO 13485:2016 and MDSAP</li>
                  <li>CE Mark execution and technical file creation</li>
                  <li>Deep specialization in ISO 14971 risk management</li>
                </ul>
              </div>

              <div className="card">
                <h3>Submissions and Audits</h3>
                <ul className="list">
                  <li>Audit preparation and FDA inspection readiness</li>
                  <li>Form 483 remediation and response execution</li>
                </ul>
              </div>

              <div className="card">
                <h3>Operations and Supply Chain</h3>
                <ul className="list">
                  <li>Device History Record operations and production equipment qualification</li>
                  <li>Configuration management and document change analysis</li>
                  <li>Supplier quality engineering and evaluations</li>
                </ul>
              </div>
            </div>

            {/* Service Schema Markup */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Quality Management System Buildout and Regulatory Compliance",
                "description": "Comprehensive QMS build out, regulatory pathway selection, and submission execution for medical device companies",
                "provider": {
                  "@type": "Organization",
                  "name": "QRA Strategies LLC"
                },
                "areaServed": "US",
                "serviceType": "Medical Device Regulatory Consulting"
              })}
            </script>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white" id="contact-form">
          <div className="section-container">
            <h2 className="section-title">Schedule Your Initial Compliance Assessment</h2>
            
            <form onSubmit={handleSubmit}>
              {submitMessage && (
                <div className={`form-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                  {submitMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

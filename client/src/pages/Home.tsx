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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
                <h3>Right Sized QMS Build and Certification</h3>
                <p>ISO 13485:2016 and MDSAP certification tailored to your organization</p>
              </div>

              <div className="card">
                <h3>CE Mark Execution</h3>
                <p>Technical file creation and notified body coordination for European market entry</p>
              </div>

              <div className="card">
                <h3>Audit Preparation and FDA Inspection Response</h3>
                <p>Form 483 remediation and comprehensive inspection readiness</p>
              </div>

              <div className="card">
                <h3>Risk Management Specialization</h3>
                <p>Comprehensive risk analysis and mitigation strategies</p>
              </div>

              <div className="card">
                <h3>Device History Record Operations</h3>
                <p>Complete traceability from procurement through final device distribution and production equipment qualification</p>
              </div>

              <div className="card">
                <h3>Configuration Management and Supplier Quality</h3>
                <p>Change control procedures, design history file management, and supplier audits</p>
              </div>
            </div>
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
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting ? 'Sending...' : 'Schedule Assessment'}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

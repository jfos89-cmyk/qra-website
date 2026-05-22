import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
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
        {/* Contact Header */}
        <section className="bg-white" style={{ paddingTop: '1.5rem', paddingBottom: '1rem' }}>
          <div className="section-container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: '700', color: '#0B2341', marginBottom: '0.5rem' }}>
              Contact QRA Strategies
            </h1>
          </div>
        </section>

        {/* Email Contact */}
        <section className="bg-light" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
          <div className="section-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', color: '#0B2341' }}>
              Email
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '0' }}>
              <a href="mailto:genevieve@qrastrategies.com" style={{ color: '#0B2341', fontWeight: '600' }}>
                genevieve@qrastrategies.com
              </a>
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <div className="section-container">
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
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
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

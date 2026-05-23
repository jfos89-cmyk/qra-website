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
      <main className="flex-1 w-full">
        <section className="py-12 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-dark mb-4">Contact QRA Strategies</h1>
            <p className="text-lg text-gray-700 mb-8">
              Reach out to discuss your compliance strategy and how we can support your regulatory journey.
            </p>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-center text-gray-800 font-semibold">
                Email us directly at
              </p>
              <p className="text-center text-2xl font-bold text-gold mt-2">
                genevieve@qrastrategies.com
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-semibold text-navy-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="block text-sm font-semibold text-navy-dark mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Your company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-semibold text-navy-dark mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-semibold text-navy-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  placeholder="Tell us about your compliance needs"
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full py-3 px-6 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

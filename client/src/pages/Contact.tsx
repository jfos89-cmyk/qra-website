import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you for reaching out. We will be in touch shortly.');
        setFormData({
          name: '',
          company: '',
          email: '',
          message: '',
        });
      } else {
        toast.error('There was an issue submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('There was an issue submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Let us help you navigate the complexity of Quality and Regulatory Affairs
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="text-yellow-500" size={40} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
                <a
                  href="mailto:genevieve@qrastrategies.com"
                  className="text-gray-700 hover:text-blue-900 transition-colors text-lg"
                >
                  genevieve@qrastrategies.com
                </a>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="text-yellow-500" size={40} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Phone</h3>
                <p className="text-gray-700 text-lg">
                  Available by appointment
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="text-yellow-500" size={40} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Location</h3>
                <p className="text-gray-700 text-lg">
                  Serving MedTech companies nationwide
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are here to help you navigate the complexity of Quality and Regulatory Affairs. Whether you are just starting your compliance journey or looking to optimize your existing systems, we would love to discuss how we can support your organization. Fill out the form below and we will be in touch shortly to schedule a consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-blue-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-blue-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-blue-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-blue-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="Tell us about your Quality and Regulatory Affairs needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full button-secondary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

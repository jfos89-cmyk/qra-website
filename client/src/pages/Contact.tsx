import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { trpc } from '@/lib/trpc';
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
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl mt-4 opacity-95">
              Let us help you build your compliance foundation
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                <a
                  href="mailto:genevieve@qrastrategies.com"
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  genevieve@qrastrategies.com
                </a>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                <p className="text-foreground/70">
                  Available by appointment
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
                <p className="text-foreground/70">
                  Serving MedTech companies nationwide
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <p className="text-lg text-foreground/80">
                  We are here to help you navigate the complexity of Quality and Regulatory Affairs. Whether you are just starting your compliance journey or looking to optimize your existing systems, we would love to discuss how we can support your organization. Fill out the form below and we will be in touch shortly to schedule a consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground resize-none"
                    placeholder="Tell us about your Quality and Regulatory Affairs needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full button-primary bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 text-lg font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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

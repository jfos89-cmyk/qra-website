export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src="/manus-storage/QRALogo_24986d40.jpeg"
              alt="QRA Strategies LLC"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-300">
              Fractional Quality and Regulatory Affairs Execution for MedTech Startups
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wide">Contact</h4>
            <p className="text-sm">
              <a href="mailto:genevieve@qrastrategies.com" className="text-gray-300 hover:text-white transition-colors">
                genevieve@qrastrategies.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} QRA Strategies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-start">
            <img
              src="/manus-storage/QRALogo_24986d40.jpeg"
              alt="QRA Strategies LLC"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm opacity-90">
              Fractional Quality and Regulatory Affairs Execution for MedTech Startups
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Contact</h4>
            <p className="text-sm opacity-90">
              <a href="mailto:genevieve@qrastrategies.com" className="hover:text-accent transition-colors">
                genevieve@qrastrategies.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>
            &copy; {currentYear} QRA Strategies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

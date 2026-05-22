export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="section-container">
        <div className="footer-container">
          {/* Logo */}
          <div className="footer-section" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img
              src="/manus-storage/QRALogo_24986d40.jpeg"
              alt="QRA Strategies LLC"
              style={{ maxWidth: '200px', height: 'auto', maxHeight: '64px', objectFit: 'contain', margin: '0 auto 1rem' }}
            />
          </div>

          {/* Quick Links and Contact in single row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <div className="footer-section" style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Get in Touch</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Email Contact */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contact
            </p>
            <p>
              <a href="mailto:genevieve@qrastrategies.com">
                genevieve@qrastrategies.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} QRA Strategies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

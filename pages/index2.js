import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function SecondPage() {
  return (
    <div className="container">
      <Head>
        <title>Stop&Style - Professional Barber in Sevenoaks</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Professional barber services in Sevenoaks. Every cut is a masterpiece, every style crafted with precision." />
      </Head>

      <main>
        <div className="content-wrapper">
          <Header title="Stop&Style" />
          <nav className="navigation">
            <Link href="/" className="nav-link">
              Back to Reviews
            </Link>
          </nav>

          <div className="about-section">
            <div className="welcome-text">
              <p>Welcome to Stop&Style, step into a barbers where every cut is a masterpiece and every style is crafted with precision. At Stop&Style we're more than just barbers - we're artists dedicated to sculpting your look to perfection.</p>
              <p className="cta-text">Stop by Stop&Style today to experience the ultimate barbering experience!</p>
            </div>

            <div className="contact-section">
              <h2>Contact Us</h2>
              <div className="contact-grid">
                <div className="contact-item">
                  <h3>📍 Location</h3>
                  <p>Sevenoaks bus station<br />Sevenoaks, UK</p>
                </div>

                <div className="contact-item">
                  <h3>📞 Phone</h3>
                  <a href="tel:07301541850" className="contact-link">07301 541850</a>
                </div>

                <div className="contact-item">
                  <h3>✉️ Email</h3>
                  <a href="mailto:ramo@gmail.com" className="contact-link">ramo@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

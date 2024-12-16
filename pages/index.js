import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Awesome Hair By RE & CO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="content-wrapper">
          <Header title="Hello customers  Please review RE & CO" />
          
          <div className="reviews-link">
            <a href="https://www.google.com/search?q=stopandstyle_+sevenoaks&rlz=1C5CHFA_enGB1100GB1100&oq=stopandstyle_+sevenoaks&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB7SAQkxNDc4OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x47df4de7e538bd5b:0x21655eb46d4fee78,3,,,,," 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-link">
              <img src="/google_g_icon_download.png" alt="Google Reviews" className="social-icon" />
              <span>Our Google Reviews</span>
            </a>
            <span className="divider">|</span>
            <a href="https://www.instagram.com/stopandstyle_?igsh=NTc4MTIwNjQ2YQ==" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-link"
               title="Let us know on 'insta' how it went, add your best photo - thanks!">
              <img src="/instagram.png" alt="Instagram" className="social-icon" />
              <span>Message us on Instagram</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

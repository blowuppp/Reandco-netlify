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
        <Header title="Hello customers  Please review RE & CO" />
       
        <div className="reviews-link" style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          <a href="https://www.google.com/search?q=stopandstyle_+sevenoaks&rlz=1C5CHFA_enGB1100GB1100&oq=stopandstyle_+sevenoaks&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB7SAQkxNDc4OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x47df4de7e538bd5b:0x21655eb46d4fee78,3,,,,," target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/google_g_icon_download.png" alt="Google Reviews" width="24" height="24" style={{ marginRight: '8px' }} />
            Our Google Reviews
          </a>
          <span style={{ margin: '0 10px' }}> | </span>
          <a href="https://www.instagram.com/stopandstyle_?igsh=NTc4MTIwNjQ2YQ==" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
             title="Let us know on 'insta' how it went, add your best photo - thanks!">
            <img src="/instagram.png" alt="Instagram" width="24" height="24" style={{ marginRight: '8px' }} />
            Message us on Instagram
          </a>
        </div>
      </main>



      <Footer />
    </div>
  )
}

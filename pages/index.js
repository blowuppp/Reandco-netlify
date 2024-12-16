import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi Please review RE & CO " />
        <p className="description">
          Google Buisness Review <code>pages/index.js</code>
        </p>
        <div className="reviews-link">
          <a href="https://www.google.com/search?q=stopandstyle_+sevenoaks&rlz=1C5CHFA_enGB1100GB1100&oq=stopandstyle_+sevenoaks&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB7SAQkxNDc4OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x47df4de7e538bd5b:0x21655eb46d4fee78,3,,,,," target="_blank" rel="noopener noreferrer">
            Check out our Google Reviews
          </a>
          <span style={{ margin: '0 10px' }}> | </span>
          <a href="https://www.instagram.com/stopandstyle_?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
            Follow us on Instagram
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

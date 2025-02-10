import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const body = document.body;
    const colorStart = { r: 14, g: 162, b: 181 }; // #0ea2b5
    const colorEnd = { r: 100, g: 196, b: 209 }; // #64c4d1
    let lightness = 70; // Starting lightness
    let increasing = true; // Flag to determine if lightness is increasing or decreasing
    const updateBackground = () => {
      if (increasing) {
        lightness += 1; // Increase lightness
        if (lightness >= 80) increasing = false; // Change direction if max is reached
      } else {
        lightness -= 1; // Decrease lightness
        if (lightness <= 60) increasing = true; // Change direction if min is reached
      }

      // Interpolate between the two colors
      const r = Math.round(colorStart.r + (colorEnd.r - colorStart.r) * ((lightness - 60) / 20));
      const g = Math.round(colorStart.g + (colorEnd.g - colorStart.g) * ((lightness - 60) / 20));
      const b = Math.round(colorStart.b + (colorEnd.b - colorStart.b) * ((lightness - 60) / 20));

      body.style.background = `rgb(${r}, ${g}, ${b})`;
    };
    const interval = setInterval(updateBackground, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Splendid Hair By RE & CO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="content-wrapper">
          <div className="contact-box">
          <img src="/hairlogo.png" alt="Hair Logo" style={{ display: 'block', margin: '0px auto 0', maxWidth: '100%', height: 'auto' }} />
            <a href="https://www.google.com/search?q=stopandstyle_+sevenoaks&rlz=1C5CHFA_enGB1100GB1100&oq=stopandstyle_+sevenoaks&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB7SAQkxNDc4OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x47df4de7e538bd5b:0x21655eb46d4fee78,3,,,,," 
               target="_blank" 
               rel="noopener noreferrer" 
               className="contact-link">
              <img src="/google_g_icon_download.png" alt="Google Reviews" className="social-icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
              Review us on Google
            </a>
            <a href="https://www.instagram.com/stopandstyle_?igsh=NTc4MTIwNjQ2YQ==" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="contact-link"
               title="Let us know on 'insta' how it went, add your best photo - thanks!">
              <img src="/instagram.png" alt="Instagram" className="social-icon" />
              <span>Message us on Instagram</span>
            </a>
            <Link href="/index2" className="contact-link">
              About Us & Contact
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

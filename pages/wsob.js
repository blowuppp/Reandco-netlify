import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function WSOB() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Generate a temporary URL for the image blob
    const loadImage = async () => {
      try {
        const response = await fetch('/api/protected-image');
        if (!response.ok) throw new Error('Failed to load image');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
        return () => URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };
    loadImage();
  }, []);

  return (
    <>
      <Head>
        <title>Wee Gotcha! :-) ;-) :-0 &lt;3</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Wood Sitting on a bed"
            width={600}
            height={400}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
      </div>
    </>
  )
}

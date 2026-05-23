import type { Metadata } from 'next'
import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const metadata: Metadata = {
  title: 'Ahmed Elbalal | Frontend Developer',
  description:
    'Frontend Developer specializing in React, TypeScript, and scalable web applications.',
  metadataBase: new URL('https://ahmedelbalal.dev'),
  alternates: {
    canonical: 'https://ahmedelbalal.dev',
  },
  openGraph: {
    title: 'Ahmed Elbalal | Frontend Developer',
    description:
      'Frontend Developer specializing in React, TypeScript, and scalable web applications.',
    type: 'website',
    url: 'https://ahmedelbalal.dev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Elbalal Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Elbalal | Frontend Developer',
    description: 'Building scalable React/TypeScript apps with a performance-first mindset.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K7RB3TY201" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K7RB3TY201');
      `,
          }}
        />

        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ahmed Elbalal',
              jobTitle: 'Frontend Developer',
              url: 'https://ahmedelbalal.dev',
              email: 'mailto:aelballal@yahoo.fr',
              knowsAbout: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
              sameAs: ['https://github.com/AhmedElbalal'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
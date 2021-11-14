import React from "react"
import { Helmet } from 'react-helmet'

import Player from "../components/Player"
import { JsonLd } from '../components/JsonLd'


export default function Home() {
  return(
      <main>
          <Helmet htmlAttributes={{
            lang: 'en',
          }}>
            <html lang="en" />
            <title>Radio Rayhan</title>
            <description>Radio RayhanRadio Rayhan is a web radio station dedicated to Quran recitation, meaningful songs, Prophets biography, and a variety of lessons and wisdom.</description>
            <JsonLd>
              {{
                '@context': 'https://schema.org',
                "@type": "NewsMediaOrganization",
                url: 'http://www.rayhan.eu',
                name: 'Radio Rayhan',
                alternateName: "Rayhan",
                logo: "https://www.rayhan.eu",
                sameAs: [
                  "https://www.facebook.com/Rayhan.radio",
                  "https://www.instagram.com/radio_rayhan",
                  "https://twitter.com/Radio_Rayhan"
                ]
              }}
            </JsonLd>
          </Helmet>
          <h1>Radio Rayhan</h1>
          <p>Radio Rayhan is a web radio station dedicated to Quran recitation, meaningful songs, Prophets biography, and a variety of lessons and wisdom.</p>
         <Player/>
      </main>
     
  )
  
}

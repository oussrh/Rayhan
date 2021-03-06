import React from "react"
import { Helmet } from 'react-helmet'

import Player from "../components/Player"
import { JsonLd } from '../components/JsonLd'

import Logo from "../imgs/logo.png"


export default function Home() {
  return(
      <main>
          <Helmet htmlAttributes={{
            lang: 'en',
          }}
          meta={[
            {
              name:"apple-mobile-web-app-title",
              content:"Rayhan"
            },
            {
              name:"application-name",
              content:"Rayhan"
            },
            {
              name:"msapplication-TileColor",
              content:"#2d89ef"
            },
            {
              name: `description`,
              content: "Radio Rayhan is a web radio station dedicated to Quran recitation, meaningful songs, Prophets biography, and a variety of lessons and wisdom.",
            },
            {
              name: `og:url`,
              content: "https://www.rayhan.eu",
            },
            {
              property: `og:title`,
              content: "Radio Rayhan",
            },
            {
              property: `og:description`,
              content: "Radio Rayhan is a web radio station dedicated to Quran recitation, meaningful songs, Prophets biography, and a variety of lessons and wisdom.",
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: 'og:image',
              content: Logo,
            },
            {
              name: `twitter:card`,
              content: `summary_large_image`,
            },
            {
              name: `twitter:creator`,
              content: "Radio Rayhan",
            },
            {
              name: `twitter:title`,
              content: "Radio Rayhan",
            },
            {
              name: `twitter:description`,
              content: "Radio Rayhan is a web radio station dedicated to Quran recitation, meaningful songs, Prophets biography, and a variety of lessons and wisdom.",
            },
            {
              name: 'twitter:image',
              content: Logo,
            },
          ]}
          >
            <html lang="en" />
            <title>Radio Rayhan - Coran and Anachid</title>
            <description>Radio RayhanRadio Rayhan is a web radio station dedicated to Quran recitation, meaningful songs, Prophets biography, and a variety of lessons and wisdom.</description>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6c5f5f"/>
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
                ],
                
              }}
            </JsonLd>
          </Helmet>
          <h1>Radio Rayhan</h1>
          <p>Radio Rayhan is a web radio station dedicated to Quran recitation, meaningful songs, Prophets biography, and a variety of lessons and wisdom.</p>
         <Player/>
      </main>
     
  )
  
}

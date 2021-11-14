import React from "react"
import Iframe from 'react-iframe'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import "./style.css"

export default function Player() {
    
    const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
        bg: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    `)
   
  return(
      <>
    <div className="container">
        <div className="containerPlayer">
            <caption className="logo">
                <Img fluid={data.logo.childImageSharp.fluid} title="Radio Rayhan" alt="Radio Rayhan"/>
            </caption>
            <Iframe
                title="Radio Rayhan player"
                url="https://radio.rayhan.eu/public/rayhan/embed?theme=dark"
                frameBorder={0}
                allowtransparency={true}
                className="player"
            />

            <ul className="social" aria-label="Follow us">
                <Link external to="https://www.facebook.com/Rayhan.radio" target="_blank" rel="noopener noreferrer"><li><FaFacebookSquare title="Radio rayhan facebook page" alt="Radio rayhan facebook page"/></li></Link>
                <Link external to="https://www.instagram.com/radio_rayhan/" target="_blank" rel="noopener noreferrer"><li><FaInstagram title="Radio rayhan instagram page" alt="Radio rayhan instagram page"/></li></Link>
                <Link external to="https://twitter.com/Radio_Rayhan" target="_blank" rel="noopener noreferrer"><li><FaTwitterSquare title="Radio rayhan Twitter page" alt="Radio rayhan Twitter page"/></li></Link>
            </ul>
        </div>
        <div className="containerImg">
            <Img fluid={data.bg.childImageSharp.fluid} objectFit="cover" objectPosition="center bottom" title="Radio Rayhan" alt="Radio Rayhan"/>           
        </div>
    </div>
    </>
  )
  
  
}



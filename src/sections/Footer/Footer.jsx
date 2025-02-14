import React from 'react'
import Style from './FooterStyle.module.css'


function Footer() {
  return (
    <section id="footer" className={Style.container}>
      <p>
        &copy; 2024 Sarthak Raghuvanshi. <br />
        All rights reserved.
      </p>
    </section>
  )
}

export default Footer
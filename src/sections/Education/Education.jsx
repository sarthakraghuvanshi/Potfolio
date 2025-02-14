import React from 'react'
import Style from './Education.module.css'
function Education() {
  return (
    <section id="skills" className={Style.container}>
   <h1 className="sectionTitle">Education</h1>

  <div className={Style.Experince}>
    <h3>Master Of Computer Science </h3>
    <p><strong>Illinois Institiute of Technology, Chicago IL, USA</strong></p>
    <p><em>August 2023 - Present</em></p>
    
  </div>
  <hr/>

  <div className={Style.Experince}>
    <h3>Bachlor of Technology In Computer Science</h3>
    <p><strong>Acropolis Technical Campus, Indore MP, India</strong></p>
    <p><em>July 2017 - May 2021</em></p>
    
  </div>
  <hr/>

  
</section>

  )
}

export default Education
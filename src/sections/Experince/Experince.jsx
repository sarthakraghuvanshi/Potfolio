import React from 'react'
import Style from './ExperinceStyle.module.css'
function Experince() {
  return (
    <section id="skills" className={Style.container}>
   <h1 className="sectionTitle">Experience </h1>

   <div className={Style.Experince}>
        <h3>Salesforce Summer Intern - CIBC Bank USA, Chicago IL, USA</h3>
        <p><em><strong>Tools:</strong> Azure DevOps Tools, Process Builder, Lightning Flows</em></p>
        <p className={Style.date}><em>June 2024 - August 2024</em></p>
        <br/>
        <p className={Style.description}>
          • Designed and implemented a comprehensive DevOps pipeline for Salesforce application development, automating code validation on every pull request, dynamically generating metadata XML files, and publishing them as artifacts for efficient delta deployments.<br />
          <br/>• Collaborated with the developer team to deploy a private wealth application for a bank, ensuring seamless functionality and migrating Process Builder workflows to Lightning Flow with thorough testing and validation.
        </p>
      </div>
      <hr />
  <div className={Style.Experince}>
    <h3> Sr.Software Developer - Persistent Systems, Pune, India</h3>
    <p><em><strong>Tools:</strong> Salesforce LWC, Salesforce APEX, SOQL, Visualforce Page, Sales Cloud, Sercvice Cloud</em></p>
    <br/>
    <p className={Style.date}><em>July 2021 - July 2023</em></p><p className={Style.description}>
    • Directed the development of the Loan Orientation System on Salesforce Sales Cloud. Led the development of 12 distinct
 sub-frameworks, each for single functionality, demonstrating adaptability customization tailored to client needs for effective solution.
 <br/>
 <br/>• Architected pivotal modules including document upload, query management, EMI calculation, and banking functionalities on Salesforce
 Lightning Web Component using JavaScript, Salesforce Apex, and SOQL, resulting in a 30% decrease in customer escalations and
 increased customer satisfaction.
        </p>
    
  </div>
  <hr/>

  <div className={Style.Experince}>
    <h3>Software Developer  - Persistent Systems, Pune, India</h3>
    <p><em><strong>Tools:</strong> AWS S3, Marketing Cloud, Salesforce CDP, RESTful API</em></p>
    <p className={Style.date}><em>July 2020 - July 2021</em></p>
    <p className={Style.description}>
    • Leveraged the Salesforce Customer Data Platform (CDP) to extract data from Amazon S3, MuleSoft, and Marketing Cloud via RESTful
 API calls in JSON format. Analyzed a dataset of over 30,000 records, leading to the identification and segmentation of highly targeted
 audience, resulting in a 20% increase in email open rates and a 15% boost conversion rates.
 <br/><br/>• Implemented Automated Pipeline and workflows for major clients’ marketing campaigns using Salesforce Marketing Cloud, Email
 Studio, and Social Studio for multi-channel marketing, leading to a 15% increase lead conversion
        </p>
  </div>
</section>

  )
}

export default Experince
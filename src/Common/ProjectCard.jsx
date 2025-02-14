import React from 'react';
import styles from './Project.module.css';

function ProjectCard({ src, link, h3, p, description }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      
      <p>{description}</p>
    </a>
  );
}

export default ProjectCard;
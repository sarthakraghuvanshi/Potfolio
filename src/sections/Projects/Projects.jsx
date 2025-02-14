import styles from "./ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import bu from "../../assets/fresh-burger.png";
import fit from "../../assets/fitlift.png";
import hip from "../../assets/hipsster.png";
import ProjectCard from "../../Common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="SectionTitle" style={{ marginBottom: '20px' }}>Projects</h1> {/* Add margin here */}

      <table className={styles.projectsTable} style={{ marginTop: '20px', width: '100%' }}>
        <tbody>
          <tr className={styles.projectRow}>
            <td className={styles.projectCell}>
              <ProjectCard
                src={viberr}
                link="https://github.com/SARTHAK9111/PropertyPlus.git"
                h3="Property Plus"
                p="Streaming App"
                description="Property Plus is a streaming app that allows users to watch and stream their favorite shows and movies."
              />
            </td>
            <td className={styles.projectCell}>
              <ProjectCard
                src={bu}
                link="https://github.com/SARTHAK9111/KNN_Visualizar"
                h3="KNN Visualizer"
                p="Algorithm Demonstration"
                description="KNN Visualizer is a tool to demonstrate the K-Nearest Neighbors algorithm with interactive visualizations."
              />
            </td>
          </tr>
          <tr className={styles.projectRow}>
            <td className={styles.projectCell}>
              <ProjectCard
                src={fit}
                link="https://github.com/SARTHAK9111/crawler"
                h3="Web Crawler"
                p="Algorithm Demonstration"
                description="Web Crawler is an algorithm demonstration project that showcases how web crawling works."
              />
            </td>
            <td className={styles.projectCell}>
              <ProjectCard
                src={hip}
                link="https://github.com/SARTHAK9111/crawler"
                h3="Web Crawler"
                p="Algorithm Demonstration"
                description="Web Crawler is an algorithm demonstration project that showcases how web crawling works."
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Projects;
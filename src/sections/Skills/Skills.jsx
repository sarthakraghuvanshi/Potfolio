import styles from "./SkillsStyle.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../Common/SkillList";
import { useTheme } from "../../Common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python"></SkillList>
        <SkillList src={checkMarkIcon} skill="Java"></SkillList>
        <SkillList src={checkMarkIcon} skill="C"></SkillList>
        <SkillList src={checkMarkIcon} skill="C++"></SkillList>
        <SkillList src={checkMarkIcon} skill="JavaScript"></SkillList>
        <SkillList src={checkMarkIcon} skill="Restful APIs"></SkillList>
        <SkillList src={checkMarkIcon} skill="HTML"></SkillList>
        <SkillList src={checkMarkIcon} skill="CSS"></SkillList>
        <SkillList src={checkMarkIcon} skill="Apex"></SkillList>
        <SkillList src={checkMarkIcon} skill="Salesforce LWC"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Django"></SkillList>
        <SkillList src={checkMarkIcon} skill="ReactJS"></SkillList>
        <SkillList src={checkMarkIcon} skill="NodeJS"></SkillList>
        <SkillList src={checkMarkIcon} skill="GIT/GitHub"></SkillList>
        <SkillList src={checkMarkIcon} skill="Pandas"></SkillList>
        <SkillList src={checkMarkIcon} skill="ExpressJS"></SkillList>
        <SkillList src={checkMarkIcon} skill="Docker"></SkillList>
      </div>

     <hr/>

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQLite"></SkillList>
        <SkillList src={checkMarkIcon} skill="MongoDB"></SkillList>
        <SkillList src={checkMarkIcon} skill="MySQL"></SkillList>
        <SkillList
          src={checkMarkIcon}
          skill="Salesforce SalesCloud"
        ></SkillList>
        <SkillList
          src={checkMarkIcon}
          skill="Salesforce Marketing Cloud"
        ></SkillList>
        <SkillList src={checkMarkIcon} skill="Salesforce CDP"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill="Salesforce: Platform Developer 1"
        ></SkillList>
        <SkillList
          src={checkMarkIcon}
          skill="Marketing Cloud Email Specialist"
        ></SkillList>
        <SkillList
          src={checkMarkIcon}
          skill="Marketing Cloud Administrator"
        ></SkillList>
      </div>
    </section>
  );
}

export default Skills;

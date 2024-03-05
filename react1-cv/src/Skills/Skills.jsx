import SkillsItem from "./SkillsItem";
import classes from "./index.module.css";
import Heading from "../Heading/Heading";

function Skills({ heading, skills }) {
  return (
    <div className={classes.skills}>
      <Heading heading={heading} />
      <div className={classes.skills__container}>
        {skills.map((item, index) => {
          return <SkillsItem key={index} skill={item} />;
        })}
      </div>
    </div>
  );
}

export default Skills;

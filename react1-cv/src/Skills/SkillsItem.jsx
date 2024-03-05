import classes from "./index.module.css";

function SkillsItem({ skill }) {
  return (
    <div className={classes.skills__item}>
      <p className={classes.skills__name}>{skill.name}</p>
      <div className={classes.skills__bar}>
        <div
          className={classes.skills__value}
          style={{ width: `${skill.level}%` }}
        >
          <div className={classes.skills__number}>{skill.level}</div>
        </div>
      </div>
    </div>
  );
}

export default SkillsItem;

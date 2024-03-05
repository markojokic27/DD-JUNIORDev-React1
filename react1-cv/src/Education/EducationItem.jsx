import classes from "./index.module.css";
function EducationItem({ education }) {
  return (
    <div className={classes.educationItem}>
      <h3>{education.degree}</h3>
      <p className={classes.educationItem__school}>
        <b>{education.school}</b> ({education.start}-{education.end})
      </p>
      <p>Address: {education.address}</p>
      <p>
        Website: <a href={education.website}>{education.website}</a>
      </p>
    </div>
  );
}
export default EducationItem;

import EducationItem from "./EducationItem";
import classes from "./index.module.css";
import Heading from "../Heading/Heading";
import CourseItem from "./CourseItem";
function Education({ heading, education, child }) {
  return (
    <div className={classes.education}>
      <Heading heading={heading} />
      {education.map((item, index) =>
        child == "EducationItem" ? (
          <EducationItem key={index} education={item} />
        ) : (
          <CourseItem key={index} course={item} />
        )
      )}
    </div>
  );
}
export default Education;

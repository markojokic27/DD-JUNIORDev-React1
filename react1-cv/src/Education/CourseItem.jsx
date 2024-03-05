import classes from "./index.module.css";

function CourseItem({ course }) {
  return (
    <div className={classes.courseItem}>
      <div className={classes.courseItem__heading}>
        <h3>{course.name}</h3>
        &nbsp; &nbsp; 
        <p>({course.start}-{course.end})</p>
      </div>
      <p>{course.skills}</p>
    </div>
  );
}

export default CourseItem;

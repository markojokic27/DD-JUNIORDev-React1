import classes from "./index.module.css";
function Heading(props) {
  return (
    <div className={classes.heading}>
      <h2>{props.heading}</h2>
      <div className={classes.heading__line}></div>
    </div>
  );
}

export default Heading;

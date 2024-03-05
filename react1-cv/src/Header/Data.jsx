import classes from "./index.module.css";
function Data(props) {
  if (props.type === "LinkedIn: ") {
    return (
      <p className={classes.data}>
        <b>{props.type}</b>
        <a href={props.value}>{props.value}</a>
      </p>
    );
  }
  return (
    <p className={classes.data}>
      <b>{props.type}</b>
      <span>{props.value}</span>
    </p>
  );
}

export default Data;

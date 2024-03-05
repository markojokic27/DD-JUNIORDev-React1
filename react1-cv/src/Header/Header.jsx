import classes from "./index.module.css";
import profilePhoto from "../assets/profile.jpg";
import Data from "./Data";
function Header(props) {
  return (
    <div className={classes.header}>
      <div className={classes.header__name}>
        <h1>{props.name}</h1>
        <p>
          <b>{props.description}</b>
        </p>
        <Data type="Date of birth: " value={props.birth} />
        <Data type="Place of birth: " value={props.place} />
        <Data type="Email address: " value={props.email} />
        <Data type="LinkedIn: " value={props.linkedIn} />
      </div>
      <div className={classes.header__img}>
        <img src={profilePhoto} alt="Profile" />
      </div>
    </div>
  );
}
export default Header;

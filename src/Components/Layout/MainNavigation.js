import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">What Are You Wining About?</Link>
      </div>
      <nav>
        <ul className={classes.headerul}>
          <li>
            <Link to="/all-wines">All Wines</Link>
          </li>
          <li>
            <Link to="/take-the-quiz">Take the Quiz</Link>
          </li>
          <li>
            <Link to="/profile">Your Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

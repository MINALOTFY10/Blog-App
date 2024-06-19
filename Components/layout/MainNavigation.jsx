'use client'

import { useState } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [isHomeOpen, setIsHomeOpen] = useState(true);

  return (
    <nav className={classes.navBar}>
      <div>
        <h3 className={classes.logoText}>Slash Blog</h3>
      </div>

      <div className={classes.buttons}>
        <li>
          <Link
            href="/"
            className={`${classes.nav_element} ${
              isHomeOpen ? classes.active : ""
            }`}
            onClick={() => setIsHomeOpen(true)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/new-post"
            className={`${classes.nav_element} ${
              !isHomeOpen ? classes.active : ""
            }`}
            onClick={() => setIsHomeOpen(false)}
          >
            Add New Blog
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default MainNavigation;

import { Button } from "@mui/material";
import React from "react";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/">
        <h3 className={styles.logo}>React Movie</h3>
      </Link>
      <div className={styles.rightSide}>
        <div className={styles.links}>
          <a href="/">
            <Button>Главная</Button>
          </a>
          <a href="/">
            <Button>О нас</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

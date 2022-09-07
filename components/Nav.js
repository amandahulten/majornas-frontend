import styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <a>hem</a>
      <a>kalendarium</a>
      <h1>Majornas böcker & kaffe</h1>
      <a>nyheter</a>
      <a>om oss</a>
    </nav>
  );
};

export default Nav;

import styles from "./Footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://www.linkedin.com/in/dmt-solovey/"
        target="_blank"
        rel="noreferrer"
        className={styles.linkToProfile}
      >
        Linkedin
        <img src="/images/linkedin.svg" alt="linkedin-icon" />
      </a>
      <a
        href="https://github.com/dmtsolovey"
        target="_blank"
        rel="noreferrer"
        className={styles.linkToProfile}
      >
        GitHub
        <img src="/images/github.svg" alt="github-icon" />
      </a>
    </div>
  );
}

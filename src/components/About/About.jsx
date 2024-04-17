import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
              Experienced data analyst skilled in transforming complex datasets into actionable insights. Proficient in statistical analysis, data visualization, and optimizing business processes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Trader</h3>
              <p>
              Seasoned trader with a track record of making strategic decisions in fast-paced financial markets. Proficient in market analysis, risk management, and executing trades to maximize returns.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

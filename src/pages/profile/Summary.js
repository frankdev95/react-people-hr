import styles from "../css/Summary.module.css";
import abscence from "../../assets/images/abscence.png";
import holiday from "../../assets/images/holiday.png";
import clock from "../../assets/images/clock.png";
import placeholder from "../../assets/images/placeholder.jpg";
import MainHeader from "../../components/UI/Typography/MainHeader";

const Summary = (props) => {
  return (
    <section className={styles.summary}>
      <header className={styles.header}>
        <div className={styles["title-container"]}>
          <MainHeader>Summary</MainHeader>
        </div>
        <div className={styles["header-tag"]}>
          <div className={styles["header-tag-name"]}>
            <h1>Matt Kershaw</h1>
            <h4>MAG019</h4>
          </div>
          <div className={styles["header-tag-meta"]}>
            <div>
              <p>Admin</p>
            </div>
            <div>
              <p>Full Time</p>
            </div>
          </div>
        </div>
        <div className={styles["header-summary"]}>
          <div>
            <div className={styles["profile-img"]}>
              <img src={placeholder} alt="profile img" />
            </div>
          </div>
          <div className={styles["header-info"]}>
            <h1>CEO</h1>
            <div className={styles["header-info-data"]}>
              <div>
                <div className={styles["header-data-item"]}>
                  <h4>Date Hired</h4>
                  <p>Fri, 14 Jul 2017</p>
                </div>
                <div className={styles["header-data-item"]}>
                  <h5>Location</h5>
                  <p>Maidstone</p>
                </div>
              </div>
              <div>
                <div className={styles["header-data-item"]}>
                  <h4>Department</h4>
                  <p>Executive Leadership</p>
                </div>
                <div className={styles["header-data-item"]}>
                  <h4>Contracted Hours</h4>
                  <p>37.500</p>
                </div>
              </div>
              <div>
                <div className={styles["header-data-item"]}>
                  <h4>Work Phone</h4>
                  <p>07454949988</p>
                </div>
                <div className={styles["header-data-item"]}>
                  <h4>Email</h4>
                  <p>matt@magnussearch.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["header-actions"]}>
            <div className={styles["header-action"]}>
              <img src={clock} alt="clock image" />
              <div>
                <h3>3 Yr 11 Mo</h3>
                <h4>Length of Employment</h4>
              </div>
            </div>
            <div className={styles["header-action"]}>
              <img src={abscence} alt="abscence image" />
              <div>
                <h3>0 Days</h3>
                <h4>Abscences</h4>
              </div>
            </div>
            <div className={styles["header-action"]}>
              <img src={holiday} alt="holiday image" />
              <div>
                <h3>22.00 Days</h3>
                <h4>Holiday Remaining</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Summary;

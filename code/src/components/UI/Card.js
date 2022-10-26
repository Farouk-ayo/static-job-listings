import photosnap from "../../images/photosnap.svg";
import manage from "../../images/manage.svg";
import account from "../../images/account.svg";
import myHome from "../../images/myhome.svg";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <section className={classes.card}>
      <main className={`${classes.eachCard} `}>
        <div className={classes.span}></div>
        <div className={classes.cardTitle}>
          <img src={photosnap} alt="" srcset="" />
          <div className={classes.info}>
            <div className={classes.headlines}>
              <p>Photosnap</p>
              <h2 className={classes.new}>NEW!</h2>
              <h2 className={classes.featured}>FEATURED</h2>
            </div>
            <h1>Senior Frontend Developer</h1>
            <div className={classes.description}>
              <p>1d ago</p>
              <span>.</span>
              <p>Full Time</p>
              <span>.</span>
              <p>USA only</p>
            </div>
          </div>
        </div>
        <div className={classes.caption}>
          <caption>Frontend</caption>
          <caption>Senior</caption>
          <caption>HTML</caption>
          <caption>css</caption>
          <caption>Javascript</caption>
        </div>
      </main>
      <main className={`${classes.eachCard} `}>
        <div className={classes.span}></div>
        <div className={classes.cardTitle}>
          <img src={manage} alt="" srcset="" />
          <div className={classes.info}>
            <div className={classes.headlines}>
              <p>Manage</p>
              <h2 className={classes.new}>NEW!</h2>
              <h2 className={classes.featured}>FEATURED</h2>
            </div>
            <h1>Fullstack Developer</h1>
            <div className={classes.description}>
              <p>1d ago</p>
              <span>.</span>
              <p>Part Time</p>
              <span>.</span>
              <p>Remote</p>
            </div>
          </div>
        </div>
        <div className={classes.caption}>
          <caption>Fullstack</caption>
          <caption>Midweight</caption>
          <caption>Python</caption>
          <caption>React</caption>
        </div>
      </main>
      <main className={`${classes.eachCard} `}>
        <div className={classes.cardTitle}>
          <img src={account} alt="" srcset="" />
          <div className={classes.info}>
            <div className={classes.headlines}>
              <p>Account</p>
              <h2 className={classes.new}>NEW!</h2>
            </div>
            <h1>Junior Frontend Developer</h1>
            <div className={classes.description}>
              <p>2d ago</p>
              <span>.</span>
              <p>Part Time</p>
              <span>.</span>
              <p>USA only</p>
            </div>
          </div>
        </div>
        <div className={classes.caption}>
          <caption>Frontend</caption>
          <caption>Junior</caption>
          <caption>React</caption>
          <caption>Sass</caption>
          <caption>Javascript</caption>
        </div>
      </main>
      <main className={`${classes.eachCard} `}>
        <div className={classes.cardTitle}>
          <img src={myHome} alt="" srcset="" />
          <div className={classes.info}>
            <div className={classes.headlines}>
              <p>MyHome</p>
            </div>
            <h1>Junior Frontend Developer</h1>
            <div className={classes.description}>
              <p>5d ago</p>
              <span>.</span>
              <p>Contract</p>
              <span>.</span>
              <p>USA only</p>
            </div>
          </div>
        </div>
        <div className={classes.caption}>
          <caption>Frontend</caption>
          <caption>Junior</caption>
          <caption>CSS</caption>
          <caption>JavaScript</caption>
        </div>
      </main>
    </section>
  );
};

export default Card;

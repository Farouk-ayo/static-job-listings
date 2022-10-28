import classes from "./Card.module.css";
import DUMMY_jOBS from "../store/context";

const Card = () => {
  const allJobs = [];

  DUMMY_jOBS.forEach((job) => {
    allJobs.push(
      <main className={`${classes.eachCard} `}>
        {job.featured && job.new && <div className={classes.span}></div>}

        <div className={classes.cardTitle}>
          <img src={job.image} alt="" srcset="" />
          <div className={classes.info}>
            <div className={classes.headlines}>
              <p>{job.name}</p>
              {job.new && <h2 className={classes.new}>{job.new}</h2>}
              {job.featured && (
                <h2 className={classes.featured}>{job.featured}</h2>
              )}
            </div>
            <h1>{job.title}</h1>
            <div className={classes.description}>
              <p>{job.day}</p>
              <span>.</span>
              <p>{job.duration}</p>
              <span>.</span>
              <p>{job.location}</p>
            </div>
          </div>
        </div>
        <div className={classes.caption}>
          {job.captions.map((caption) => (
            <caption>{caption}</caption>
          ))}
        </div>
      </main>
    );
  });

  return <section className={classes.card}>{allJobs}</section>;
};

export default Card;

import classes from "./Card.module.css";
import DUMMY_jOBS from "../store/context";
import React, { useState } from "react";
import iconRemove from "../../images/icon-remove.svg";

const Card = () => {
  const [clickedFiltered, setClickedFiltered] = useState(false);
  const [filter, setFilter] = useState([]);
  const [startFilter, setStartFiltering] = useState(true);

  const allJobs = [];

  const filteredCaption = (event) => {
    event.preventDefault();
    setClickedFiltered(true);
    setStartFiltering(false);
    const enteredValue = event.target.value;

    setFilter((filter) => [...filter, enteredValue]);
  };

  const removeFilter = (event) => {
    event.preventDefault();
    const removedValue = event.target.value;
    console.log(removedValue);
    setFilter(
      filter.filter((rem) => {
        return rem !== removedValue;
      })
    );

    setStartFiltering(false);
    console.log(filter);
  };

  const clearFilter = (event) => {
    event.preventDefault();
    setClickedFiltered(false);
    setFilter((filter) => [...filter]);
    setStartFiltering(false);
  };

  DUMMY_jOBS.forEach((job) => {
    allJobs.push(
      <React.Fragment>
        {startFilter ? (
          <main key={job.key} className={`${classes.eachCard} `}>
            {job.featured && job.new && <div className={classes.span}></div>}

            <div className={classes.cardTitle}>
              <img src={job.image} alt="" />
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
            <hr />
            <div className={classes.caption}>
              {job.captions.map((caption) => (
                <button onClick={filteredCaption} value={`${caption}`}>
                  {caption}
                </button>
              ))}
            </div>
          </main>
        ) : (
          filter.every((value) => job.captions.includes(value)) && (
            <main key={job.key} className={`${classes.eachCard} `}>
              {job.featured && job.new && <div className={classes.span}></div>}

              <div className={classes.cardTitle}>
                <img src={job.image} alt="" />
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
              <hr />
              <div className={classes.caption}>
                {job.captions.map((caption) => (
                  <button onClick={filteredCaption} value={`${caption}`}>
                    {caption}
                  </button>
                ))}
              </div>
            </main>
          )
        )}
      </React.Fragment>
    );
  });

  return (
    <section className={classes.card}>
      {clickedFiltered && (
        <form action="" className={classes.form}>
          <span className={classes.compbtn}>
            {filter.map((each) => (
              <button
                className={classes.btn}
                onClick={removeFilter}
                value={each}
              >
                {each}
                <img className={classes.remove} src={iconRemove} alt="" />
              </button>
            ))}
          </span>

          <p className={classes.clear} onClick={clearFilter}>
            Clear
          </p>
        </form>
      )}
      {allJobs}
    </section>
  );
};

export default Card;

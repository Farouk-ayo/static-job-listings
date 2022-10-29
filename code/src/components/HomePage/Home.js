import Card from "../UI/Card";
import classes from "./Home.module.css";
// import bgHeaderMobile from "../../images/bg-header-mobile.svg";
// import bgHeaderDesktop from "../../images/bg-header-desktop.svg";

const Home = (props) => {
  return (
    <main className={classes.home}>
      <header className={classes.top}>
        <div className={classes.bg}></div>
        <div className={classes.img}></div>
      </header>
      <Card key={props.key}/>
    </main>
  );
};
export default Home;

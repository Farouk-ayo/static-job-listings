import photosnap from "../../images/photosnap.svg";
import manage from "../../images/manage.svg";
import account from "../../images/account.svg";
import myHome from "../../images/myhome.svg";

const DUMMY_jOBS = [
  {
    id: 1,
    name: "Photosnap",
    image: photosnap,
    new: "NEW!",
    featured: "FEATURED",
    title: "Senior Frontend Developer",
    day: "1d ago",
    duration: "Full Time",
    location: "USA only",
    captions: ["Frontend", "Senior", "HTML", "css", "Javascript"],
  },
  {
    id: 2,
    name: " Manage",
    image: manage,
    new: "NEW!",
    featured: "FEATURED",
    title: "Fullstack Developer",
    day: "1d ago",
    duration: "Part Time",
    location: "Remote",
    captions: ["Fullstack", "Midweight", "Python", "React"],
  },
  {
    id: 3,
    name: " Account",
    image: account,
    new: "NEW!",
    title: "Junior Frontend Developer",
    day: "2d ago",
    duration: "Part Time",
    location: "USA only",
    captions: ["Frontend", "Junior", "React", "Sass", "Javascript"],
  },
  {
    id: 4,
    name: " MyHome",
    image: myHome,
    title: "Junior Frontend Developer",
    day: "5d ago",
    duration: "Contract",
    location: "USA only",
    captions: ["Frontend", "Junior", "CSS", "JavaScript"],
  },
];

export default DUMMY_jOBS;

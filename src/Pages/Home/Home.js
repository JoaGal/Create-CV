import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const howItWorks = [
  {
    id: 1,
    imgSrc: "CV.ico",
    title: "Fast and easy",
    description:
      "With our online resume builder it's easy for everyone to quickly create a professional resume. You enter your personal data and then start to fill in the content of your CV. Finally, choose one of our 36 available CV layouts and download your resume.",
  },
  {
    id: 2,
    imgSrc: "CV.ico",
    title: "You are more likely to get a job",
    description:
      "With a representative and professional resume you will stand out among other applicants. You are also up to 65% more likely to be invited for an interview.",
  },
  {
    id: 3,
    imgSrc: "CV.ico",
    title: "Organize your apps",
    description:
      "It is often important to be able to adjust resumes based on the job you are applying for. With the resume builder, you can create and manage multiple resumes in an organized way in your own personal account environment.",
  },
];

export const Home = () => {
  return (
    <div className="home-screen">
      <h1 className="home-title">Create a professional CV</h1>
      <p className="home-subtitle">
        Create a CV in less than 15 minutes and download it immediately.
      </p>
      <Link to="/createcv">
        <button className="home-button">Create CV</button>
      </Link>
      <ul className="home-ul">
        {howItWorks.map((item) => (
          <li className="home-li" key={item.id}>
            <img className="home-li-img" src={item.imgSrc} alt="img-1"></img>
            <div className="home-li-container-text">
              <h2 className="home-li-h2">{item.title}</h2>
              <p className="home-li-p">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
